import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div>
      <div className="relative z-10  max-w-5xl mx-auto  flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-12 lg:py-24">
        <div className="relative flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
          <div className="space-y-2">
            <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight leading-relaxed md:-mb-4 text-slate-800">
              Coding & Blogging is fun
              <br />
              lean new stuff every week
            </h1>
          </div>
          <p className="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
            Grab a Template, Edit, and Launch Your Idea
            <br />
            <span>Accelerate Your Idea with UITheme</span>
          </p>
          <Link
            className="bg-[#04ac74c9] hover:gap-3 transition-all w-[260px] hover:bg-[#04ac74] text-white text-sm font-bold py-3 rounded-lg shadow-md flex flex-wrap gap-2 justify-center"
            to="/"
          >
           create new post
            {/* <img src={logo} width={18} height={16} alt="" /> */}
          </Link>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Home
