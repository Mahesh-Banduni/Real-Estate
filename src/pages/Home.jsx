import React from "react";
import {
  Discount,
  Dropdowns,
  HeroSection,
  RecommendationSection,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <Dropdowns />
      <HeroSection />
      <RecommendationSection />
      <Discount />
    </React.Fragment>
  );
};

export default Home;
