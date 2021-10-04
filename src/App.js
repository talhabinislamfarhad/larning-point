import React, { useEffect, useState } from "react";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS 
import './App.css';
// Router
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
// All Components
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const [services, setStudents] = useState([]);
  useEffect(() => {
    fetch('./Services.json')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, []);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/home">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/services">
            <Services services={services}></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
