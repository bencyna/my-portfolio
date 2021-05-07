import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/nav";
import About from "./pages/about/index";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/*">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
