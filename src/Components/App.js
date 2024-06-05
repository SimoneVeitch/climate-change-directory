import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import DirectoryList from "./DirectoryList";
import ResultsList from "./ResultsList";
import Contact from "./Contact";
import Tips from "./Tips";
import Home from "./Home";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/organisations")
      .then((r) => r.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/directorylist">
            <DirectoryList list={list}/>
          </Route>
          <Route exact path="/tips">
            <Tips />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/results/:category">
            <ResultsList list={list} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

