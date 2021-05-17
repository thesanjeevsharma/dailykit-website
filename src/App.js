import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// navbar
import Navbar from "./Navbar";
// pages

/* start meal kit brand */

import BakeryPage from "./pages/startMeal/bakery";
import Cloud_kitchen from "./pages/startMeal/cloud_kitchen";
import For_Enterprise from "./pages/startMeal/For_Enterprise";
import What_is_a_mealkit from "./pages/startMeal/What_is_a_mealkit";
import For_Restaurants from "./pages/startMeal/For_Restaurants";
import How_to_start_a_meal_kit_service from "./pages/startMeal/How_to_start_a_meal_kit_service";

/* Do more */

import RecipeProviderPage from "./pages/doMore/recipeProvider";
import Co_packerPage from "./pages/doMore/co_packer";
import Co_sellerPage from "./pages/doMore/co_seller";
import Delivery_PartnerPage from "./pages/doMore/delivery_Partner";

/* Resources */

import OurPhilosophyPage from "./pages/resources/OurPhilosophy";
import BlogPage from "./pages/resources/Blog";
import Revenue_CalculatorPage from "./pages/resources/Revenue_Calculator";
import Groctorant_study_centerPage from "./pages/resources/Groctorant_study_center";
import Meal_Kit_PackagingPage from "./pages/resources/Meal_Kit_Packaging";
import Meal_Kit_Marketing_guidePage from "./pages/resources/Meal_Kit_Marketing_guide";
import Homepage from "./pages/homepage";
import OnDemandStorepage from "./pages/ondemandstorepage";
import ScheduleMeeting from "./components/homepage/ScheduleMeeting";
import Marketpage from "./pages/marketpage";

// routing

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/ScheduleDemo" component={ScheduleMeeting} />
            {/* start meal kit brand */}

            <Route path="/bakerypage" component={BakeryPage} />
            <Route path="/Cloud_kitchen" component={Cloud_kitchen} />
            <Route path="/For_Enterprise" component={For_Enterprise} />
            <Route path="/For_Restaurants" component={For_Restaurants} />
            <Route path="/What_is_a_mealkit" component={What_is_a_mealkit} />
            <Route
              path="/How_to_start_a_meal_kit_service"
              component={How_to_start_a_meal_kit_service}
            />
            <Route
              path="/sells/on-demand-online-store"
              component={OnDemandStorepage}
            />
            <Route path="/market" component={Marketpage} />
            {/* Do more */}

            <Route path="/Recipe_Provider" component={RecipeProviderPage} />
            <Route path="/Co_packer" component={Co_packerPage} />
            <Route path="/Co_seller" component={Co_sellerPage} />
            <Route path="/Delivery_Partner" component={Delivery_PartnerPage} />

            {/* Resources */}

            <Route
              path="/AboutUs/OurPhilosophy"
              component={OurPhilosophyPage}
            />
            <Route path="/AboutUs/Blog" component={BlogPage} />
            <Route
              path="/Tools/Revenue_Calculator"
              component={Revenue_CalculatorPage}
            />
            <Route
              path="/Case_study/Groctorant_study_center"
              component={Groctorant_study_centerPage}
            />
            <Route
              path="/Meal_Kit_Guides/Meal_Kit_Packaging"
              component={Meal_Kit_PackagingPage}
            />
            <Route
              path="/Meal_Kit_Guides/Meal_Kit_Marketing_guide"
              component={Meal_Kit_Marketing_guidePage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
