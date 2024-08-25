import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Dropdown from './Dropdown';

const Navbar = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
        console.log(true)
      };
    
      const handleMouseLeave = () => {
        setDropdownVisible(false);
        console.log(false)
      };


  return (
    <div className='flex justify-around bg-[#ffffff] h-20  p-1 m-0'>
         {/* first section  */}
      <div className='flex justify-between gap-5  items-center'>
        <div>
            <h1 className='text-4xl font-bold cursor-pointer'>Tyre<span className='text-red-800'>Plex</span></h1>
        </div>
        <div className='flex ml-5 rounded-[20px] border-gray-500 p-2 h-95 items-center gap-3 bg-[#f1f7ff]'>
                <BsSearch size={20} />
                <input className='outline-none h-full bg-[#f1f7ff]' type="text" placeholder="Search for products" />
                
        </div>
        <div >
            <ul className='font-bold flex gap-4'  >
                <li  className='cursor-pointer no-underline hover:underline hover:decoration-red-400'>Car Tyres</li>
                <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Bike Tyres</li>
                <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Tyre Pressure</li>
                <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Commercial Tyres</li>
                <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Accessories</li>
                <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>More</li>
            </ul>
        </div>
      </div>

      {/* second section  */}
      <div className='flex items-center gap-1 cursor-pointer'>
        <span><FaUserAlt/></span>
        <button className='font-medium'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
