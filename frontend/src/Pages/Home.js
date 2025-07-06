import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BASE_URL from '../api'

export default function Home() {
    const [user,setUser]=useState([])

    useEffect(()=>{
        loadUsers()
    },[])

    const loadUsers=async()=>{
      try{
       const response=await axios.get(`${BASE_URL}/allUsers`)
       console.log(response)
       setUser(response.data)
      }catch(err){
        console.error(err)
      }
    }

    const handleDelete=async(id)=>{
      try{
      const response=await axios.delete(`${BASE_URL}/user/${id}`);
      alert(response.data);
      loadUsers();
      }catch(err){
        console.error(err);
        alert("Failed to delete user");
      }
    }

  return (
    <div className="d-flex justify-content-center  p-3">
      <table className="table table-bordered shadow mx-auto">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((user,index)=>(
            <tr key={user.id}>
                  <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
              <td>
    <Link className="btn btn-info me-2" to={`/viewUser/${user.id}`}>View</Link>
    <Link className="btn btn-primary me-2" to={`/editUser/${user.id}`} >Edit</Link>
    <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
  </td>
            </tr>
            
        ))
    }

  </tbody>
</table>
    </div>
  )
}
