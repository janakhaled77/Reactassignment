import React from 'react';
import logo from './assets/avataaars.svg';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-teal'>
      <div className='text-center p-6'>
        <img src={logo} alt="entry page" className='w-64 mx-auto' />
        <h2 className='text-white font-bold text-4xl p-4'>START FRAMEWORK</h2>

        <div className="flex items-center justify-center mt-2">
          <div className="h-1 bg-white w-20"></div>
          <span className="mx-2 text-white">★</span>
          <div className="h-1 bg-white w-20"></div>
        </div>

        <p className='text-white mt-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
