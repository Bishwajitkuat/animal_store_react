import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import Animal from "./Animal";
import { animals, birds } from "./animalsList";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Birds from "./Birds";

class App extends React.Component {
  state = {
    animalList: animals,
    birdList: birds,
    searchInput: "",
  };

  // handler for removing card
  cardDeleteHandler = (name, type) => {
    if (type === "animal") {
      const filterList = this.state.animalList.filter(
        (item) => item.name !== name
      );
      this.setState({ animalList: filterList });
    } else {
      const filterList = this.state.birdList.filter(
        (item) => item.name !== name
      );
      this.setState({ birdList: filterList });
    }
  };
  // handle like and dislike btn click
  cardLikeHandler = (name, action, type) => {
    if (type === "animal") {
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
    } else {
      this.setState({
        birdList: this.state.birdList.map((item) => {
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
    }
  };
  // filter by kewod in the search input
  searchHandler(e) {
    this.setState({ searchInput: e.target.value });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="totalApp">
          <Header />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/animals"
                element={
                  <Animal
                    searchHandler={(e) => this.searchHandler(e)}
                    searchInput={this.state.searchInput}
                    animalList={this.state.animalList}
                    carDelete={this.cardDeleteHandler}
                    cardLike={this.cardLikeHandler}
                    cardDisLike={this.cardLikeHandler}
                  />
                }
              />
              <Route
                path="/birds"
                element={
                  <Birds
                    searchHandler={(e) => this.searchHandler(e)}
                    searchInput={this.state.searchInput}
                    birdList={this.state.birdList}
                    carDelete={this.cardDeleteHandler}
                    cardLike={this.cardLikeHandler}
                    cardDisLike={this.cardLikeHandler}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
