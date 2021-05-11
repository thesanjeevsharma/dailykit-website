import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import BakeryPage from "./pages/bakery";
import cloud_kitchenPage from "./pages/cloud_kitchenPage";

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/bakerypage" component={BakeryPage} />
            <Route path="/cloud_kitchen" component={cloud_kitchenPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;