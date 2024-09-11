import React from "react";
import {
  Discount,
  Dropdowns,
  HeroSection,
  RecommendationSection,
  HandPicked,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <Dropdowns />
      <HeroSection />
      <RecommendationSection />
      <Discount />
      <HandPicked />
    </React.Fragment>
  );
};

export default Home;
