import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import DirectoryList from "./DirectoryList";
import ResultsList from "./ResultsList";
import Contact from "./Contact";
import Tips from "./Tips";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://climate-data.onrender.com/organisations")
        .then((response) => response.json())
        .then((data) => {
            setList(data);
        })
        .catch((error) => {
            console.error("Error fetching organisations:", error);
        });
}, []);

const handleAddOrganisation = (newOrganisation) => {
    setList([...list, newOrganisation]);
};

  return (
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route path="/directorylist">
            <DirectoryList list={list}/>
          </Route>
          <Route path="/tips">
            <Tips />
          </Route>
          <Route path="/add">
            <Contact onAddOrganisation={handleAddOrganisation}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/results/:category"
            render={({ match }) => (
              <ResultsList category={match.params.category} />
            )}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;

