import React from 'react'

export default function NewNurse(){
  return (
    <div>
        <h1>New Nurse Form</h1>
        <form>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
          <label>
           Salary:
          <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>Click here to add a nurse that is not on the list to this application</h2>
    </div>
    
  )
}


