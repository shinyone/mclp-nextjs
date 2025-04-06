import React from "react";
import HomeSection from "../components/HomeSection";
import InfoSection from "../components/InfoSection";
import MapSection from "../components/MapSection";
import FaqSection from "../components/FaqSection";
import DiscordSection from "../components/DiscordSection";
import VoteSection from "../components/VoteSection";
import StoreSection from "../components/StoreSection";
import RanksSection from "../components/RanksSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div id="main-content" className="container my-4 text-start" style={{ maxWidth: "900px" }}>
      {/* Render all sections */}
      <HomeSection />
      <InfoSection />
      <MapSection />
      <FaqSection />
      <DiscordSection />
      <VoteSection />
      <StoreSection />
      <RanksSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
