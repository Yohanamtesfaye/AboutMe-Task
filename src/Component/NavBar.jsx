import React from 'react'
import logo from './../Images/y.jpg'
const NavBar = () => {
  return (
    <div className='flex justify-between ml-5' >
      <div className='flex-grow'>
        <img src={logo} alt="" style={{ width: '90px', height: '90px' }}/>
      </div>
      <div className='mt-6'>
        <a className='mr-10 font-serif hover:text-gray-100' href="#">Home</a>
        <a className='mr-10 font-serif hover:text-gray-100' href="">Portfolio</a>
        <a className='mr-10 font-serif hover:text-gray-100' href="">Pages</a>
        <a className='mr-10 font-serif hover:text-gray-100' href="">Blogs</a>
        <a className='mr-10 font-serif hover:text-gray-100' href="">Elements</a>
      </div>
      <div>
      </div>
    </div>
  )
}

export default NavBar