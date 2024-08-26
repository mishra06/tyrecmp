// import React, {  } from 'react'
// import { BsSearch } from "react-icons/bs";
// import { FaUserAlt } from "react-icons/fa";


// const Navbar = () => {


//   return (
//     <div className='flex justify-around bg-[#ffffff] h-20  p-1 m-0'>
//          {/* first section  */}
//       <div className='flex justify-between gap-5  items-center'>
//         <div>
//             <h1 className='text-4xl font-bold cursor-pointer'>Tyre<span className='text-red-800'>Plex</span></h1>
//         </div>
//         <div className='flex ml-5 rounded-[20px] border-gray-500 p-2 h-95 items-center gap-3 bg-[#f1f7ff]'>
//                 <BsSearch size={20} />
//                 <input className='outline-none h-full bg-[#f1f7ff]' type="text" placeholder="Search for products" />
                
//         </div>
//         <div >
//             <ul className='font-bold flex gap-4'  >
//                 <li  className='cursor-pointer no-underline hover:underline hover:decoration-red-400'>Car Tyres</li>
//                 <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Bike Tyres</li>
//                 <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Tyre Pressure</li>
//                 <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Commercial Tyres</li>
//                 <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Accessories</li>
//                 <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>More</li>
//             </ul>
//         </div>
//       </div>

//       {/* second section  */}
//       <div className='flex items-center gap-1 cursor-pointer'>
//         <span><FaUserAlt/></span>
//         <button className='font-medium'>Login</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex justify-around bg-[#ffffff] h-20  p-1 m-0'>
      {/* first section  */}
      <div className='flex justify-between gap-[9rem]  items-center'>
        <div>
          <h1 className='text-4xl font-bold cursor-pointer'>Tyre<span className='text-red-800'>Plex</span></h1>
        </div>
        <div className='flex ml-5 rounded-[20px] border-gray-500 p-2 h-95 items-center gap-3 bg-[#f1f7ff] md:flex hidden'>
          <BsSearch size={20} />
          <input className='outline-none h-full bg-[#f1f7ff]' type="text" placeholder="Search for products" />
        </div>
        <div className='hidden md:flex'>
          <ul className='font-bold flex gap-4'  >
            <li  className='cursor-pointer no-underline hover:underline hover:decoration-red-400'>Car Tyres</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Bike Tyres</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Tyre Pressure</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Commercial Tyres</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>Accessories</li>
            <li className='cursor-pointer no-underline hover:underline hover:decoration-red-500'>More</li>
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
        <div className='md:hidden z-10 absolute top-20 left-0 w-full bg-white shadow-md'>
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

export default Navbar;