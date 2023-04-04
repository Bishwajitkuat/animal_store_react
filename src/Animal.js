import "./Animal.css";
import React from "react";
import Card from "./Card";

const Animal = (props) => {
  const renderList = props.animalList.map((item) => (
    <Card
      cardDelete={props.carDelete}
      cardLike={props.cardLike}
      cardDisLike={props.cardDisLike}
      id={item.name}
      key={item.name}
      name={item.name}
      url={`https://source.unsplash.com/500x400/?${item.name}`}
      likeCount={item.likes}
    />
  ));
  return <div className="cardBody"> {renderList}</div>;
};

export default Animal;
