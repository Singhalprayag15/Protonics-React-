import "./App.css";
import React, { useState } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import JoinClub from "./Components/JoinClub";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Trending from "./Components/Trending";
import whatsapp from "./Images/whatsapp-icon.svg";
import top from "./Images/backtotop_small.png";
import { Link } from "react-scroll";
import { IoIosClose } from "react-icons/io";

function App() {
  const [whatsappBox, setWhatsappBox] = useState(true);

  const whatsappBtn = () => {
    setWhatsappBox(!whatsappBox);
  };

  return (
    <div className=' relative'>
      <section id='top'>
        <Navbar />
      </section>

      <Slider />
      <Menu />
      <Trending />
      <Contact />
      <JoinClub />
      <Footer />
      {whatsappBox ? (
        <div className=' fixed bottom-9 md:bottom-4 right-5 z-10'>
          <img
            src={whatsapp}
            alt={whatsapp}
            className='whatsapp_bg  p-[10px] h-[60px] w-[60px]'
            onClick={whatsappBtn}
          />
          <Link to='top' smooth={true} duration={2000}>
            <img
              src={top}
              alt={top}
              className='h-[1.2rem] mx-auto mt-5 hidden md:block'
            />
          </Link>
        </div>
      ) : (
        <>
          <div className='bg-white text-center pt-5 pb-3 px-4 w-64 rounded-t-3xl fixed bottom-[7rem] right-14 z-10'>
            <h1 className='font-bold text-xl my-2'>Hi There,</h1>
            <p className='mt-4 mb-10'>
              Welcome to the official website of India's most loved brand for
              Portable Gadgets!
              <span className='block'> How can we help you?</span>
            </p>
            <button className='btn rounded-3xl justify-center px-8 py-1'>
              <a
                href={
                  "https://api.whatsapp.com/send?phone=919555245245&text=Hello%20Team%2C%20I%20have%20some%20queries%2C%20need%20your%20help!"
                }
                target='_blank'
              >
                <img
                  src={whatsapp}
                  alt={whatsapp}
                  className=' text-[15px] h-[30px] w-[30px] inline-block mr-2'
                />
                <p className=' inline-block font-bold ml-2'>START CHAT</p>
              </a>
            </button>
          </div>
          <IoIosClose
            className='whatsapp_bg p-[5px] h-[45px] w-[45px] font-bold fixed bottom-9 md:bottom-14 right-5 z-10'
            onClick={whatsappBtn}
          />
        </>
      )}
    </div>
  );
}

export default App;
