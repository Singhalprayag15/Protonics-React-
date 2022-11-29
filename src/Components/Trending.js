import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import red from "../Images/red_cr.png";
import blue from "../Images/blue_cr.png";
import black from "../Images/black_cr.png";
import TrendingArr from "./Trending_Arr";

function Trending() {
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='text-center bg-[#efefef] pt-20'>
        <h1 className='text-[2rem] font-semibold mb-6'>Trending Products</h1>
        <div
          data-aos='fade-up'
          className='mx-10 grid grid-cols-1 bg-[#efefef] md:grid-cols-4 '
        >
          {TrendingArr.map((elm) => {
            return (
              <div className=' relative mt-4 md:mx-3' key={elm.id}>
                <img
                  src={elm.img}
                  alt={elm.img}
                  className=' rounded-xl h-[85%] w-[100vw]'
                />
                <p className=' absolute top-0 right-[-5%] bg-[#aeaeae] text-white text-xs py-1 px-2 font-mono md:right-0'>
                  {elm.save}
                </p>
                <div className='my-2'>
                  <p className='md:text-lg'>{elm.name}</p>
                  <p className='text-xs my-1 md:hidden'>
                    <span className='mx-2 line-through'>{elm.removePrice}</span>
                    {elm.price}
                  </p>
                  <p className='text-xs my-1 hidden md:block'>
                    <span className='text-2xl font-medium'>{elm.price}</span>
                    <span className='mx-2 line-through'>{elm.removePrice}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='text-center py-5 m-auto md:mt-20'>
          <div className='grid grid-cols-3 w-[5rem] m-auto'>
            <img className='rounded-full h-[1rem]' src={black} alt={black} />
            <img className='rounded-full h-[1rem]' src={blue} alt={blue} />
            <img className='rounded-full h-[1rem]' src={red} alt={red} />
          </div>
          <button
            className='my-5 bg-black text-white py-2 px-8 rounded-3xl'
            type='button'
          >
            view all
          </button>
        </div>
      </div>
    </>
  );
}

export default Trending;
