import React from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function ViewApplicants() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/file/viewApplicants");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }

    const history = useHistory();
    const handleClick = (data) => {
      history.push("/applicantDetails",{state: data});
    };
  return (
    <div>
      <p style={{ marginTop: 30, textAlign: "center", fontSize: 30 }}>
        All Applicants
      </p>
      {data.map((data) => (
        <div>
          <button
            className="btn btn-success mt-3"
            style={{ marginLeft: 10 }}
            onClick={() => {
              handleClick(data);
            }}
          >
            <p>{data.name}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
