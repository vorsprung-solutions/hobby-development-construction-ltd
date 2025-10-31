import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const AboutCompany = () => {
  return (
    <div className="px-8  lg:px-52 py-6 lg:py-16">
    
      <AnimationOnScroll animateIn="animate__slideInUp">
        <h1 className="text-3xl  text-blue-800 text-center mb-10">About US</h1>
      </AnimationOnScroll>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        <div className=" animate__animated animate__bounceInLeft lg:w-1/2">
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <h2 className="text-xl text-blue-400 mb-3">About SHDCL</h2>
            <p className="text-justify my-5">
              Welcome to SHANTO HOBBY DEVELOPEMENT & CONSTRUCTION LTD, At SHDCL,
              we are your trusted partners in consultancy & construction. With a
              wealth of experience and a commitment to excellence, we provide
              tailored solutions for your unique needs. Our expertise spans
              various industries, ensuring you receive top-tier advice and
              support. Discover more about us and how we can work together to
              achieve your goals. Welcome to a brighter future with SHANTO HOBBY
              DEVELOPMENT & CONSTRUCTION LTD.
            </p>
            <Link to="/about" className="bg-[blue] text-white p-1  rounded">
              See More
            </Link>
          </AnimationOnScroll>
        </div>
        <div className="lg:w-1/2">
          <AnimationOnScroll animateIn="animate__lightSpeedInRight">
            <LazyLoadImage
              className=" rounded-xl mx-auto"
              src="/office-buildings.jpg"
             
              PlaceholderSrc="/office-buildings.jpg"
              effect="blur"
            />
            {/* <img
              className="lg:w-[80%] rounded-xl mx-auto"
              src="https://i.ibb.co/Zft6281/office-buildings.jpg"
              alt=""
            /> */}
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
