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
function App() {
  return (
    <div className="App px-2">
      <Navbar />
      <div className="items-center justify-center">
        <HeroHeader />
        <GetStarted />
        <UnderGetStarted />
        <HowWork />
        <GetApp />
        <FAQ />
        <Apply />
        <Footer />
      </div>
    </div>
  );
}

export default App;
