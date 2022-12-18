import React from "react";
// import aboutImage from "../../pages/images/hero.webp";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import AIRIMAGE from "../../public/hero.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about-model">
        <Image src={AIRIMAGE} alt="" />
      </div>
      <div className="about-text">
        <h2>We are the best Air Cargo company</h2>
        <p>
          Air cargo is another term for air freight. It is the carriage or the
          transportation of goods through an air carrier. Transport services via
          air are the most valuable when it comes to moving express shipments
          around the globe and it consists of air mail, air freight and air
          express.
        </p>
        <Button w="100px" mt="10px">
          View More Details
        </Button>
      </div>
    </div>
  );
};

export default About;
