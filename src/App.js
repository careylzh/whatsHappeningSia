import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import LocateMe from "./pages/locateMe";
import NewsFeed from "./pages/newsFeed";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/locate-me" component={LocateMe} />
        <Route path="/news-feed" component={NewsFeed} />
      </Switch>
    </Router>
  );
}

export default App;
