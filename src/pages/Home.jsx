import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import BestSeller from "../components/BestSeller";
import BrandPage from "../components/BrandPage";
import AdvertiseSection from "../components/AdvertiseSection";
import SimpleBanner from "../components/SimpleBanner";
import FeaturedServices from "../components/FeaturedServices";
import CustomerFeedback from "../components/CustomerFeedBack";

const Home = () => {
  return (
    <main>
      <div>
        <HomePage />
        <BestSeller />
        <BrandPage />
        <AdvertiseSection />
        <SimpleBanner />
        <FeaturedServices />
        <CustomerFeedback />
      </div>
    </main>
  );
};

export default Home;
