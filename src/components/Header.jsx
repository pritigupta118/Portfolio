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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-white shadow-none'>
     <div>
      <img src={LOGO_URL} alt="logo img" className='w-[50px] rounded-full'/>
     </div>
    
      <ul className='hidden md:flex cursor-pointer'>
        <li className='px-4 font-bold'><Link smooth to={"/"}>Home</Link></li>
        <li className='px-4 font-bold'><NavLink to={"/about"}>About</NavLink></li>
        <li className='px-4 font-bold'><NavLink to={"/skills"}>Skills</NavLink></li>
        <li className='px-4 font-bold'><NavLink to={"/projects"}>Projects</NavLink></li>
        <li className='px-4 font-bold'><NavLink to={"/chat"}>Chat</NavLink></li>
      </ul>
     

     <div onClick={toggleButttonClick} className='md:hidden z-10 mb-6'>
     {!nav ? <GiHamburgerMenu className='text-pink-600'/> : <FaTimes className='text-pink-600'/>}
     </div>


<ul  className={!nav ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-[#131313] flex flex-col justify-center items-center cursor-pointer'}>
        <li className='py-6 text-4xl'><Link to={"/"}>Home</Link></li>
        <li className='py-6 text-4xl'><NavLink to={"/about"}>About</NavLink></li>
        <li className='py-6 text-4xl'><NavLink to={"/skills"}>Skills</NavLink></li>
        <li className='py-6 text-4xl'><NavLink to={"/projects"}>Projects</NavLink></li>
        <li className='py-6 text-4xl'><NavLink to={"/chat"}>Chat</NavLink></li>
      </ul>
    
    </div>
   
  )
}

export default Header
