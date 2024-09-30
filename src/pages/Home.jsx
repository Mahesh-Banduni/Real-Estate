import React, { useEffect } from "react";
import {
  Discount,
  HeroSection,
  RecommendationSection,
  HandPicked,
  ChooseAcrossCity,
  PartnershipProperty,
  ContactSection,
} from "../components";
import axios from "axios";

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
