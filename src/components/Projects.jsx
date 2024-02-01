import React from 'react'
import { FaTv } from "react-icons/fa";
import {data} from "../data/data.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
const Projects = () => {
    const project = data;

  return (
    <div  className='w-full h-screen text-gray-300 '>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
    <div className='pb-8 flex flex-col justify-center items-center'>
    <div className='flex flex-row justify-between items-center gap-2'>
    <FaTv size={25}/><p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#40cf8e]'>
            Projects
          </p>
    </div>
          <p className='py-4 text-gray-400'>Check out some of my recent work</p>
        </div>

<div className="grid sm:grid-cols-2 gap-8 justify-center items-center">
{project.map((item) => (
  <div key={item.id} className='w-full h-full flex flex-col gap-6 justify-center items-center border-2 border-[#40cf8e] bg-[#40cf8f0f] hover:scale-110 duration-500'>

  <div className='w-full p-4 flex justify-between'>
  <div><a href={item.github} target='_blank'><FaGithub size={25}/></a></div>
  <div><a href={item.live} target='_blank'><FaLink size={25}/></a></div> 
  </div>
<div className='py-4'>
  <p className='text-2xl font-bold text-gray-400'>{item.name}</p>
</div>
<div className='py-4 px-4'>
  <p>{item.technologies}</p>
</div>
  </div>
))}
</div>

    </div>
  
    </div>
  )
}

export default Projects
