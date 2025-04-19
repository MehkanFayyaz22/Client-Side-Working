import React, {useState , useEffect} from "react";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateUser(){
  const{id} = useParams()
  const[name, setName] = useState()
  const[email, setEmail] = useState()
  const[age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
      .then(result =>  {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch((err) => console.log(err))
  }, []);

  const Update=(e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
    .then(result => {
      console.log(result)
    navigate('/')
  })
    .catch(err => console.log(err))
  }

      return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2 className="mb-4 text-center">Update User</h2>
          <form action="#" method="post" onSubmit={Update}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
                value={name}
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
                value={email}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
  
            <button type="submit" className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    )
}
export default UpdateUser;