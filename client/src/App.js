import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
function App() {
  const [sname, setStudentName] = useState("");
  const [sbranch, setBranch] = useState("");
  const [Resident, setResidency] = useState("");
  const [id, setId] = useState("");
  const [sgender, setGender] = useState("");
  const [scgpa, setGpa] = useState("");
  const submitReview = () => {
    Axios.post("http://localhost:9000/Students", {
      S_name: sname,
      S_branch: sbranch,
      is_Indian: Resident,
      S_id: id,
      S_Gender: sgender,
      S_cgpa: scgpa,
    }).then(() => {
      alert("success");
    });
  };
  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label>
          <b>Student Name</b>
        </label>
        <input
          type="text"
          name="sname"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          required
        />
        <label>
          <b>Branch</b>
        </label>
        <input
          type="text"
          name="sbranch"
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          required
        />
        <label>
          <b>Residency</b>
        </label>
        <input
          type="text"
          name="Resident"
          onChange={(e) => {
            setResidency(e.target.value);
          }}
          required
        />
        <label>
          <b>Id</b>
        </label>
        <input
          type="text"
          name="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        />
        <label>
          <b>Gender</b>
        </label>
        <input
          type="text"
          name="sgender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          required
        />
        <label>
          <b>CGPA</b>
        </label>
        <input
          type="text"
          name="scgpa"
          onChange={(e) => {
            setGpa(e.target.value);
          }}
          required
        />
        <button onClick={submitReview}>
          <b>Submit</b>
        </button>
      </div>
    </div>
  );
}
export default App;
