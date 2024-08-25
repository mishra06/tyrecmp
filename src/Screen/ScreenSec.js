import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PopularTyre from '../components/popularTyre/PopularTyre'
import PopularVehicles from '../components/Popular_Vehicles/PopularVehicles'
import TyrePressure from '../components/Tyre Pressure/TyrePressure'
import TyreDealer from '../components/TyreDealer/TyreDealer'

const ScreenSec = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center '>
      <div className='w-full'>
        <Navbar/>
      </div>
      <div className='w-10/12 flex flex-col gap-4 mb-4'>
        <PopularTyre/>
        <PopularVehicles/>
        <TyrePressure/>
        <TyreDealer/>
      </div>
    </div>
  )
}

export default ScreenSec
