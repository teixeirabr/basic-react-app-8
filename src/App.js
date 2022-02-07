import "./App.css";

import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    luke: "",
  };

  componentDidMount() {
    axios
      .get("https://swapi.dev/api/people/1")
      .then((res) => {
        this.setState({ luke: res.data });
        console.log(res.data);
      })
      .catch((e) => console.log("error", e));
  }

  render() {
    return (
      <div className="App">
        <h1> Name: {this.state.luke.name}</h1>
        <h1>Birth Year: {this.state.luke.birth_year}</h1>
        <h1>Height: {this.state.luke.height}</h1>
        <h1>Eye Color: {this.state.luke.eye_color}</h1>
      </div>
    );
  }
}

export default App;
