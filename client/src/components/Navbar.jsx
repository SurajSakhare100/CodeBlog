import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='h-16 w-full px-20 bg-black text-white'>
            <div className='flex w-full h-full justify-between items-center'>
                <div className='w-40'>
                    <p className='text-xl font-bold '>Code Blogger</p>
                </div>
                <ul className='w-1/2 flex justify-between items-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}
