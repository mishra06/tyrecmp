import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-40 w-full flex flex-col border-2 border-solid border-black-500 bg-[#ffffff]'>
        <div className='flex w-full h-[80%] justify-evenly items-center border-b border-gray-200 border-solid' >
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-4xl font-bold cursor-pointer'>Tyre<span className='text-red-800'>Plex</span></h1>
                </div>
                <div className='flex gap-3'>
                    <span ><ImFacebook2 /></span>
                    <span><FaLinkedin /></span>
                </div>
            </div>
            <div className='text-left'>
                <p>Who we are</p>
                <p>Are You A Tyre Dealer</p>
            </div>
            <div className='text-left'>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
            </div>
            <div className='text-left'>
                <p>Contact Us</p>
                <p>Career</p>
                <p>Shipping & Return Policy</p>
            </div>
        </div>
        <div>
            <div>
                <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer
