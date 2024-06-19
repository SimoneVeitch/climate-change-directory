import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    const fetchData = async () => {
        try {
            const response = await fetch("https://climate-data.onrender.com/organisations");
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error("Error fetching organisations:", error);
        }
    };
    fetchData();
}, []);

const handleAddOrganisation = (newOrganisation) => {
    setList([...list, newOrganisation]);
};

  return (
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route exact path="/directorylist">
            <DirectoryList list={list}/>
          </Route>
          <Route exact path="/tips">
            <Tips />
          </Route>
          <Route exact path="/contact">
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
        </Switch>
        <Footer />
      </div>
  );
}

export default App;

