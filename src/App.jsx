import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dispatcLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from './layouts/Admin'
import Signup from 'components/Auth/Signup/Signup';
import Login from 'components/Auth/Login/Login';
import ForgotPassword from 'components/Auth/Forgot Password/ForgotPassword';
import ViewApplicants from 'components/View Applicants/ViewApplicants';
import ApplicantsDetails from 'components/Applicants Details/ApplicantsDetails';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const auth = useSelector(state => state.authReducer);
  const {isLogged, isAdmin, user} = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refreshToken', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatcLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  return (
    <BrowserRouter>
    {isLogged ? 
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/applicantDetails" render={() => <ApplicantsDetails />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch> :
      <Switch>
          <Route path="/signup" render={() => <Signup />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/forgot" render={() => <ForgotPassword />} />
      </Switch>
}
  </BrowserRouter>
  )
}
