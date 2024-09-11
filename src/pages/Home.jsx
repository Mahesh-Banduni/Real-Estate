import React from "react";
import {
  Discount,
  Dropdowns,
  HeroSection,
  RecommendationSection,
  HandPicked,
  ChooseAcrossCity,
  PartnershipProperty,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <Dropdowns />
      <HeroSection />
      <RecommendationSection />
      <Discount />
      <HandPicked />
      <ChooseAcrossCity />
      <PartnershipProperty />
    </React.Fragment>
  );
};

export default Home;
