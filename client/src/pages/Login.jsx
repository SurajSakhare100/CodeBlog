import React, { useState } from 'react'

export default function Login() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  return (
    <div className='mt-10'>
      <h1 className='text-center text-4xl font-semibold'>Login</h1>
      <form 
        className='w-1/2 m-auto'>
        <input 
        type="username"
        value={username}
        onChange={(e)=>{e.currentTarget.value}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <input 
        type="password"
        value={password}
        onChange={(e)=>{e.currentTarget.value}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <button 
        className='w-full rounded-lg bg-black text-white py-2 hover:bg-slate-800 shadow-md'
        >Submit</button>
      </form>
    </div>
  )
}
