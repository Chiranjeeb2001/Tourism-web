import "../components/DestinationStyles.css";
import img1 from "../asserts/1.jpg";
import img2 from "../asserts/8.jpg";
import img3 from "../asserts/3.jpg";
import img4 from "../asserts/4.jpg";

import React from "react";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Populer destination</h1>
      <p>Explore the world's wonders with expertly guided tours that showcase the hidden gems of each destination. Whether you're a history enthusiast, nature lover, or thrill-seeker, our diverse range of tours caters to every interest.</p>
      <DestinationData
        cName="first-des"
        heading="Explore"
        desciption="Explore the world's wonders with expertly guided tours that showcase the hidden gems of each destination. Whether you're a history enthusiast, nature lover, or thrill-seeker, our diverse range of tours caters to every interest."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        cName="first-des revese"
        heading="Explore"
        desciption="Explore the world's wonders with expertly guided tours that showcase the hidden gems of each destination. Whether you're a history enthusiast, nature lover, or thrill-seeker, our diverse range of tours caters to every interest."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
