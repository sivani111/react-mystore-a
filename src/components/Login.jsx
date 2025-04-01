import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { appContext } from '../App'
export default function Login() {
  const {user,users,setUser} = useContext(appContext)
  const [msg, setMsg] = useState()
  const navigate = useNavigate()
  const handleSubmit = () => {
    const found = users.find((value) => value.email === user.email && value.password === user.password);
    if (found){
      setMsg("Login Successful")
      setUser({...user, name: found.name})
      navigate("/")
    }
    else{
      setMsg("Invalid Credentials")
    }
  }
  return (
    <div>
      <h3>Login Form</h3>
      <p>{msg}</p>
      <p><input type="text" placeholder='Email address' onChange={(e)=>setUser({...user,email:e.target.value})}></input></p>
      <p><input type="password" placeholder='Password'onChange={(e)=>setUser({...user,password:e.target.value})}></input></p>
      <p><button onClick={handleSubmit}>Log In</button></p>
      <p><Link to="../register">Create Account</Link></p>
    </div>
  )
  }