import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoMail } from "react-icons/go";

function JoinClub() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className=' bg-black text-white py-5 px-2 md:py-7 md:pb-10'>
        <div data-aos='fade-up'>
          <h1 className='text-center text-[20.196px] my-4'>Join The Club</h1>
          <p className=' w-6/12 tracking-wider m-auto text-xs text-center'>
            Subscribe today to hear about our newest offers, new products,
            collaborations, everything Portronics - Directly to your inbox.
          </p>

          <div className='mt-5 text-center lg:mt-8'>
            <input
              className='bg-black text-white outline-none border-b-2 border-white w-4/5 md:w-[25rem] pb-2'
              type='email'
              placeholder='Enter your email'
            ></input>
            <span className=' inline-block ml-[-2rem] mb-[-0.5rem] text-3xl'>
              <GoMail />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinClub;
