import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

const Herosection = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const slides = [
        "https://cdn.tyreplex.net/themes/moonlight/images/hm-banner-new.png?tr=q-50",
        "https://cdn.tyreplex.net/themes/moonlight/images/hm-banner-new.png?tr=q-50",
        "https://cdn.tyreplex.net/themes/moonlight/images/hm-banner-new.png?tr=q-50",
        "https://cdn.tyreplex.net/themes/moonlight/images/hm-banner-new.png?tr=q-50",
        "https://cdn.tyreplex.net/themes/moonlight/images/hm-banner-new.png?tr=q-50"
    ];

    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className='overflow-hidden relative w-95'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                ))}
                
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                    {/* For the video indicator, you can add another indicator if needed */}
                    <div className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr === slides.length ? "p-0.5" : "bg-opacity-50"}`} />
                </div>
            </div>
        </div>
    );
};

export default Herosection;