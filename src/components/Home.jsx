import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='w-7/12 flex flex-col gap-2'>
        <p className='text-pink-800'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#FFBF00]'>Priti Gupta</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#e7d49d]'>I'm a Frontend Developer</h2>
        <p className='text-gray-400 font-light'>As a passionate frontend developer, I thrive on crafting captivating user interfaces that seamlessly blend aesthetics with functionality. Eager to embark on my journey into MERN stack development, I'm poised to elevate my skills and bring innovative projects to life.</p>

        <div className='flex fle-row gap-6 py-4'>
          <div><a href="https://www.linkedin.com/in/priti-gupta-871326250/" target='_blank'><FaLinkedin size={30} className='text-blue-400 rounded hover:text-opacity-80' /></a></div>
          <div><a href="https://github.com/pritigupta118" target='_blank'><FaGithub size={30} className='rounded text-orange-600 hover:text-opacity-80' /></a></div>
          <div><a href="https://twitter.com/PritiGu46230019" target='_blank'><FaTwitter size={30} className='rounded text-gray-400 hover:text-opacity-80' /></a></div>
          <div><a href="mailto:pritigupta1144@gmail.com" target='_blank'><FaEnvelope size={30} className='rounded text-red-700 hover:text-opacity-80' /></a></div>
        </div>

      </div>




    </div>

  )
}

export default Home
