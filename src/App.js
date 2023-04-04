import "./App.css";
import React from "react";
import Animal from "./Animal";
import { animals } from "./animalsList";

class App extends React.Component {
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
    this.setState({ animalList: newList });
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
    this.setState({ animalList: newList });
  };
  getByNameHandler(name) {
    console.log(name);
    // this.setState({ animalList: animals });
    // this.setState({
    //   animalList: this.state.animalList.filter((item) =>
    //     item.name.includes(name)
    //   ),
    // });
  }
  render() {
    return (
      <div className="App">
        <div className="searchDiv">
          <label htmlFor="searchInput">Search</label>
          <input
            onInput={(e) => this.getByNameHandler(e.target.value)}
            type="text"
            id="searchInput"
          />
        </div>
        <Animal
          animalList={this.state.animalList}
          carDelete={(e) =>
            this.cardDeleteHandler(e.target.closest(".cardDiv").id)
          }
          cardLike={(e) =>
            this.cardLikeHandler(e.target.closest(".cardDiv").id)
          }
          cardDisLike={(e) =>
            this.cardDisLikeHandler(e.target.closest(".cardDiv").id)
          }
        />
      </div>
    );
  }
}

export default App;
