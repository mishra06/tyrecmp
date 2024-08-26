import React from 'react'

const TyreCare = () => {

    const Tyrecares =[
        {
            id:'1',
            name: 'Tata Tiago And Tigor gets Tyre Mobility Kit And TPMS',
            date:'May 13, 2021',
            img: 'https://cdn.tyreplex.net/news/wp-content/uploads/2021/05/Tata-Tyre-Mobility-Kit-2021.jpg?tr=w-278,q-70',
        },
        {
            id:'2',
            name: 'Mercedes-AMG s New SUV Gets Yokohama ADVAN Sport V107',
            date:'Apr 07, 2021',
            img: 'https://cdn.tyreplex.net/news/wp-content/uploads/2021/04/Mercedes-ADVAN-sport-V107.jpeg?tr=w-278,q-70',
        },
        {
            id:'3',
            name: 'Get To Know The Nissan X-Trail 2004-09 Tyres Better',
            date:'Feb 22, 2021',
            img: 'https://cdn.tyreplex.net/news/wp-content/uploads/2021/02/Nissan-X-Trail-2004-09.jpg?tr=w-278,q-70',
        },
        {
            id:'4',
            name: 'Read This Before Buying Tyres For Your Tata Sumo Grande',
            date:'Feb 16, 2021',
            img: 'https://cdn.tyreplex.net/news/wp-content/uploads/2021/02/Tata-Sumo-Grande.jpg?tr=w-278,q-70',
        },
        {
            id:'5',
            name: 'Have Doubts About Different Maruti Suzuki Versa Tyres?',
            date: 'Feb 15, 2021',
            img: 'https://cdn.tyreplex.net/news/wp-content/uploads/2021/02/Maruti-Suzuki-Versa-Tyres-.jpg?tr=w-278,q-70',
        },
        {
            id:'6',
            name: 'Thinking Of Buying Tyres For Your Renault Lodgy? Read This',
            date:'Feb 11, 2021',
            img: 'https://cdn.tyreplex.net/news/wp-content/uploads/2021/02/Renault-Lodgy-tyres.jpg?tr=w-278,q-70',
        },

    ]
  return (
    <div className=' flex flex-col gap-1 min-h-[18.5rem] w-full border-2 border-solid border-black-500 bg-[#ffffff]'>
      <div className='flex justify-start items-center p-2 border-2 border-solid border-red-500'>
        <p className='text-xl font-medium'>Tyre Care</p>
      </div>
      <div className='card-container w-full max-h-64'>
        <div className='categorycontainer flex overflow-x-scroll w-full whitespace-nowrap mt-2'>
            {
                Tyrecares.map((items,id)=>{
                    return(
                        <div key={id} className='card inline-block min-w-[280px] min-h-[170px] border border-gray-300 rounded-lg p-1 m-2 flex flex-col text-left justify-center items-center'>
                            <img src={items.img} alt={items.name} className='h-32 w-56 mb-2' />
                            <h2 className=' whitespace-normal text-sm  w-95'>{items.name}</h2>
                            <h2 className='text-gray-500 '>{items.date}</h2>
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default TyreCare
