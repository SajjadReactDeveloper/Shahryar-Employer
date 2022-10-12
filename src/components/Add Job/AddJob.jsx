import React from 'react';
import axios from 'axios';

export default function AddJob() {
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [location, setLocation] = React.useState();
    const [experience, setExperience] = React.useState();

    const addJob = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/job/addJob", { title, description, location, experience });
            alert(res.data);
        } catch (error) {
            
        }
    }
  return (
    <div>
      <form action="" className="p-5 border mt-5" onSubmit={addJob}>
        <p className="text-center">Add Jobs</p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Job Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Developer"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Job Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="We are hiring..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Job Location
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Islamabad"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Experience Required
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="2 years"
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary mt-3 mb-3" style={{ float: "right", marginBottom: 10 }}>
          Add Job
        </button>
      </form>
    </div>
  );
}
