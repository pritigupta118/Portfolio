import React from 'react'
import {FaPencilRuler, FaHtml5, FaCss3, FaJs, FaReact, FaGithub,  FaNodeJs} from "react-icons/fa";

const Skills = () => {
  return (
    <div className='text-white'>

    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-screen'>

<div>
<div className='flex gap-2 justify-center items-center'>
<FaPencilRuler size={25}/><p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
</div>
<p className='py-2 text-gray-400'>These are the technologies I've worked with</p>
</div>

<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4 sm:py-8'>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center'>
                  <FaHtml5 className='bg-orange-700' size={100}/>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center'>
                  <FaCss3 className='bg-sky-300' size={100}/>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center'>
                  <FaJs className='bg-yellow-500' size={100}/>
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center'>
                  <FaGithub size={100}/>
                  <p className='my-4'>Github</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center'>
                  <FaReact className='bg-[#006069]' size={100}/>
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-center items-center'>
                  <FaNodeJs className='bg-green-600' size={100}/>
                  <p className='my-4'>NodeJs</p>
              </div>
</div>

    </div>
    </div>
  )
}

export default Skills
