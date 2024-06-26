import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('/api/v1/user/665bff7161da160910e179d2',{
            credentials:'include'
          }).then((res)=>{
            return res.json()
          }).then((user)=>{
            setUser(user.username)
          }).catch((e)=>{
            console.log(e.message)
          })
    }, [])
    function logout(){
        fetch('api/v1/auth/logout',{
            credentials:'include',
            method:'get'
        });
        setUser(null)
    }
    console.log(user)
    return (
        <nav className='h-16 w-full px-20 bg-black text-white'>
            <div className='flex w-full h-full justify-between items-center'>
                <div className='w-40'>
                    <p className='text-xl font-bold '>Code Blogger</p>
                </div>
                <ul className='w-1/2 flex justify-between items-center'>
                    {user && 
                    <>
                        <li><Link to='/blog'>create new post..</Link></li>
                        <li><Link to='/login' onClick={logout}>logout</Link></li>
                    </>}
                    {
                        !user &&
                        <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>Signup</Link></li>
                        </>

                    }
                </ul>
            </div>
        </nav>
    )
}
