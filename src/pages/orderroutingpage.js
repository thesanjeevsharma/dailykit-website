import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import Bluebox1 from "../components/orderpage/Bluebox1";
export default class Orderroutingpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading={
            "Operate a Kitchen Where Everyone Knows Their Roles & Responsibilites."
          }
          heading={"Idiot-Proof Production"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-routing/Idiot%20Proof.....png"
          }
        />
        <Bluebox1
          heading={"Large or Small, We're Built for Every Scale of Operations"}
          subheading={
            "You Can Configure Fully-Automated Flows, Manual Flows Or Both Using DailyOS"
          }
          col1heading={"Kitchen Display System (KDS)"}
          col1para={
            "A KDS is any screen-based device that can replace paper order tickets for streamlined back-of-house workflow."
          }
          col2heading={"Kitchen Order Tickets (KOT)"}
          col2para={
            "No KDS? No problem! Print receipts with precise job instructions."
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
        <Bluebox1
          heading={"DailyKIT Understands Production Nuances"}
          subheading={
            "The Need For Ideal Flow For Production Fluctuates At Different Kitchen Production Volumes. We Provide You With The Option To Switch To Any Of The Below At Will."
          }
          col1heading={"Batch/Planned Mode"}
          col1para={
            "For pre-orders with scheduled delivery times, it is best to operate knowing the required inventory beforehand, so you can save time by packing similar ingredients in one shot, allowing for seamless final packaging"
          }
          col2heading={"Made to Order Mode"}
          col2para={
            "For on-demand ordering it is best to assign priority to each received order and pack & assemble them according to their expected dispatch time."
          }
          learn={"one"}
        />
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
