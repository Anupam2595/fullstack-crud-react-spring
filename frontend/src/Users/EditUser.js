import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();

    const {id}=useParams();

  const [formData,setFormData]=useState({
    name:"",
    userName:"",
    email:""
  })
  const handleChange=(e)=>{
    const{id,value}=e.target;
    setFormData({...formData,[id]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    try{
      await axios.put(`http://localhost:8888/user/${id}`,formData);
    navigate("/");
    }catch(error){
      alert("Something Went Wrong")
      console.error(error)

    }
  }
  return (
   <div className="d-flex justify-content-center align-items-center p-5 ">
      <div
        className="d-flex flex-column justify-content-center p-5  shadow bg-light"
        style={{ width: '350px' }}
      >
      <h2>Update User</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter The Name"  value={formData.name} onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="userName" className="form-label">UserName</label>
          <input type="text" className="form-control" id="userName" placeholder="Enter The UserName"  value={formData.userName} onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter The Email"  value={formData.email} onChange={handleChange}/>
        </div>

        <div className="d-flex gap-3 justify-content-center p-3">
          <button onClick={handleSubmit} className="btn btn-primary mb-3">Submit</button>
          <Link className="btn btn-danger mb-3" to="/">Cancel</Link>
        </div>
      </div>
    </div>
  )
}
