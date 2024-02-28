import React from 'react'
import NavBar from './NavBar'
import Me from './../Images/Me.jpg'


const AboutMe = () => {
  return (
    <div>
       <NavBar/>
       <div className='ml-14 leading-relaxed'>
          <p className='font-bold mt-10 font-serif text-2xl'>About Me</p>
          <p className='mt-4 text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          incididunt ut labore et dolore magna aliqua. Quis ipsum  <br />
          </p>
       </div>
       <div className='flex'>
          <div className='flex-1'>
            <img className='mt-6 ml-14' src={Me} alt="" style={{width: '450px', height: '450px'}}/>
          </div>
          <div className='flex-1'>
            <p className='font-bold mt-10 font-serif text-2xl'>Yohana Mekuria</p>
            <p className='text-gray-500 font-serif mt-2'>Full-Stack Developer</p>
            <p className='mt-10 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> 
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices grav <br />
            dictum fusce ut placerat orci. Non odio euismod lacinia at. Erat imperdiet sed euis <br />
            nisi porta lorem. Et malesuada fames ac turpis egestas maecenas pharetra. Tristiq <br /> 
              nulla aliquet enim tortor at auctor urna. Facilisis sed odio morbi quis. Quam viverr <br />
              odio facilisis mauris. Integer vitae justo eget magna fermentum iaculis eu. 
            </p>
            <p className='mt-10 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> 
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices grav <br />
            dictum fusce ut placerat orci. Non odio euismod lacinia at. Erat imperdiet sed euis <br />
            nisi porta lorem. Et malesuada fames ac turpis egestas maecenas pharetra. Tristiq <br /> 
              nulla aliquet enim tortor at auctor urna. Facilisis sed odio morbi quis. Quam viverr <br />
              odio facilisis mauris. Integer vitae justo eget magna fermentum iaculis eu. 
            </p>
          </div>
       </div>
    </div>
  )
}

export default AboutMe