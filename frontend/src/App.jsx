import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Feature from "./Components/Feature/Feature";
import FeatureCardSection from "./Components/Feature/FeatureCardSelection";
import CardList from "./Components/Feature/CardList";
import Recommendation from "./Components/Recommendation/Recommendation";



const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Feature/>
      <FeatureCardSection />
       <CardList/>
       <Recommendation/>
      
    </div>
  );
};

export default App;
