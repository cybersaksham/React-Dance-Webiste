import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import ContactState from "./Context/Contact/ContactState";

function App() {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </ContactState>
  );
}

export default App;
