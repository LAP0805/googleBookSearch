import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import SearchPage from './components/searchBar/searchPage';

class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <Header/>
      <SearchPage/>
      </>
    );
  }
}

export default App;
