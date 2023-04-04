import "./Animal.css";
import React from "react";
import { animals } from "./animalsList";
import Card from "./Card";

class Animal extends React.Component {
  state = { animalList: animals };
  // handler for removing card
  cardDeleteHandler = (name) => {
    const filterList = this.state.animalList.filter(
      (item) => item.name !== name
    );
    this.setState({ animalList: filterList });
  };
  //increase like
  cardLikeHandler = (name) => {
    const newList = this.state.animalList.map((item) => {
      if (item.name === name) {
        item.name = name;
        item.likes++;
        return item;
      } else return item;
    });
    this.setState(newList);
  };
  // decrease like
  cardDisLikeHandler = (name) => {
    const newList = this.state.animalList.map((item) => {
      if (item.name === name) {
        item.name = name;
        item.likes--;
        return item;
      } else return item;
    });
    this.setState(newList);
  };
  render() {
    const renderList = this.state.animalList.map((item) => (
      <Card
        cardDelete={(e) => this.cardDeleteHandler(item.name)}
        cardLike={(e) => this.cardLikeHandler(item.name)}
        cardDisLike={(e) => this.cardDisLikeHandler(item.name)}
        key={item.name}
        name={item.name}
        url={`https://source.unsplash.com/500x400/?${item.name}`}
        likeCount={item.likes}
      />
    ));
    return (
      <div className="animalBody">
        <div className="animalSearchDiv">
          <label htmlFor="animalSearch">Search Animal:</label>
          <input type="text" id="animalSearch"></input>
        </div>
        <div className="cardBody"> {renderList}</div>
      </div>
    );
  }
}

export default Animal;
