import React from "react";
import "./signup.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [cpassword, setCPassword] = React.useState();
  const [role, setRole] = React.useState();
  const [success, setSuccess] = React.useState(false);

  const history = useHistory();

  const checkPassword = (e) => {
    console.log(password);
    setCPassword(e);
    if (e === password) {
      setSuccess(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        name,
        email,
        password,
        role,
      });
      alert(res.data);
      history.push("/login");
    } catch (error) {}
  };
  return (
    <div className="login">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-50 signupContainer">
          <form onSubmit={handleSubmit}>
            <p className="text-center loginText">Sign Up</p>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control border-bottom"
                id="exampleFormControlInput1"
                placeholder="Enter Full Name"
                style={{ border: "none" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-bottom"
                id="exampleFormControlInput1"
                placeholder="Enter Email Address"
                style={{ border: "none" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control border-bottom"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
                style={{ border: "none" }}
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Confirm Password
              </label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="border-bottom"
              >
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    checkPassword(e.target.value);
                  }}
                  style={{ border: "none" }}
                />
                {/* {success ? <CheckCircleIcon style={{ color: 'green' }} /> : <HighlightOffIcon style = {{ color: 'red' }} />} */}
              </div>
            </div>

            <div className="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Role
              </label>
              <br />
              <select
                className="form-select border"
                aria-label="Default select example"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                style = {{ width: '100%', padding: 10, border: 'none' }}
              >
                <option selected>Open this to Select Role</option>
                <option value="0">Student</option>
                <option value="1">Admin</option>
                <option value="2">Employer</option>
              </select>
            </div>

            <div className="mb-3 mt-3 text-center">
              <button className="btn btn-success loginButton" type="submit">
                Sign Up
              </button>
            </div>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="mb-3 mt-3 text-center">
                <p>Already have an account? Sign In</p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
