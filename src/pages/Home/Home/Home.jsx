import React from "react";
import Map from "../../../features/HomePage/Map/Map";
import Counter from "../../../features/HomePage/Counter/Counter";
// import AboutUs from "../AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import Contact from "../../Contact_Us/Contact";
import Branch from "../components/Branch";
import MeetOurTeam from "../MeetOurTeam/MeetOurTeam";
import AboutUs from "../../AboutUs/AboutUs";
import HomeGallery from "../components/HomeGallery";
import HomeProjects from "../../Projects/v2/_components/HomeProjects";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
     <Helmet>
        
        <meta
          name="description"
          content="Welcome to our construction company. We offer a wide range of construction services, including residential, commercial, and industrial projects. With a strong commitment to quality and safety, we bring your construction visions to life."
        />
      </Helmet>
      <Banner></Banner>
      {/* <AboutUs></AboutUs> */}
      <AboutUs></AboutUs>
      <HomeProjects></HomeProjects>
      <HomeGallery></HomeGallery>
      {/* <MeetOurTeam></MeetOurTeam> */}
      <Branch></Branch>
      <Counter></Counter>
      <Contact></Contact>
      <Map></Map>
    </div>
  );
};

export default Home;
