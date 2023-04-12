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
      cardDelete={() => props.carDelete(item.name, "animal")}
      cardLike={() => props.cardLike(item.name, "add", "animal")}
      cardDisLike={() => props.cardDisLike(item.name, "remove", "animal")}
      key={item.name}
      name={item.name}
      url={`https://source.unsplash.com/500x400/?${item.name}`}
      likeCount={item.likes}
    />
  ));
  return (
    <div>
      <Search
        inputHandler={props.searchHandler}
        searchInput={props.searchInput}
      />
      <div className="cardBody">{renderList}</div>
    </div>
  );
};

export default Animal;
