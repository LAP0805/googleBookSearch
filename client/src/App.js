import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import SearchPage from './components/searchBar/searchPage';
import SavedPage from './components/SavedPage/SavedPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <>
      <NavBar/>
      <Header/>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/saved" component={SavedPage}/>
      </>
      </Router>
    );
  }
}

export default App;
