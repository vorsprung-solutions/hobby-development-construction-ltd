import React from "react";
import AboutCompany from "./components/AboutCompany";
import { Helmet } from "react-helmet-async";


const AboutUs = () => {
  return (
    <div>
     
    
      <Helmet>
        
        <meta
          name="description"
          content="Discover the story of our construction company. With a rich history of craftsmanship and excellence, we're your trusted partner for construction projects. Learn about our values, expertise, and commitment to delivering quality construction solutions."
        />
      </Helmet>
      <AboutCompany></AboutCompany>
    </div>
  );
};

export default AboutUs;
