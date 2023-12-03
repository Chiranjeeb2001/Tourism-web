import "../components/RecentTripsStyles.css";
import img1 from "../asserts/5.jpg";
import img2 from "../asserts/6.jpg";
import img3 from "../asserts/8.jpg";

import React from "react";
import RecentTripsData from "./RecentTripsData";

const RecentTrips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>

      <div className="trip-card">
        <RecentTripsData
          tImg={img1}
          heading="Explore"
          text="Connect with fellow travelers and knowledgeable guides who share your passion for discovery. Enjoy hassle-free travel with our comprehensive package"
        />
        <RecentTripsData
          tImg={img2}
          heading="Explore"
          text="Connect with fellow travelers and knowledgeable guides who share your passion for discovery. Enjoy hassle-free travel with our comprehensive package"
        />
        <RecentTripsData
          tImg={img3}
          heading="Explore"
          text="Connect with fellow travelers and knowledgeable guides who share your passion for discovery. Enjoy hassle-free travel with our comprehensive package"
        />
      </div>
    </div>
  );
};

export default RecentTrips;
