import React from 'react';
import { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

function Hero() {
  const [amazonLink, setAmazonLink] = useState('https://www.amazon.com/Humanlike-Transformation-Victor-del-Rosal/dp/B0D9JCJVQ8/')

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => { 
        const infoData = data
        if (infoData.country_code && infoData.country_code == 'MX') {
          setAmazonLink('https://www.amazon.com.mx/Humanlike-Transformation-Victor-del-Rosal/dp/B0D9JCJVQ8/')
        } else if(infoData.country_code && infoData.country_code == 'UK') {
          setAmazonLink('https://www.amazon.co.uk/Humanlike-Transformation-Victor-del-Rosal/dp/B0D9JCJVQ8/')
        }
      })
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#A64833] opacity-10 mix-blend-multiply"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-1 tracking-tight">
            HUMAN<span className="text-[#A64833]">LIKE</span>
          </h1>
          <p className="text-3xl text-neutral-200 mb-2">The AI Transformation</p>
          <p className="mb-8 font-bold">By Victor del Rosal</p>
          <a className="flex items-center justify-center gap-3" href={amazonLink} target="_blank" rel="noreferrer">
            <BookOpen className="w-6 h-6 text-[#A64833]" />
            <span className="text-[#A64833] font-bold">Buy Now</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-neutral-950 to-transparent"></div>
    </div>
  );
}

export default Hero;