import React from 'react';
import { BookText, Star, BookOpen } from 'lucide-react';

function PreviousBook() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookText className="w-5 h-5 text-[#A64833]" />
                <span className="text-neutral-400">Previous Book</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Disruption: Emerging Technologies and the Future of Work</h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Disruption: Emerging Technologies and the Future of Work Disruption explores the impact of emerging technologies in career paths, including technologies such as 3D printing, alternative energies, autonomous vehicles, artificial intelligence, biotech, Internet of Things, nanotechnology, space exploration, super materials, robotics, and virtual reality.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Written without technical jargon, Disruption guides the reader through a fascinating journey of the new world around the corner.
              </p>
              <div className="flex items-center gap-4 text-neutral-400">
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A64833] text-[#A64833]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#42403f] text-[#A64833]" />
                </div>
                <span>Best technology trends books of all time winner</span>
              </div>
              
            </div>
            <div>
              <div className="w-52  bg-neutral-800 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://m.media-amazon.com/images/I/61YAgB3yNmL._SL1360_.jpg"
                  alt="Previous Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <a className="flex items-center justify-center gap-3 mt-2" target="_blank" rel="noreferrer">
                <BookOpen className="w-6 h-6 text-[#A64833]" />
                <span className="text-[#A64833] font-bold">Buy Now</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviousBook;