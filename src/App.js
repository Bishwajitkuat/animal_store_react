import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { animals, birds } from "./animalsList";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Organism from "./pages/Organism";

// if local storage does not have any data, data sent to local storage for using it as state
if (
  !localStorage.getItem("animal_local") &&
  !localStorage.getItem("bird_local")
) {
  localStorage.setItem("animal_local", JSON.stringify(animals));
  localStorage.setItem("bird_local", JSON.stringify(birds));
  localStorage.setItem("searKey_local", JSON.stringify(""));
}

class App extends React.Component {
  state = {
    //state data is taken from local storage
    animalList: JSON.parse(localStorage.getItem("animal_local")), //animals,
    birdList: JSON.parse(localStorage.getItem("bird_local")), // birds,
    searchInput: JSON.parse(localStorage.getItem("searKey_local")), // "",
  };

  // handler for removing card
  cardDeleteHandler = (name, type) => {
    const filterList = this.state[type + "List"].filter(
      (item) => item.name !== name
    );
    this.setState({ [type + "List"]: filterList });
    // after updating the state new value is overwrite into local host
    localStorage.setItem([type + "_local"], JSON.stringify(filterList));
  };

  // handle like and dislike btn click
  cardLikeHandler = (name, action, type) => {
    const filterList = this.state[type + "List"].map((item) => {
      if (item.name === name) {
        if (action === "add") {
          item.likes++;
          return item;
        } else {
          item.likes--;
          return item;
        }
      } else return item;
    });

    this.setState({ [type + "List"]: filterList });
    localStorage.setItem([type + "_local"], JSON.stringify(filterList));
  };
  // filter by kewod in the search input
  searchHandler(e) {
    this.setState({ searchInput: e.target.value });
    localStorage.setItem("searKey_local", JSON.stringify(e.target.value));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="totalApp">
          <Header data={this.state} />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/animals"
                element={
                  <Organism
                    type="animal"
                    searchHandler={(e) => this.searchHandler(e)}
                    searchInput={this.state.searchInput}
                    list={this.state.animalList}
                    carDelete={this.cardDeleteHandler}
                    cardLike={this.cardLikeHandler}
                    cardDisLike={this.cardLikeHandler}
                  />
                }
              />
              <Route
                path="/birds"
                element={
                  <Organism
                    type="bird"
                    searchHandler={(e) => this.searchHandler(e)}
                    searchInput={this.state.searchInput}
                    list={this.state.birdList}
                    carDelete={this.cardDeleteHandler}
                    cardLike={this.cardLikeHandler}
                    cardDisLike={this.cardLikeHandler}
                  />
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
