import React from 'react';

const Brand = () => {
  return (
    <div className='mx-auto max-w-5xl px-4 md:px-8 lg:px-0'>
      <h1 className='text-yellow-500 font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>
        I've <span className='text-blue-900'>1253+</span> Global Clients & lots of Projects
      </h1>
      <div className='flex flex-col md:flex-row items-center'>
        <img src="/brand.png" alt="" className='w-full md:w-auto mb-4 md:mb-0 md:mr-4' />
        <img src="/brand3.png" alt="" className='w-full md:w-auto' />
      </div>
    </div>
  );
};

export default Brand;
