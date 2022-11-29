import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='mt-16 py-20 text-center bg-[#efefef] md:mt-0 md:pt-0 pb-15'>
        <h1
          className='text-3xl font-bold my-16 md:mt-0 md:text-4xl'
          data-aos='fade-up'
        >
          Contact US
        </h1>
        <div className='grid grid-cols-1 justify-evenly md:grid-cols-2'>
          <div className=''>
            <p className='font-bold my-5'>For Complaints</p>
            <p className='text-xs mb-2 font-semibold'>
              E-mail:{" "}
              <a
                href='mailto:help@portronics.com'
                className='pb-1 border-b-2 border-black'
              >
                help@portronics.com
              </a>
            </p>
            <p className='text-xs mb-2 font-semibold'>
              Phone:{" "}
              <a
                href='https://www.portronics.com/'
                className='pb-1 border-b-2 border-black'
              >
                (+91)9555-245-245
              </a>
            </p>
            <p className='text-xs mb-2 font-semibold'>
              Need Help:{" "}
              <a
                href='https://portronics.freshdesk.com/support/tickets/new'
                className='pb-1 border-b-2 border-black'
              >
                Click here
              </a>
            </p>
          </div>
          <div className='mt-20 md:mt-0'>
            <p className='font-bold my-5'>FOR BUSINESS QUERIES</p>
            <a
              href='https://www.portronics.com/pages/corporate-branding'
              className='pb-1 border-b-2 border-black text-sm font-normal'
            >
              sales@portronics.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
