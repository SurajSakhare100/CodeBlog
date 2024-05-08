import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='flex flex-row items-center justify-between shadow-sm  py-2 fixed w-full h-[8vh] bg-transparent top-0 px-12'>
                <div className='flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faBars} className='hover:rounded-full hover:bg-slate-900 text-xl p-3 text-white' />
                    <em className='text-xl font-bold font-sans text-white hidden sm:block'>Code With Suraj</em>
                </div>
                <div className='md:flex md:gap-4 md:items-center hidden'>
                    <div className='h-full flex items-center justify-center relative '>
                        <input
                            type="text"
                            placeholder='Search'
                            className='md:w-[350px] texl-xl lg:w-[500px] xl:w-[700px] md:h-full bg-transparent border-b py-2 px-2 outline-none text-white '
                        />
                        <div className='h-full  absolute right-0 top-0 rounded-3xl shadow px-6 flex items-center justify-center rounded-l-none '>
                            <Link to={'search'} onClick={() => handlesubmit()}>
                                <FontAwesomeIcon icon={faSearch} className='text-white md:w-[20px] md:h-[20px]' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex gap-8 text-white text-md items-center'>
                        <NavLink to={'/'} isActive={(match, location) => {
                            // Only consider the link active if it's an exact match
                            if (!match) return false;
                            return match.isExact;
                        }} >Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/blog'}>Blog</NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
