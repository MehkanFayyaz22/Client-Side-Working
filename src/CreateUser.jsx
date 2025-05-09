import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateUser(){
  const[name, setName] = useState()
  const[email, setEmail] = useState()
  const[age, setAge] = useState()
  const navigate = useNavigate()
  const Submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result => {
      console.log(result)
    navigate('/')
  })
    .catch(err => console.log(err))
  }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2 className="mb-4 text-center">Add Users</h2>
          <form action="#" method="post" onSubmit={Submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-control"
                required
                min="0"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
  
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
}
export default CreateUser;