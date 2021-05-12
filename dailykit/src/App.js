import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// navbar
import Navbar from "./Navbar";
// pages
import BakeryPage from "./pages/bakery";
import Cloud_kitchen from "./pages/cloud_kitchen";
import For_Enterprise from "./pages/For_Enterprise";
import What_is_a_mealkit from "./pages/What_is_a_mealkit";
import For_Restaurants from "./pages/For_Restaurants";
import How_to_start_a_meal_kit_service from "./pages/How_to_start_a_meal_kit_service";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Navbar} />
            <Route path="/bakerypage" component={BakeryPage} />
            <Route path="/Cloud_kitchen" component={Cloud_kitchen} />
            <Route path="/For_Enterprise" component={For_Enterprise} />
            <Route path="/For_Restaurants" component={For_Restaurants} />
            <Route path="/What_is_a_mealkit" component={What_is_a_mealkit} />
            <Route
              path="/How_to_start_a_meal_kit_service"
              component={How_to_start_a_meal_kit_service}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
