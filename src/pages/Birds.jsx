import React from "react";
import Card from "../UI/Card";
import Search from "../components/Search/Search";

const Birds = (props) => {
  const searchFilter = props.birdList.filter((item) => {
    return item.name.includes(props.searchInput);
  });
  const renderList = searchFilter.map((item) => (
    <Card
      cardDelete={() => props.carDelete(item.name, "bird")}
      cardLike={() => props.cardLike(item.name, "add", "bird")}
      cardDisLike={() => props.cardDisLike(item.name, "remove", "bird")}
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

export default Birds;
