import React from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function ApplicantsDetails() {
    const location = useLocation();
    const applicants = location.state;
    const [message, setMessage] = React.useState()
  return (
    <div>
      <p style={{ marginTop: 30, textAlign: "center", fontSize: 30 }}>
        Applicants Details
      </p>
      <p>Applicant Name: {applicants.name}</p>
      <div
        className="d-flex justify-content-space-between mt-5"
        style={{ justifyContent: "space-around" }}
      >
        <div className="">
          <p style={{ fontWeight: "bold" }}>CV</p>
          <img src={applicants.cv} alt="" />
        </div>
        <div className="">
          <p style={{ fontWeight: "bold" }}>FSC Transcript</p>
          <img src={applicants.fsc} alt="" />
        </div>
        <div className="">
          <p style={{ fontWeight: "bold" }}>Matric Transcript</p>
          <img src={applicants.matric} alt="" />
        </div>
      </div>
      <div className="m-5">
        <form action="" >
          <input type="text" placeholder="Enter Message" className = "form-control" onChange={(e) => {
          setMessage(e.target.value)
        }} /><br />
        <button className="btn btn-success" type='submit'>Send Email</button>
        </form>
      </div>
    </div>
  );
}
