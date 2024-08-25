import React from 'react'
import JK from "../../assets/JK-Tyre-logo-PNG-Transparent.png"
import CEAT from "../../assets/ceat-logo.png"

const PopularTyre = () => {

    const tyrs = [
        {
            name: 'JK Tyres',
            img : JK
        },
        {
            name: 'CEAT',
            img : CEAT
        },
        {
            name: 'CEAT',
            img : CEAT
        },
        {
            name: 'CEAT',
            img : CEAT
        },
        {
            name: 'CEAT',
            img : CEAT
        },
        {
            name: 'CEAT',
            img : CEAT
        },
       
    ]

  return (
    <div className='h-64 w-full border-2 border-solid border-black-500 '>
      <div className='flex justify-start items-center'>
        <p className='font-medium px-2 py-2'>Popular Tyre Brands</p>
      </div>
      <div className='categorycontainer flex justify-center w-95 flex-row gap-4 overflow-x-scroll border-red-600 mt-3' >
        {
            tyrs.map((t, i) => (
              <div key={i} className=' w-40 flex flex-col items-center justify-around h-26 border-2 border-solid border-black-500'>
                <img className=' px-2 py-2 h-12 ' src={t.img} alt={t.name} />
                <div className='h-12 text-gray-500'>{t.name}</div>
              </div>
            ))
        }
      </div>
      <div className='flex justify-center items-center mt-8 mb-2'>
        <p className='text-blue-800 font-medium'>Car Tyres ||  Bike Tyres ||  Scooter Tyres || Commercial Tyres</p>
      </div>
    </div>
  )
}

export default PopularTyre
