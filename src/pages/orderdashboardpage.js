import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import MarketingMadeEasy from "../components/marketpage/MarketingMadeEasy";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/homepage/ScheduleMeetingSection1";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import Redhover from "../components/orderpage/Redhover";
import OrderNotification from "../components/orderpage/OrderNotification";
export default class Orderdashboardpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <MarketingMadeEasy
          heading={"Centralized Order Management"}
          subheading={"Make Your Life Easier"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/order-dashboard-hero2@2x.png"
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
        <OrderNotification
          image1={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/DailyOS-Notifications@2x.png"
          }
          image2={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/print-KOTs@2x.png"
          }
          image3={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/Email-%26-SMS-Notifications@2x.png"
          }
        />
        <div style={{ background: "#111B2B", height: "40rem" }} />
        <Redhover
          heading={"Daily Order Reporting & Analytics"}
          list={[
            "Order Fulfillment",
            "Daily Sales & Revenue",
            "Inventory Usage",
          ]}
          image={["imagebox5", "imagebox6", "imagebox7"]}
        />
        <EndToEndFoodBusiness />
        <ScheduleMeetingSection1
          heading={"Schedule an E-Meeting"}
          image={
            "https://static.hsappstatic.net/ui-images/static-2.377/optimized/errors/map.svg"
          }
          imagebelowline={"The booking page is no longer active"}
          contactline={
            "Please contact whoever sent you this booking page link. Or email"
          }
          emailline={"Rishi Singhal directly at rishi@dailykit.org"}
          emaillink={"rishi@dailykit.org"}
          content={[
            {
              question: "How Do You Schedule A Meeting?",
              answer:
                "Select the date on the calendar, the time slot, and then simply fill in your information. Done!",
            },
            {
              question: "What Happens After You Schedule A Meeting?",
              answer:
                "We will send you a calendar invite to your supplied email address with the Google Meet link at the scheduled date & time.In the event that you're unable to join by laptop/computer, we will call you on the given phone number",
            },
            {
              question: "What Happens During The Meeting?",
              answer:
                "We invite you to share good, bad and the ugly of your business. After understanding your requirements and concerns, we will figure out how to deploy the proper DailyKIT tech solutions based on your business strategy.",
            },
          ]}
        />
        <Footer />
      </div>
    );
  }
}
