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
import useHandpicked from "../hooks/useHandpicked";

const Home = () => {
  const { fetchProperties } = useHandpicked();
  useEffect(() => {
    fetchProperties();
  }, []);
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
