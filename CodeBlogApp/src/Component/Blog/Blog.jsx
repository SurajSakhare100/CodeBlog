import React from 'react'

function Blog() {
    return (
        <article class="max-w-xs">
            <a href="#">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mb-5" alt="Image 1" />
            </a>
            <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className='text-2xl'>How to Start a React App: A Beginner's Guide</a>
            </h2>
            <p class="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
            <a href="/blog/react-development-guide" class="inline-flex items-center font-medium  text-white dark:text-primary-500 ">
                Read in 2 minutes
            </a>
        </article>
    )
}

export default Blog
