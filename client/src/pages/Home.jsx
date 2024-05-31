import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div>
      <div className="relative z-10  max-w-5xl mx-auto  flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-12 lg:py-24">
        <div className="relative flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
          <div className="space-y-2">
            <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight leading-normal md:-mb-4 text-slate-800">
              Skip the Hassle making websites,
              <br />
              and focus on your idea more
            </h1>
          </div>
          <p className="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
            Grab a Template, Edit, and Launch Your Idea
            <br />
            <p>Accelerate Your Idea with UITheme</p>
          </p>
          <Link
            className="bg-[#04ac74c9] hover:gap-3 transition-all w-[260px] hover:bg-[#04ac74] text-white text-sm font-bold py-3 rounded-lg shadow-md flex flex-wrap gap-2 justify-center"
            to="/"
          >
            Get Your Web Template
            {/* <img src={logo} width={18} height={16} alt="" /> */}
          </Link>
        </div>
        <div className="space-y-4 md:space-y-6 max-w-md mx-auto">
        <div className="rating !flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-base leading-relaxed space-y-1 max-w-md mx-auto text-center">
        
          <p>
          When I realized the time wasted on building websites from scratch, I created UITheme. Now, users get free web templates, saving time to focus on business growth.  <span className="bg-yellow-100/80 px-1.5 mx-1">
          Unlike others, we offer full code files for user freedom.</span>Thank you for your support!"
          </p>
            
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-4">
          <div className="rounded-full flex items-center justify-center bg-white w-12 p-1 h-12">
            <img
              alt="testimonial-photo"
              width="50"
              height="50"
              className="rounded-full "
              // src={profile}
            />
          </div>
          <div>
            <p className="font-semibold">Suraj Sakhare</p>
            <p className="text-sm flex items-center gap-2">
              500+ followers on 
              {/* <FaLinkedin className="text-base mt-1"/> */}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
