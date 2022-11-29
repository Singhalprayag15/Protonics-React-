import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='pt-5 bg-[#efefef text-center]'>
        <div className='text-center'>
          <a
            href='https://www.instagram.com/portronics.india/'
            target='_blank'
            className=' p-3  border-black border-2 rounded-full inline-block mx-1'
          >
            <BsInstagram className=' text-xl md:text-2xl' />
          </a>
          <a
            href='https://www.facebook.com/Portronics.India/'
            target='_blank'
            className='p-3  border-black border-2 rounded-full inline-block mx-1'
          >
            <FaFacebookF className=' text-xl md:text-2xl' />
          </a>
          <a
            href='https://twitter.com/portronics'
            target='_blank'
            className='p-3  border-black border-2 rounded-full inline-block mx-1'
          >
            <BsTwitter className=' text-xl md:text-2xl' />
          </a>
          <a
            href='https://in.pinterest.com/portronicsindia/'
            target='_blank'
            className='p-3  border-black border-2 rounded-full inline-block mx-1'
          >
            <FaPinterestP className=' text-xl md:text-2xl' />
          </a>
          <a
            href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHhv4LnB2yKqgAAAYI_sXY4JG1633OwSPySAHWkdrWngcYlxTOpAtHy57eJC2g5MXKkh6PrdIzbQY5ZXohB9hwBjLo6a8t52J8vkJtYYrYFT7RUqf_0MsjJdQ--wvtjUW2pfsU=&original_referer=&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fportronics-digital-pvt-ltd'
            target='_blank'
            className='p-3  border-black border-2 rounded-full inline-block mx-1'
          >
            <FaLinkedinIn className=' text-xl md:text-2xl' />
          </a>
          <a
            href='https://www.youtube.com/c/portronicsdigital'
            target='_blank'
            className='p-3  border-black border-2 rounded-full inline-block mx-1'
          >
            <FaYoutube className=' text-xl md:text-2xl' />
          </a>
        </div>
        <ul className='w-3/4 m-auto text-center md:mt-5'>
          <li className=' inline-block mx-2'>
            <a className='text-xs' href='https://www.portronics.com/blogs/post'>
              Blogs
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://portronics.freshdesk.com/support/tickets/new'
            >
              Support
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/privacy-policy'
            >
              Privacy Policy
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/e-waste-management'
            >
              E-Waste Management
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/term-and-conditions'
            >
              Term and Conditions
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/csr-policy'
            >
              CSR Policy
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/warranty-policy'
            >
              {"Warranty, Return & Refund"}
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/about-us'
            >
              About Us
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://www.portronics.com/pages/become-a-partner'
            >
              Become Partner{" "}
            </a>
          </li>
          <li className='inline-block mx-2'>
            <a
              className='text-xs'
              href='https://online.pubhtml5.com/vqxi/xjpr/#p=1'
            >
              Brochure
            </a>
          </li>
        </ul>
        <p className='text-xs text-center mt-7'>© 2022 Portronics </p>
      </div>
    </>
  );
}

export default Footer;
