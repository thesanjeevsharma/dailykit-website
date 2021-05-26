import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import MarketingMadeEasy from "../components/marketpage/MarketingMadeEasy";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import ImageBox from "../components/orderpage/ImageBox";
import BelowImageBox from "../components/orderpage/BelowImageBox";
import CustomerorOperator from "../components/orderpage/CustomerorOperator";
import BannerSection7 from "../components/shared/BannerSection7";
import BannerSection8 from "../components/shared/BannerSection8";
export default class Orderfulfillmentpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <MarketingMadeEasy
          heading={"Set Your Own Delivery Terms"}
          subheading={"Flexible Order Fulfillment"}
          imageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/order-fulfilment-hero@2x.png"
          }
        />

        <ImageBox />
        <BelowImageBox />
        <CustomerorOperator />
        <BannerSection8
          heading={"Seamless Order Fulfillment"}
          subheading={""}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/ondemand-delivery.png"
          }
          para={[
            "We understand the nuances of pick-up & delivery. With DailyKIT easily configure precise mile ranges, order value limits, custom delivery charges, as well as days and times at which you deliver or pickup.",
            "Whether 3rd-Party or in-house, once configured, DailyKIT's rule-based & automatic pick-up and delivery assignment is a breeze.",
          ]}
        />

        <BannerSection8
          heading={"Schedule Weekly Shipments with Ease"}
          subheading={"Subscription Delivery"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/subscription-delivery.png"
          }
          para={[
            "Operate subscription deliveries from your fingertips. Select delivery days & zip codes, along with with custom delivery prices.DailyKIT takes care of your scheduled & recurring deliveries by assigning the right delivery partner beforehand, ensuring on-time delivery every time.",
          ]}
        />
        <BannerSection7
          heading={"Delivery and Pickup Insights"}
          list={[
            "Pickup Insights",
            "Self-Delivery Reports",
            "Delivery Partner Ananlytics",
          ]}
          image={["imagebox8", "imagebox9", "imagebox10"]}
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
