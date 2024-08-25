import React, { useEffect, useState } from 'react'
import data from './data.json';

const TyrePressure = () => {
    const [selectedButton, setSelectedButton] = useState('button1'); // Default to button1
    const [buttons, setButtons] = useState('button1')
  
    // State to store the fetched card data
    const [cardData, setCardData] = useState([]);
  
    // Function to handle button clicks
    const handleButtonClick = (button) => {
      setSelectedButton(button);
      setButtons(button);
    };
  
    // Fetch data from the JSON file
    useEffect(() => {
      setCardData(data[selectedButton]);
    }, [selectedButton,buttons]);
  
    return (
      <div className="app flex flex-col gap-4 border-2 border-solid border-black-500 h-80 p-2 w-full">
          <div className='flex justify-start items-center'>
              <p className='font-semibold text-base'>Tyre Pressure for Your Vehicle</p>
          </div>
        <div className="button-container flex justify-start items-center mb-1 gap-6">
          <button style={{color:buttons==='button1'?'red':'black'}} onClick={() => handleButtonClick('button1')} className="btn">Car Tyre Pressure</button>
          <button style={{color:buttons==='button2'?'red':'black'}} onClick={() => handleButtonClick('button2')} className="btn">Bike Tyre Pressure</button>
        </div>
        <div className="card-container w-full max-h-40">
          <div className="categorycontainer flex overflow-x-scroll w-full whitespace-nowrap">
            {cardData.map((card) => (
              <div key={card.id} className="card inline-block min-w-[200px] h-40 border border-gray-300 rounded-lg p-4 m-2 flex flex-col text-center justify-center items-center">
                <img src={card.img} alt={card.title} className="h-24 w-32 mb-2" />
                <h2 className="text-sm">{card.title}</h2>
                <p className='font-medium text-gray-400'>{card.prs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default TyrePressure
