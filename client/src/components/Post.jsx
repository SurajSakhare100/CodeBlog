import React from 'react'
import { Link } from 'react-router-dom'
function Post() {
   
    return (
        <div className='w-full h-auto flex flex-col gap-2'>
            <Link className="w-full cursor-pointer" to={'/component'}>
                <img src="https://www.purrweb.com/blog/wp-content/uploads/2021/10/Salesforce-1-1.jpg" alt="Modern responsive website template" className='rounded-lg ' />
            </Link>
            <div className='flex flex-col md:gap-2'>
            <h3 className='text-lg font-bold'>E Commerce Web</h3>
            <h6>Supports keyboard and touch input, step interval, multiple thumb, and RTL direction</h6>
            </div>
        </div>
    )
}

export default Post
