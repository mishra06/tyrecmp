import React from "react";
import JK from "../../assets/JK.png";
import CEAT from "../../assets/ceat-logo.png";
import Apollo from "../../assets/apollo-logo.png"
import Bridg from "../../assets/bridgestone.png";
import LAufenn from "../../assets/laufenn-logo.png";
import Mrf from "../../assets/mrf.png";
import Pire from "../../assets/Pirelli-logo.png";
import Mich from "../../assets/michelin.png"
import Yoko from "../../assets/yokohma.png"

const PopularTyre = () => {
  const tyrs = [
    {
      name: "JK Tyres",
      img: JK,
    },
    {
      name: "CEAT",
      img: CEAT,
    },
    {
      name: "APOLLO",
      img: Apollo,
    },
    {
      name: "Goodyear",
      img: "https://www.carlogos.org/tire-logos/goodyear-logo-3000x900-show.png",
    },
    {
      name: "LAUFENN",
      img: LAufenn,
    },
    {
      name: "MRF",
      img: Mrf,
    },
    {
      name: "MICHELIN",
      img: "https://michelinmedia.com/site/user/images/Michelin_Corporate_Logo___color.jpg",
    },
    {
      name: "YOKOHMA",
      img: Yoko,
    },
    {
      name: "PIRELLI",
      img: Pire,
    },
    {
      name: "BRIDGESTON",
      img: "https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-mark-logos/album-cover.png",
    },
  ];

  return (
    <div className="h-64 w-full border-2 border-solid border-black-500 bg-[#ffffff]">
      <div className="flex justify-start items-center">
        <p className="font-medium px-2 py-2">Popular Tyre Brands</p>
      </div>
      <div className="card-container w-full max-h-64">
        <div className="categorycontainer flex overflow-x-scroll w-full whitespace-nowrap mt-3">
          {tyrs.map((t, i) => (
            <div
              key={i}
              className="cursor-pointer card inline-block min-w-[150px] h-24 border border-gray-300 rounded-lg p-4 m-2 flex flex-col text-center justify-center items-center border-2 border-solid border-black-500"
            >
              <img className=" h-20 w-20 " src={t.img} alt={t.name} />
              <div className="h-10 text-gray-500">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 mb-2">
        <p className="text-blue-800 font-medium">
          Car Tyres || Bike Tyres || Scooter Tyres || Commercial Tyres
        </p>
      </div>
    </div>
  );
};

export default PopularTyre;
