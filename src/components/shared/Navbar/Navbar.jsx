import { useContext, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";

import { Link } from "react-router-dom";
import ActiveLink from "../../../utils/ActiveLink";
import { useAuth } from "../../../hooks/Auth/useAuth";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Navbar = () => {
  const { token } = useAuth();
  const controls = useAnimation();
  const handleLogOut = () => {};
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const styleObject = {
    button: {
      background: "#2A9D8F",
    },
    pColor: {
      background: "#EAF5F4",
    },
    primary: {
      color: "#2A9D8F",
    },
  };

  const animationControls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const popInVariantsLeft = {
    hidden: { x: "-100%" },
    visible: { x: "0", transition: { duration: 2 } },
  };

  const popInVariantsRight = {
    hidden: { x: "100%" },
    visible: { x: "0", transition: { duration: 2 } },
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      style={{ zIndex: "999" }}
      className=" bg-opacity-50 backdrop-filter sticky top-0 backdrop-blur-xl "
    >
      <nav
        className={`md:block   z-50  shadow-sm w-full transition transform duration-500  ease-in-out `}
      >
        {/* ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } */}
        <div className="w-full bg-[#0055A2] p-1 lg:pb-2 font-light  lg:px-48 text-sm px-5 lg:p-0.5">
          <div className="flex items-center  lg:h-10 w-full text-white ">
            <div className="flex items-center    justify-between w-full">
              <div className="flex flex-col  lg:flex-row  lg:gap-5">
                <span className="flex gap-1 items-center">
                  <BsFillTelephoneFill /> +8809614500673
                </span>
                <span className="flex gap-1  items-center">
                  <MdEmail /> info@shdclgroup.com
                </span>
              </div>
              <div className="flex items-center lg:gap-5">
                <span className="hidden lg:block">
                  Rajuk Registration No : RAJUK/DC/REDMR 000195
                </span>
                <div className="flex items-center lg:gap-3">
                  <Link
                    className="curser-pointer"
                    to="https://youtu.be/KsyFcH61d4Y?si=L5V5aZ8NTSzcOgOb"
                  >
                    <TfiYoutube />
                  </Link>
                  <Link
                    className="curser-pointer"
                    to="https://www.facebook.com/shantohobby"
                  >
                    <GrFacebookOption />
                  </Link>
                  <Link
                    className="curser-pointer"
                    to="https://www.linkedin.com/groups/12893596/"
                  >
                    <FaLinkedinIn />
                  </Link>

                  <Link
                    to="/login"
                    className="hidden lg:block text-sm font-light underline mt-0.5"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* responsive-mobile */}
      <nav className="md:hidden bg-white shadow-sm w-full z-10">
        <div className="w-full">
          <div className="flex items-center lg:h-20 h-16 w-full">
            <div className="flex  px-5 py-2 bg-opacity-60 z-20 top-12 backdrop-filter backdrop-blur-lg shadow-sm w-full fixed items-center   justify-between">
              <div className="flex justify-center mx-5 items-center flex-shrink-0">
                <div>
                  <Link to="/" className="cursor-pointer flex items-center ">
                    <img
                      className="md:w-12 w-14"
                      src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
                      alt="project-logo"
                      border="0"
                    />
                  </Link>
                </div>
                <Link to="/">
                  <h1 className="flex items-center button font-medium  pl-3 text-[#0055A2] text-sm cursor-pointer">
                    <p className="">
                      Shanto Hobby Development & <br /> Construction LTD.{" "}
                    </p>
                  </h1>
                </Link>
              </div>
              <div className=" flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none  "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="shadow-sm w-full  bg-white">
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden flex justify-center items-center  "
              id="mobile-menu"
            >
              <div
                ref={ref}
                className="flex flex-col justify-center items-center px-2  pb-3 space-y-1 sm:"
              >
                <Link
                  exact
                  to="/"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer   block  py-2 rounded-md text-base "
                  onClick={closeDropdown}
                >
                  Home
                </Link>

                <Link
                  onClick={closeDropdown}
                  smooth
                  to="/about"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer "
                >
                  About Us
                </Link>
                <Link
                  onClick={closeDropdown}
                  smooth
                  to="/projects/construction"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer "
                >
                  Construction Projects
                </Link>
                <Link
                  onClick={closeDropdown}
                  smooth
                  to="/projects/interior"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer "
                >
                  Interior Projects
                </Link>
                <Link
                  onClick={closeDropdown}
                  smooth
                  to="/careers"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer "
                >
                  Careers
                </Link>
                <Link
                  onClick={closeDropdown}
                  smooth
                  to="/our-team"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer "
                >
                  Our Team
                </Link>
                <Link
                  onClick={closeDropdown}
                  smooth
                  to="/contact-us"
                  // scroll={(el) => scrollWithOffset(el)}
                  className="cursor-pointer "
                >
                  Contact Us
                </Link>

                {/* {token ? (
                  <ActiveLink
                    onClick={closeDropdown}
                    to="/dashboard"
                    // scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer   block  py-2 rounded-md text-base"
                  >
                    Dashboard
                  </ActiveLink>
                ) : (
                  <ActiveLink
                   
                    to="/login"
                    className="cursor-pointer flex items-center underline text-[blue]  px-4 py-3 rounded-md text-sm   "
                  >
                   
                    <span className="text-[blue] font-bold">Login</span>
                  </ActiveLink>
                )} */}
              </div>
            </div>
          )}
        </Transition>
        <div className={`  `}>
          {/* ${
            !isVisible
              ? "flex   top-0 transition transform duration-500 ease-in-out"
              : ""
          } */}
          <div className="lg:block md:block hidden bg-white lg:px-40">
            <div className=" ">
              <div className="px-8  p-2 flex justify-between items-center  ">
                <Link to="/">
                  {/* scroll={(el) => scrollWithOffset(el)} */}
                  <div className="flex   items-center button font-bold text-xl cursor-pointer">
                    <img
                      className="w-20"
                      src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
                      alt="project-logo"
                      border="0"
                    />
                    <Link to="/">
                      <h1 className="flex items-center button font-medium pl-3 text-[#0055A2] text-sm cursor-pointer">
                        <p className="">
                          Shanto Hobby Development & <br /> Construction LTD{" "}
                        </p>
                      </h1>
                    </Link>
                  </div>
                </Link>
                <div className=" flex justify-end ">
                  <ActiveLink
                    exact
                    to="/"
                    // scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer  "
                  >
                    Home
                  </ActiveLink>

                  <ActiveLink
                    smooth
                    to="/about"
                    // scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer "
                  >
                    About Us
                  </ActiveLink>
                  <div className="group menu-hover relative cursor-pointer ">
                    <div className="flex  items-center  justify-center gap-1">
                      <span className="">Projects</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeLinecap="1.5"
                          stroke="currentColor"
                          className="h-4 w-4 me-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="invisible  absolute z-50 flex mx-10 pt-5 py-5 w-[200px] flex-col bg-white  px-1 text-gray-800 shadow-xl group-hover:visible">
                      <ActiveLink
                        to="projects/construction"
                        // scroll={(el) => scrollWithOffset(el)}
                        className="my-2 cursor-pointer"
                      >
                        <span className=" my-2 ">Construction Projects</span>
                      </ActiveLink>
                      <ActiveLink
                        to="projects/interior"
                        // scroll={(el) => scrollWithOffset(el)}
                        className="border-b-2 cursor-pointer"
                      >
                        <span className="my-5">Interior Projects</span>
                      </ActiveLink>
                      {/* <ActiveLink
                        to="handovered"
                        // scroll={(el) => scrollWithOffset(el)}
                        className=" cursor-pointer"
                      >
                        <span className="my-2">Handovered Projects</span>
                      </ActiveLink> */}
                    </div>
                  </div>
                  {/* <ActiveLink
                    smooth
                    to="/projects"
                    scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer "
                  >
                    Projects
                  </ActiveLink> */}
                  <ActiveLink
                    smooth
                    to="/careers"
                    // scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer "
                  >
                    Careers
                  </ActiveLink>
                  <ActiveLink
                    smooth
                    to="/our-team"
                    // scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer "
                  >
                    Our Team
                  </ActiveLink>
                  <ActiveLink
                    smooth
                    to="/contact-us"
                    // scroll={(el) => scrollWithOffset(el)}
                    className="cursor-pointer "
                  >
                    Contact Us
                  </ActiveLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
