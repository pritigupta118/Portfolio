import React, {useState} from 'react'
import { LOGO_URL } from '../utils/constant'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const [nav,setNav] = useState(false)

const toggleButttonClick = () =>{
  setNav(!nav);
}

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 shadow-none'>
     <div>
      <img src={LOGO_URL} alt="logo img" className='w-[50px] rounded-full'/>
     </div>
    
      <ul className='hidden md:flex cursor-pointer'>
        <li className='px-4'><Link to={"/"}>Home</Link></li>
        <li className='px-4'><NavLink to={"/about"} >About</NavLink></li>
        <li className='px-4'><NavLink to={"/skills"}>Skills</NavLink></li>
        <li className='px-4'><NavLink to={"/projects"}>Projects</NavLink></li>
        <li className='px-4'><NavLink to={"/chat"}>Chat</NavLink></li>
      </ul>
     

     <div onClick={toggleButttonClick} className='md:hidden z-10 mb-6'>
     {!nav ? <GiHamburgerMenu className='text-pink-600'/> : <FaTimes className='text-pink-600'/>}
     </div>


<ul  className={!nav ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-[#131313] flex flex-col justify-center items-center cursor-pointer'}>
        <li className='py-6 text-4xl'><Link to={"/"}>Home</Link></li>
        <li className='py-6 text-4xl'><NavLink to={"/about"}>About</NavLink></li>
        <li className='py-6 text-4xl'><NavLink to={"/skills"}>Skills</NavLink></li>
        <li className='py-6 text-4xl'><NavLink to={"/projects"}>Projects</NavLink></li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>


  

      {/* <div className='hidden md:flex fixed flex-col top-[25%] left-0'>
        <ul>
          <li className='w-[120px] h-[50px] flex items-center ml-[-75px] hover:ml-0 duration-300 bg-blue-500 px-2'>
            <a className='flex flex-row justify-between w-full font-bold' href="https://www.linkedin.com/in/priti-gupta-871326250/" target='_blank'>
              Linkedin <FaLinkedin size={25}/>
            </a>
          </li>
          <li className='w-[120px] h-[50px] flex items-center ml-[-75px] hover:ml-0 duration-300 bg-orange-700 px-2'>
            <a className='flex flex-row justify-between w-full font-bold' href="https://github.com/pritigupta118" target='_blank'>
              Github <FaGithub size={25}/>
            </a>
          </li>
          <li className='w-[120px] h-[50px] flex items-center ml-[-75px] hover:ml-0 duration-300 bg-green-600 px-2'>
            <a className='flex flex-row justify-between w-full font-bold' href="https://twitter.com/PritiGu46230019" target='_blank'>
              Twitter <FaTwitter size={25}/>
            </a>
          </li>
        </ul>
      </div> */}
    
    </div>
   
  )
}

export default Header
