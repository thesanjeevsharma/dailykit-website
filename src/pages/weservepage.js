import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import Makethejuice from "../components/weservepage/Makethejuice";
import Weserve from "../components/weservepage/Weserve";
import OptimizeKitchen from "../components/weservepage/OptimizeKitchen";
import AnERP from "../components/weservepage/AnERP";
import BannerSection10 from "../components/shared/BannerSection10";
export default class Weservepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <Makethejuice />
        <Weserve />
        <OptimizeKitchen />
        <BannerSection10
          subheading={"For Supermarkets"}
          heading={"Meet Rapidly Evolving Consumer Needs With Ease"}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/supermarket@2x.png"
          }
          para={
            "Online Grocery Sales Hit A Record $7.2 BN in 2020 & That Is Just Scratching The Surface."
          }
          list1={["Grow Top-Line Revenue", "Mulitply Brand Awareness"]}
          list2={[
            "Increase Bottom-Line Profits",

            "Mitigate Risk & Achieve Sustainability",
          ]}
          id="supermarkets"
        />
        <BannerSection10
          subheading={"For Cloud Kitchens"}
          heading={"Built For Cloud Kitchen Operations"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/Cloudkitchen@2x.png"
          }
          para={
            "Cloud Kitchens rely heavily on technology to help run their brands. DailyKIT’s ability to take any kitchen to cloud will help bring life into your Ghost Kitchen brands."
          }
          list1={["Incorporate Trending Sales Channels", "Optimize Operations"]}
          list2={["Multiple Brands - One Solution", "Built for The Future"]}
          id="restaurants"
        />
        <AnERP />

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
