import React from "react";
import {
  Discount,
  Dropdowns,
  HeroSection,
  RecommendationSection,
  HandPicked,
  ChooseAcrossCity,
  PartnershipProperty,
  ContactSection,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <RecommendationSection />
      <Discount />
      <HandPicked />
      <ChooseAcrossCity />
      <PartnershipProperty />
      <ContactSection />
    </React.Fragment>
  );
};

export default Home;
