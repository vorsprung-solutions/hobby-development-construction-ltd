import React, { useEffect, useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGooglePlus } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import ActiveLink from '../../../utils/ActiveLink';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Navbar1 = () => {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      };
    
      const [isOpen, setIsOpen] = useState(false);
      const closeDropdown = () => {
        setIsOpen(false);
      };
    
      const styleObject = {
        button: {
          background: '#2A9D8F',
        },
        pColor: {
          background: '#EAF5F4',
        },
        primary: {
          color: '#2A9D8F',
        },
      };
    
    //   const [isVisible, setIsVisible] = useState(true);
    
    //   const handleScroll = () => {
    //     const scrollPosition = window.scrollY;
    //     setIsVisible(scrollPosition < 50); // Adjust the scroll position threshold as needed
    //   };
    
    //   useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);


    return (
        <div className=''>
            <nav className={`px-8 lg:px-40 py-3 flex justify-between bg-blue-800 text-white fixed top-0 w-full`}>
                <div className='flex flex-col lg:flex-row gap-2 lg:gap-10'>
                <a href="" className='flex gap-4 items-center'><BsFillTelephoneFill /> +88096-23-23-44-33</a>
                <a href="" className='flex gap-4 items-center'><MdEmail /> info@shdclhousing.com</a>
                </div>
                <div className='flex gap-5'>
                    <a href="" className='hidden lg:block'>Rajuk Registration No : RAJUK/DC/REDMR 000195</a>
                    <div className='flex gap-3'>
                        <GrFacebookOption />
                        <AiOutlineTwitter />
                        <FaLinkedinIn />
                        <AiOutlineGooglePlus />
                        <TfiYoutube />
                    </div>
                </div>
            </nav>

            {/* responsive-mobile */}
            
        </div>
    );
};

export default Navbar1;