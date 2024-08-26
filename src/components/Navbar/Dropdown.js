import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Dropdown = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState([
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen((prevStates) => {
      prevStates[index].isOpen = !prevStates[index].isOpen;
      return [...prevStates];
    });
  };

  const handleDropdownHover = (index, isHovered) => {
    setDropdownOpen((prevStates) => {
      prevStates[index].isHovered = isHovered;
      return [...prevStates];
    });
  };

  return (
    <div className='flex justify-around bg-[#ffffff] h-20  p-1 m-0'>
      {/* first section  */}
      <div className='flex justify-between gap-5  items-center'>
        <div>
          <h1 className='text-4xl font-bold cursor-pointer'>Tyre<span className='text-red-800'>Plex</span></h1>
        </div>
        <div className='flex ml-5 rounded-[20px] border-gray-500 p-2 h-95 items-center gap-3 bg-[#f1f7ff] md:flex hidden'>
          <BsSearch size={20} />
          <input className='outline-none h-full bg-[#f1f7ff]' type="text" placeholder="Search for products" />
        </div>
        <div className='hidden md:flex'>
          <ul className='font-bold flex gap-4'  >
            <li  className='cursor-pointer no-underline hover:underline hover:decoration-red-500' onMouseEnter={() => handleDropdownHover(0, true)} onMouseLeave={() => handleDropdownHover(0, false)}>
              Car Tyres
              {(isDropdownOpen[0].isOpen || isDropdownOpen[0].isHovered) && (
                <ul className='z-5 absolute bg-white shadow-md w-56 flex flex-col text-left gap-2 '>
                  <li className='hover:bg-gray-100 mt-2 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 mb-2 pl-1'>Submenu item 2</li>
                </ul>
              )}
            </li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'onMouseEnter={() => handleDropdownHover(1, true)} onMouseLeave={() => handleDropdownHover(1, false)} >Bike Tyres
            {(isDropdownOpen[1].isOpen || isDropdownOpen[1].isHovered) && (
                <ul className='z-5 absolute bg-white shadow-md w-56 flex flex-col text-left gap-2 '>
                  <li className='hover:bg-gray-100 mt-2 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 mb-2 pl-1'>Submenu item 2</li>
                </ul>
              )}
            </li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Tyre Pressure</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'onMouseEnter={() => handleDropdownHover(2, true)} onMouseLeave={() => handleDropdownHover(2, false)}>Commercial Tyres
            {(isDropdownOpen[2].isOpen || isDropdownOpen[2].isHovered) && (
                <ul className='z-5 absolute bg-white shadow-md w-56 flex flex-col text-left gap-2 '>
                  <li className='hover:bg-gray-100 mt-2 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 mb-2 pl-1'>Submenu item 2</li>
                </ul>
              )}
            </li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'onMouseEnter={() => handleDropdownHover(3, true)} onMouseLeave={() => handleDropdownHover(3, false)}>Accessories
            {(isDropdownOpen[3].isOpen || isDropdownOpen[3].isHovered) && (
                <ul className='z-5 absolute bg-white shadow-md w-56 flex flex-col text-left gap-2 '>
                  <li className='hover:bg-gray-100 mt-2 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 mb-2 pl-1'>Submenu item 2</li>
                </ul>
              )}
            </li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'onMouseEnter={() => handleDropdownHover(4, true)} onMouseLeave={() => handleDropdownHover(4, false)}>More
            {(isDropdownOpen[4].isOpen || isDropdownOpen[4].isHovered) && (
                <ul className=' z-5 absolute bg-white shadow-md w-56 flex flex-col text-left gap-2 '>
                  <li className='hover:bg-gray-100 mt-2 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 2</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 3</li>
                  <li className='hover:bg-gray-100 pl-1'>Submenu item 1</li>
                  <li className='hover:bg-gray-100 mb-2 pl-1'>Submenu item 2</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className='md:hidden flex justify-center'>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <>&times;</> : <>&#9776;</>}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-20 left-0 w-full bg-white shadow-md'>
          <ul className='font-bold flex flex-col gap-4 p-4'  >
            <li  className='cursor-pointer no-underline hover:underline hover:decoration-red-400'>Car Tyres</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Bike Tyres</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Tyre Pressure</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Commercial Tyres</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Accessories</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>More</li>
          </ul>
          <div className='flex items-center gap-1 cursor-pointer p-4'>
            <span><FaUserAlt/></span>
            <button className='font-medium'>Login</button>
          </div>
        </div>
      )}

      {/* second section  */}
      <div className='hidden md:flex items-center gap-1 cursor-pointer'>
        <span><FaUserAlt/></span>
        <button className='font-medium'>Login</button>
      </div>
    </div>
  )
}

export default Dropdown;
