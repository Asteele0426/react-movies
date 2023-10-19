import { useState } from 'react';
export default function LoginPage({setUser}) {
  
  const[loginForm, setLoginForm]=useState({})
  const loginUser=(e)=>{
    e.preventDefault()
    setUser(loginForm)
  }
  const handleChange=(e)=>{
    const {name, value} =e.target;
    setLoginForm((prevState)=>({...prevState, [name]: value}))
  }
    return (
      <div>
      <h1>LoginPage</h1>
      <form onSubmit={loginUser}>
        <input onChange={handleChange} value={loginForm.userName} name="userName"></input>
        <button>Submit</button>
      </form>
      </div>
    );
  }