import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/homepage/ScheduleMeetingSection1";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import IdealProduct from "../components/onDemardStorePage/IdealProduct";
import RealTimeOrderTracking from "../components/onDemardStorePage/RealTimeOrderTracking";
import OwnYourOnline from "../components/onDemardStorePage/OwnYourOnline";
import Showcase from "../components/onDemardStorePage/Showcase";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
export default class OnDemandStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading={"DailyKIT for Online Ordering"}
          heading={"A Store That Sells"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/ondemand-hero1.gif"
          }
        />
        <PopularOrderingExperiences
          subheading={"Familiar & Intuitive"}
          heading={"Popular Ordering Experiences"}
          text={
            "Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          }
          point={[
            "Showcase Multiple Product Types in elegant cards & drawers.",
            "Give your customers option to choose between Now/Later & Pickup/Delivery.",
            "Increase conversions by showcasing categories as Digital Aisle for Smooth Browsing.",
          ]}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/popularOrderingExperiences.gif"
          }
        />
        <IdealProduct />
        <RealTimeOrderTracking />
        <Showcase />
        <OwnYourOnline />
        <WhyChoose />
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
