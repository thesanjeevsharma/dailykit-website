import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import MarketingMadeEasy from "../components/marketpage/MarketingMadeEasy";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
export default class Portioncontrolpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <MarketingMadeEasy
          heading={"Ensuring Portion Consistency"}
          subheading={""}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/portion-control/idiotproof-banner.png"
          }
        />
        <PopularOrderingExperiences
          subheading={"Easy & Intuitive"}
          heading={"One Dashboard For Every Product Line"}
          text={
            "Be it Meal Kits, Ready-To-Eat, Private-Label Artisanal Grocery or Any Other Trending Product Line, DailyKIT Offers One Comprehensive Dashboard to Manage Them All."
          }
          point={[
            "Accept Orders from Everywhere e.g.On-Demand/Subscription Store, Multiple Ghost Brands/Third-Party Marketplaces",
            "Cloud-Based Access allowing you to manage orders from anywhere",
            "Apply Filters & Sorting using multiple parameters to help with Order Expediting",
          ]}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/all-orders-2@2x.png"
          }
        />
        <div style={{ background: "#111B2B", height: "40rem" }} />
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
