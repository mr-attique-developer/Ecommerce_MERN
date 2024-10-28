import React from 'react';
import heroCoverImage from "../../assets/header.png";

const Hero = () => {
  return (
    <>
      <div className='max-w-4xl min-h-96 mt-4 rounded-lg mx-auto bg-red-200 dark:bg-gray-600 flex flex-col sm:flex-row justify-around items-center p-4 sm:p-8'>
        <div className='p-4 sm:w-1/2'>
          <h3 className='text-lg font-extrabold md:text-3xl'>Girls Fashion</h3>
          <p className='text-sm md:text-md mt-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum ad, dolorum quidem sed modi, omnis quasi fugit earum placeat pariatur repellat dolores perferendis corporis facere illo adipisci molestiae cupiditate nihil cum vero amet.
          </p>
          <button className='mt-5 bg-red-600 p-4 rounded-md text-white'>Explore Now</button>
        </div>
        <div className='w-full sm:w-1/2 mt-4 sm:mt-0'>
          <img src={heroCoverImage} alt="heroCoverImage" className='w-full rounded-lg' />
        </div>
      </div>
    </>
  );
}

export default Hero;