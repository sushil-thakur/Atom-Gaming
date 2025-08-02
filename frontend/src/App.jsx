import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Feature from "./Components/Feature";
import FeatureCardSection from "./Components/FeatureCardSelection";
// import BentoCard from "./Components/BentoCard";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Feature/>
    <FeatureCardSection />
  
    
    </div>
  );
};

export default App;
