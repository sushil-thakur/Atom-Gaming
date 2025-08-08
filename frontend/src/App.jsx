import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Feature from "./Components/Feature/Feature";
import FeatureCardSection from "./Components/Feature/FeatureCardSelection";
import CardList from "./Components/Feature/CardList";
import Recommendation from "./Components/Recommendation/Recommendation";
import Displaycard from "./Components/Recommendation/Displaycard";



const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Feature/>
      <FeatureCardSection />
       <CardList/>
       <Recommendation/>
       <Displaycard/>
      
    </div>
  );
};

export default App;
