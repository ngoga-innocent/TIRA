import React from "react";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/LandingComponet/HeroHeader";
import GetStarted from "./components/LandingComponet/Getstarted";
import UnderGetStarted from "./components/LandingComponet/underGetStarted";
import HowWork from "./components/LandingComponet/HowWork";
import GetApp from "./components/LandingComponet/GetApp";
import FAQ from "./components/LandingComponet/FAQ";
import Apply from "./components/LandingComponet/Apply";
import Footer from "./components/Footer";
import GetToKnow from "./components/AboutComponents/GetToKnow";
import { OurMission } from "./components/AboutComponents/ourMission";
import { Choose } from "./components/AboutComponents/Choose";
import { Loan } from "./components/AboutComponents/Loan";
import { KeyFeature } from "./components/AboutComponents/KeyFeature";
import { Partners } from "./components/AboutComponents/Partners";
function App() {
  return (
    <div className="App px-2">
      <Navbar />
      <div className="items-center justify-center">
        {/* <HeroHeader />
        <GetStarted />
        <UnderGetStarted />
        <HowWork />
        <GetApp />
        <FAQ />
        <Apply />
        <Footer /> */}
        <GetToKnow />
        <OurMission />
        <Choose />
        <Loan />
        <KeyFeature />
        <Partners />
      </div>
    </div>
  );
}

export default App;
