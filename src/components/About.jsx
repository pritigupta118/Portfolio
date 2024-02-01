import React from 'react'
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
   <div className='w-full h-screen text-gray-400 flex justify-center items-center'>
  <div className='max-w-[1000px] flex flex-col gap-2 justify-center items-center'>
  <div className='flex gap-2 justify-center items-center mb-10 text-white'>
  <FaUser size={25}/><h1 className='text-4xl font-bold border-b-4 border-orange-600'>About</h1>
  </div>
  <div className='max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4'>
<div className='text-2xl sm:text-4xl font-bold px-4'>
  <p className='text-yellow-500'>
    Hi, I'm Priti, nice to meet you, Please take a look
  </p>
</div>
<div>
  <p>
    I'm 23 year old passionate about building excellent software that improves the lives of those around me. Currently I'm pursuing BTech from Maulana Abul Kalam Azad University of Technology in the department of Information Technology. I specialize in creating software for clients ranging from individual and small-business all thee way to large enterprise corporations, what would you do if you had a software expert available at your fingertips?
  </p>
</div>
  </div>
    
  </div>

   </div>
  )
}

export default About
