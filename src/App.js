import React from "react";
import Animal from "./Animal";
import { animals } from "./animalsList";
import "./App.css";
import Header from "./Header";

class App extends React.Component {
  state = {
    animalList: animals,
    searchInput: "",
  };
  backUpState = [...this.state.animalList];

  // handler for removing card
  cardDeleteHandler = (name) => {
    const filterList = this.state.animalList.filter(
      (item) => item.name !== name
    );
    this.setState({ animalList: filterList });
  };
  // handle like and dislike btn click
  cardLikeHandler = (name, action) => {
    this.setState({
      animalList: this.state.animalList.map((item) => {
        if (item.name === name) {
          if (action === "add") {
            item.likes++;
            return item;
          } else {
            item.likes--;
            return item;
          }
        } else return item;
      }),
    });
  };
  // filter by kewod in the search input
  searchHandler(e) {
    console.log(e.target.value);
    this.setState({ searchInput: e.target.value });

    // console.log(name);
    // this.setState((prevStat) => {
    //   const updatedArray = prevStat.filter((item) => item.name.includes(name));
    //   return { animalList: updatedArray };
    // });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Animal
          searchHandler={(e) => this.searchHandler(e)}
          searchInput={this.state.searchInput}
          animalList={this.state.animalList}
          carDelete={this.cardDeleteHandler}
          cardLike={this.cardLikeHandler}
          cardDisLike={this.cardLikeHandler}
        />
      </div>
    );
  }
}

export default App;
