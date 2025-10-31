import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillSendCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-sm font-light text-white">
      <footer className="flex flex-col lg:flex-row justify-between py-5 bg-blue-900 text-neutral-content gap-10 px-8 lg:px-52">
        <nav className="w-full lg:w-1/3">
          <div className="w-1/4">
            <img
              className=""
              src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
              alt=""
            />
          </div>
          <p>
            To Satisfy The Residential Need Of The Huge Number Of Population,
            Dhaka City Is Expanding Both Vertically And Horizontally.
          </p>
        </nav>
        <nav className="w-full mx-auto lg:w-1/3 flex flex-col items-center">
          <header className="text-xl text-blue-400 mb-2 ">Quick Links</header>
          <div className="grid grid-cols-3 lg:grid-cols-2 ">
            <Link className="lg:mx-5" to="/">
              Home
            </Link>
            <Link className="lg:mx-5" to="/about">
              About Us
            </Link>
            <Link className="lg:mx-5" to="projects/construction">
              Construction{" "}
            </Link>
            <Link className="lg:mx-5" to="projects/interior">
              Interior Projects
            </Link>
            <Link className="lg:mx-5" to="/careers">
              Careers
            </Link>
            <Link className="lg:mx-5" to="/gallery">
              Gallery
            </Link>
            <Link className="lg:mx-5" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="lg:mx-5" to="/terms-conditions">
              Terms & Conditions
            </Link>
          </div>
        </nav>

        <nav className="w-full lg:w-1/3">
          <header className="text-xl text-blue-400 mb-2">Contacts</header>
          <Link className="link link-hover flex gap-2 items-center">
            <AiFillClockCircle /> Sat - Thu 9:00 a.m. - 6:00 p.m. Friday Closed
          </Link>
          <Link className="link link-hover flex gap-2 items-center">
            <MdLocationOn />
            House No:4,Road No:3/A,Sector 15, Block E,Uttara,Dhaka 1230
          </Link>
          <Link className="link link-hover flex gap-2 items-center">
            <FaPhone /> +8809614500673
          </Link>
        </nav>
      </footer>
      <footer className="flex flex-col lg:flex-row  px-8 lg:px-52 py-3 bg-blue-800 text-neutral-content justify-between">
        <aside className="items-center grid-flow-col">
          <p>
            Copyright © 2023 - All right reserved{" "}
            <span className="text-blue-400 ml-4 text-lg">SHDCL Housing</span>
          </p>
        </aside>
        <nav>
          <p className="flex items-center gap-4">
            Developed By
            <span className="text-blue-400 text-lg">Premium Sheba</span>
            <img
              className="w-10 rounded-full"
              src="https://i.ibb.co/sm5MVww/Whats-App-Image-2023-10-14-at-11-48-40-PM.jpg"
              alt=""
            />
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
