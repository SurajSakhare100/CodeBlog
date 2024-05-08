import React from 'react'

function Blog({imgurl}) {
    return (
        <article className="">
                <img src={imgurl} className="mb-5 w-[420px]" alt="Image 1" />
        
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className='text-2xl'>How to Start a React App: A Beginner's Guide</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">In this tutorial, 
        we'll walk you through the steps to create a basic React application from scratch using Create React App</p>
            <a href="/blog/react" className="inline-flex items-center font-medium  text-white dark:text-primary-500 ">
                Read in 2 minutes
            </a>
        </article>
    )
}

export default Blog
