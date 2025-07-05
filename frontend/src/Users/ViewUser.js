import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ViewUser() {
const [user,setUser]=useState({})

const {id}=useParams();

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async()=>{
       const response=await axios.get(`http://localhost:8888/user/${id}`)
       console.log(response)
       setUser(response.data)
    }

  return (
    <div className="d-flex justify-content-center align-items-center p-5 ">
      <div
        className="d-flex flex-column justify-content-center p-5  shadow bg-light"
        style={{ width: '350px' }}
      >
      <h2>User details</h2>
        <div className="mb-3">
        <b>Name:</b><p>{user.name}</p>
        </div>
        <div className="mb-3">
        <b>UserName:</b><p>{user.userName}</p>
        </div>
        <div className="mb-3">
        <b>Email:</b><p>{user.email}</p>
        </div>
        <Link className="btn btn-primary my-3" to="/">Back To Home</Link>
        </div>
        </div>
  )
}
