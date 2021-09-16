import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import ContactState from "./Context/Contact/ContactState";
import Home from "./Components/Home";

function App() {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <div id="mainBody">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContactState>
  );
}

export default App;
