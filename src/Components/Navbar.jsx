import React from 'react'
import { LogoIcon } from "./icon"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className=' bg-gray-800 text-white h-14 flex items-center relative'>

      <span className=' absolute bottom-2 right-2 text-sm text-gray-400'>
        Created By Jitendriya Meher
      </span>

      <div className="wrapper-container w-full">
        
        <div className=" flex items-center gap-1 cursor-pointer" onClick={() =>{
            navigate("/");
        }}>

            <LogoIcon></LogoIcon>
            <p className="font-semibold">
            <span className="text-yellow-500">C</span>ypto<span className="text-yellow-500">U</span>pdate
          </p>

        </div>

      </div>
    </div>
  )
}

export default Navbar
