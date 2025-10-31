import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import Navbar1 from "../../components/shared/Navbar/Navbar1";
import Footer from "../../components/shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div className=" ">
         <Helmet>
        
        <meta
          name="description"
          content="Welcome to our construction company. We offer a wide range of construction services, including residential, commercial, and industrial projects. With a strong commitment to quality and safety, we bring your construction visions to life."
        />
      </Helmet>
      {" "}
      {/* //max-w-[1440px] mx-auto */}
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
      <div className=" ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
