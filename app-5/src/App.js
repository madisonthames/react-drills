import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from './components/image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image groot={'https://store.foodsniffr.com/wp-content/uploads/2018/12/Exclusive-Groot-Marvel-Life-Size-Figure-Collectibles-Gifts.jpeg'}/>
      </div>
    );
  }
}

export default App;
