'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    image: 'https://www.image2url.com/r2/default/images/1780921199864-c6ec52a9-c419-4136-a32b-0c9117d74076.jpg',
  },
  {
    image: 'https://www.image2url.com/r2/default/images/1780921236137-7e6da3df-fda8-4433-a9bb-7896a83a3919.jpg',
  },
  {
    image: 'https://www.image2url.com/r2/default/images/1780921275423-5f7f72b4-83bb-47da-83a8-500cf64de6eb.jpg',
  },
  {
    image: 'https://www.image2url.com/r2/default/images/1780921301434-799d0f75-0e7e-41c8-8f44-d5712fb5d9c5.jpg',
  },
  {
    image: 'https://www.image2url.com/r2/default/images/1780921325840-97a90524-7c0a-49ac-a487-5c7305b3b1c6.jpg',
  },
  {
    image: 'https://www.image2url.com/r2/default/images/1780921348551-aad17b10-11c3-40d6-a613-dc2c5778f880.jpg',
  },
  {
    image: 'https://www.image2url.com/r2/default/images/1780921375026-4511318d-dfcb-4a21-834a-993585f6d595.jpg',
  },
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? services.length - 1 : current - 1);
  const next = () => setCurrent(current === services.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={services[current].image}
              alt="Service gallery"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
            aria-label="Previous service"
          >
            <ChevronLeft size={24} className="text-slate-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
            aria-label="Next service"
          >
            <ChevronRight size={24} className="text-slate-700" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? 'bg-blue-600 w-6' : 'bg-slate-300 dark:bg-slate-600'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}