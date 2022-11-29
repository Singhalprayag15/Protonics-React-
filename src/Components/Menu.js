import React, { useEffect } from "react";
import MenuArr from "./MenuArr";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        data-aos='fade-up'
        className='pt-8 px-3 grid grid-cols-1 justify-between bg-[#efefef] md:grid-cols-3 md:px-16'
      >
        {MenuArr.map((elm) => {
          return (
            <div key={elm.idx} className=' mx-2'>
              <img className='mt-8' src={elm.img} alt={elm.img} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
