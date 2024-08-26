import React, { useState, useEffect } from 'react';
import data from './data.json';

function PopularVehicles() {

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
    <div className="app flex flex-col gap-4 border-2 border-solid border-black-500 h-80 p-2 w-full bg-[#ffffff]">
        <div className='flex justify-start items-center'>
            <p className='font-semibold text-base'>Tyres for Popular Vehicles</p>
        </div>
      <div className="button-container flex justify-start items-center mb-1 gap-6">
        <button style={{color:buttons==='button1'?'red':'black'}} onClick={() => handleButtonClick('button1')} className="btn">Car Tyres</button>
        <button style={{color:buttons==='button2'?'red':'black'}} onClick={() => handleButtonClick('button2')} className="btn">Bike Tyres</button>
        <button style={{color:buttons==='button3'?'red':'black'}} onClick={() => handleButtonClick('button3')} className="btn">Scooter Tyres</button>
      </div>
      <div className="card-container w-full max-h-40">
        <div className="categorycontainer flex overflow-x-scroll w-full whitespace-nowrap">
          {cardData.map((card) => (
            <div key={card.id} className="card inline-block min-w-[200px] h-40 border border-gray-300 rounded-lg p-4 m-2 flex flex-col text-center justify-center items-center">
              <img src={card.img} alt={card.title} className="h-24 w-32 mb-2" />
              <h2 className="text-sm">{card.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularVehicles
