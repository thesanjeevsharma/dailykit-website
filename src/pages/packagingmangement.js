import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
export default class Packagingmanagementpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading={
            "With Integrated Packaging Management Platform,Eliminate Low-Quality & Improper Packaging"
          }
          heading={"Packaging Made Easy"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/packaging/packaging-banner.png"
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

        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
