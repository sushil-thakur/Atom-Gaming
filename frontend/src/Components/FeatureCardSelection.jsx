import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureImage from "./FeatureImage";

const FeatureCardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-12 mb-8 ml-30 mr-20">
      <FeatureCard
        tag="ONLINE"
        tagColor="bg-red-500"
        date="OCTOBER 18, 2019"
        title="THE EXPERT’S GUIDE TO SURVIVING LONG HAUL"
      />
      <FeatureCard
        tag="GAMES"
        tagColor="bg-red-500"
        date="OCTOBER 18, 2019"
        title="THE TATTOO TABOO FOR THE ASIAN WOMAN"
      />
      <FeatureCard
        tag="GAMES"
        tagColor="bg-red-500"
        date="OCTOBER 18, 2019"
        title="IMPOSSIBLY HIGH BEAUTY STANDARDS ARE RUINING"
      />
      <FeatureCard
        tag="OFFLINE"
        tagColor="bg-red-500"
        date="OCTOBER 18, 2019"
        title="ADJUSTING TO YOUR HOME IS NO DIFFERENT"
      />
      <FeatureImage
        image="/feature 5.jpg"
        tag="OFFLINE"
        tagColor="bg-red-500"
        date="OCTOBER 18, 2019"
        title="ADJUSTING TO YOUR HOME IS NO DIFFERENT"
      />
    </div>
  );
};

export default FeatureCardSection;
