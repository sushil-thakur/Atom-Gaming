import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Feature from "./Components/Feature";
import BentoCard from "./Components/BentoCard";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      {/* <Feature/> */}
      <BentoCard/>
    
    </div>
  );
};

export default App;
