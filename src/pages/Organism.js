import "./Organism.css";
import React from "react";
import Card from "../UI/Card";
import Search from "../components/Search/Search";

const Organism = (props) => {
  const searchFilter = props.list.filter((item) => {
    return item.name.includes(props.searchInput);
  });
  const renderList = searchFilter.map((item) => (
    <Card
      cardDelete={() => props.carDelete(item.name, props.type)}
      cardLike={() => props.cardLike(item.name, "add", props.type)}
      cardDisLike={() => props.cardDisLike(item.name, "remove", props.type)}
      key={item.name}
      name={item.name}
      url={`https://source.unsplash.com/500x400/?${item.name}`}
      likeCount={item.likes}
    />
  ));
  return (
    <div className="organismDiv">
      <h2>
        {props.type} ({renderList.length})
      </h2>
      <Search
        inputHandler={props.searchHandler}
        searchInput={props.searchInput}
      />

      <div className="cardBody">{renderList}</div>
    </div>
  );
};

export default Organism;
