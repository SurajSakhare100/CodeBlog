import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setredirct]=useState(false);
  function login(e){
    e.preventDefault();
    fetch('/api/v1/auth/login',{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include'
    }).then((res)=>{
      console.log(res)
      if(res.ok){
        setredirct(true)
      }
      else{
        alert('invalid credentials')
        setredirct(false)
      }

    }).catch((e)=>{
      console.log(e.message)
    })

  }

  if(redirect){
    return <Navigate to={`/`}/>
  }
  return (
    <div className='mt-10'>
      <h1 className='text-center text-4xl font-semibold'>Login</h1>
      <form 
        className='w-1/2 m-auto'
        onSubmit={login}>
        <label htmlFor="email">email</label>
        <input 
        type="email"
        value={email}
        onChange={(e)=>{setEmail(e.currentTarget.value)}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <label htmlFor="password">password</label>
        <input 
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.currentTarget.value)}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <button 
        className='w-full rounded-lg bg-black text-white py-2 hover:bg-slate-800 shadow-md'
        >Submit</button>
      </form>
    </div>
  )
}
