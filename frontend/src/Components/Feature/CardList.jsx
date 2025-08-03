// src/components/CardList.js
import React from "react";
import Card from "./Card";
import { cardData } from "../../data";

const CardList = () => {
  return (
    <div className="h-50vh bg-white py-12 px-5">
      <div className="flex flex-wrap justify-center gap-11 ml-12">
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            status={card.status}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
