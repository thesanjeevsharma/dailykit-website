import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages

/* start meal kit brand */

import BakeryPage from "./pages/startMeal/bakery";
import Cloud_kitchen from "./pages/startMeal/cloud_kitchen";
import Grocers from "./pages/startMeal/Grocers";
import MealkitStartups from "./pages/startMeal/MealkitStartups";
import Franchisees from "./pages/startMeal/Franchisees";
import What_is_a_mealkit from "./pages/startMeal/What_is_a_mealkit";
import For_Restaurants from "./pages/startMeal/For_Restaurants";
import QSR_Cafes from "./pages/startMeal/QSR_Cafes";
import Meal_kit_packaging from "./pages/startMeal/Meal_kit_packaging";
import HowtodecideyourMealKitMenu from "./pages/startMeal/HowtodecideyourMealKitMenu";
import HowtopriceyourMealKits from "./pages/startMeal/HowtopriceyourMealKits";
import HowtopromoteyourMealKits from "./pages/startMeal/HowtopromoteyourMealKits";
import HowtosellyourMealKits from "./pages/startMeal/HowtosellyourMealKits";
import Start_mealkit_brands from "./pages/startMeal/Start_mealkit_brands";

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
// homepage
import Homepage from "./pages/homepage";
// sells
import OnDemandStorepage from "./pages/ondemandstorepage";
import SubscriptionStorepage from "./pages/subscriptionstorepage";
import MenuManagementpage from "./pages/menumanagement";
// ScheduleMeeting
import ScheduleMeeting from "./components/homepage/ScheduleMeeting";
// marketpage
import Marketpage from "./pages/marketpage";
//servepage
import weservepage from "./pages/weservepage";
//operatepage
import Orderdashboardpage from "./pages/orderdashboardpage";
import Orderroutingpage from "./pages/orderroutingpage";
import Orderfulfillmentpage from "./pages/orderfulfillmentpage";
import Portioncontrolpage from "./pages/portioncontrolpage";
import Packagingmanagementpage from "./pages/packagingmangement";
import GroctaurantCaseStudy from "./pages/startMeal/GroctaurantCaseStudy";

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
            <Route path="/enterprise/grocers" component={Grocers} />
            <Route
              path="/enterprise/meal-kit-startups"
              component={MealkitStartups}
            />
            <Route
              path="/enterprise/how-dailykit-can-help-franchisees"
              component={Franchisees}
            />
            <Route
              path="/restaurants/fine-dine-restaurants"
              component={For_Restaurants}
            />
            <Route path="/restaurants/cafes" component={QSR_Cafes} />
            <Route
              path="/case-study/Groctaurant-Case-Study"
              component={GroctaurantCaseStudy}
            />
            <Route
              path="/start-meal-kit-brands/what-is-meal-kit"
              component={What_is_a_mealkit}
            />
            <Route
              path="/start-meal-kit-brands/how-to-start-a-Meal-Kit-Service"
              component={Start_mealkit_brands}
            />
            <Route
              path="/meal-kit-guides/meal-kit-packaging"
              component={Meal_kit_packaging}
            />
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-decide-your-meal-kits"
              component={HowtodecideyourMealKitMenu}
            />{" "}
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-price-your-meal-kits"
              component={HowtopriceyourMealKits}
            />{" "}
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-promote-your-meal-kits"
              component={HowtopromoteyourMealKits}
            />{" "}
            <Route
              path="/meal-kit-guides/meal-kit-guides/how-to-sell-your-meal-kits"
              component={HowtosellyourMealKits}
            />
            {/* operate */}
            <Route
              path="/operate/centralized-order-dashboard"
              component={Orderdashboardpage}
            />
            <Route
              path="/operate/order-routing-and-kitchen-display-system"
              component={Orderroutingpage}
            />
            <Route
              path="/operate/order-fulfillment"
              component={Orderfulfillmentpage}
            />{" "}
            <Route
              path="/operate/packaging-management"
              component={Packagingmanagementpage}
            />
            <Route
              path="/operate/portion-control"
              component={Portioncontrolpage}
            />
            {/* sells */}
            <Route
              path="/sells/on-demand-online-store"
              component={OnDemandStorepage}
            />
            <Route
              path="/sells/subscription-online-store"
              component={SubscriptionStorepage}
            />
            <Route path="/menu/overview" component={MenuManagementpage} />
            {/* market */}
            <Route path="/market" component={Marketpage} />
            {/* we serve */}
            <Route path="/we_serve" component={weservepage} />
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
