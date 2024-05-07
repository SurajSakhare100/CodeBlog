import React from 'react'

function Header({header}) {
  return (
    <div>
      <h3 className='text-white text-xl font-bold'>{header}</h3>
    </div>
  )
}

export default Header
