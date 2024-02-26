import React from 'react';

const Analysis = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-16 xl:mx-24 flex flex-col md:flex-row items-center justify-between'>
      <div className="md:w-1/2">
        <h1 className='text-stone-400 font-serif font-bold text-3xl'>
          Best Real-time Insights For <br /> Grow your Lead Capture
        </h1>
        <p className='mt-4 md:mt-6 lg:mt-8 text-bold text-slate-600 text-opacity-20'>
          Sed ut perspiciatis unde omnis iste natus voluptatem <br /> doloremque laudantium totames aperiam eaque <br /> quaesy inventore architecto beatae vitae dicta
        </p>
        <h1 className='text-bold text-xl mt-4 md:mt-6 lg:mt-8'>👉 Real-time insights for generate</h1>
        <h1 className='text-bold text-xl mt-2 mb-4 md:mt-4 lg:mt-6'>👉 Take quick payments direct from meetings</h1>
        <a href="#_" className="mb-3 mt-3 relative inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Click Me !</span>
        </a>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="https://webtendtheme.net/html/2024/akpager/assets/images/tabs/tab-three.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Analysis;
