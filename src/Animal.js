import "./Animal.css";
import React from "react";
import Card from "./Card";
import Search from "./Search";

const Animal = (props) => {
  const searchFilter = props.animalList.filter((item) => {
    return item.name.includes(props.searchInput);
  });
  const renderList = searchFilter.map((item) => (
    <Card
      cardDelete={() => props.carDelete(item.name)}
      cardLike={() => props.cardLike(item.name, "add")}
      cardDisLike={() => props.cardDisLike(item.name, "remove")}
      key={item.name}
      name={item.name}
      url={`https://source.unsplash.com/500x400/?${item.name}`}
      likeCount={item.likes}
    />
  ));
  return (
    <div className="cardBody">
      <Search inputHandler={props.searchHandler} />
      {renderList}
    </div>
  );
};

export default Animal;
