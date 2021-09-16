import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Team from "./Components/Team/Team";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { createContext, useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminPanel from "./Components/Dashboard/AdminPanel/AdminPanel";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";

import AnimatedCursor from "react-animated-cursor";

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <div className="App">
        {loading ? (
          <div className="home_spnner">
            {" "}
            <ScaleLoader color={"#1145e0"} loading={loading} size={70} />
          </div>
        ) : (
          <div>
            {" "}
            <Router>
              <div>
                <Navbar></Navbar>
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/service">
                    <Service />
                  </Route>
                  <Route path="/about">
                    {/* <Login></Login> */}
                <About></About>
                  </Route>
                  <Route path="/team">
                    <Team></Team>
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>

                  <Route path="/dashboard">
                    <AdminPanel></AdminPanel>
                  </Route>
                  <Route path="/Makadmin">
                    <MakeAdmin></MakeAdmin>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        )}
        <AnimatedCursor
          innerSize={20}
          outerSize={12}
          color="52, 110, 235"
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={8}
          trailingSpeed={8}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;
