import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import Logo from "../Images/Logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(true);
  const sideNav = () => {
    setNav(!nav);
  };

  const [stickyNav, setstickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setstickyNav(true);
      } else {
        setstickyNav(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`bg-black text-white lg:pb-4 navBar   ${
          stickyNav && "ourDynamicClass"
        } `}
      >
        <div className='text-center uppercase letter_spacing text-xs py-2'>
          <p className='lg:mb-1'>Free Shipping | COD Available</p>
        </div>
        <hr className='hidden lg:block' />
        <div className='grid grid-cols-3  justify-evenly px-2 py-3 md:hidden'>
          {/* <HiOutlineMenuAlt1
            className='text-3xl m-auto sm:m-0'
            onClick={sideNav}
          /> */}
          {nav ? (
            <HiOutlineMenuAlt1
              className='text-3xl m-auto sm:m-0 md:hidden'
              onClick={sideNav}
            />
          ) : (
            <HiOutlineX
              className='text-3xl m-auto sm:m-0 md:hidden'
              onClick={sideNav}
            />
          )}
          {/* <HiOutlineX className='text-3xl m-auto sm:m-0' /> */}
          <img src={Logo} alt={Logo} className='h-[2rem] m-auto' />
          <div className='grid grid-cols-2 justify-evenly m-auto'>
            <GoSearch className='text-xl mt-1' />
            <HiOutlineShoppingBag className='text-2xl mx-1' />
          </div>
        </div>

        {nav ? (
          ""
        ) : (
          <div className='bg-black text-white w-[90vw] h-[30rem] overflow-scroll fixed bottom-[5.1rem] left-[1.5rem] z-10 rounded-3xl phn_nav md:hidden'>
            <ul className='m-auto text-center'>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Home
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Shop
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  New Arrivals
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Corporate Gifting
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Warranty Registration
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Support
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Login
                </a>
              </li>
              <li className='my-5'>
                <a href='' className='mx-3 text-2xl font-bold'>
                  Search
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className='hidden grid-cols-3 justify-evenly grid3 py-3 md:grid'>
          <img
            src={Logo}
            alt={Logo}
            className='h-[2rem] m-auto lg:h-[2.5rem]'
          />
          <div className='m-auto'>
            <a href='' className='mx-3 text-lg'>
              Shop
            </a>
            <a href='' className='mx-3 text-lg'>
              New Arrivals
            </a>
            <a href='' className='mx-3 text-lg'>
              Corporate Gifting
            </a>
            <a href='' className='mx-3 text-lg'>
              Warranty Registration
            </a>
            <a href='' className='mx-3 text-lg'>
              Support
            </a>
          </div>
          <div className='grid grid-cols-3 justify-evenly m-auto'>
            <GoSearch className='text-xl mt-1 lg:mx-2 lg:text-2xl' />
            <BsPerson className='text-2xl lg:mx-2 lg:text-3xl' />
            <HiOutlineShoppingBag className='text-2xl mx-1 lg:mx-2 lg:text-3xl' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
