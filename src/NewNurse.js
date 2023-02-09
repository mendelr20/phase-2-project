
import React, { useState } from "react";
import {useHistory } from "react-router-dom";

export default function NewNurse({addNurse}) {
  const [nurseName, setName] = useState("");
  const [nurseSalary, setSalary] = useState("");
  let history = useHistory();

  const formData = {
    name: nurseName,
    salary: nurseSalary,
    votes: 0
  };

  console.log(formData)
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSalaryChange(event) {
    setSalary(event.target.value);
  }

  function handleSubmit(){
    fetch('http://localhost:3000/nurses', configurationObject)
    .then((r) => r.json())
    .then(newNurse => addNurse(newNurse));
    history.push("/Nurses");
  }
  return (
    <div>
      <h1>New Nurse Form</h1>
      <h2>Add a nurse that is not on the list to this application</h2>
      <form class="ui form" onSubmit={handleSubmit}>
        <div class="two fields">
          <div class="field">
            Nurse Name
            <input type="text" onChange={handleNameChange} placeholder="Input Nurse Name" value={nurseName} />
          </div>
          <div class="field">
            Nurse Salary
            <input type="text" onChange={handleSalaryChange}  placeholder="Input Nurse Salary" value={nurseSalary}/>
          </div>
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
}
  


