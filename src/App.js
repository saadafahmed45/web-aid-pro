import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Team from "./Components/Team/Team";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Home from "./Components/Home/Home";

function App() {
  const myStyle = {
    marginTop: "20%",
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="home_spnner">
          {" "}
          <ScaleLoader

            color={"#1145e0"}
            loading={loading}
            size={70}
          />
        </div>
      ) : (
        <div>
          {" "}
          <Router>
            <div>
              <Navbar></Navbar>
              {/* <Header></Header> */}
              <Switch>
                <Route exact path="/">
                  {/* <Header></Header> */}
                  <Home></Home>
                </Route>
                <Route path="/service">
                  <Service />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/team">
                  <Team></Team>
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </Router>
       
        </div>
      )}
    </div>
  );
}

export default App;
