import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/homepage/ScheduleMeetingSection1";
import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
import OwnYourOnline from "../components/onDemardStorePage/OwnYourOnline";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
import TakingYourStore from "../components/subscription/TakingYourStore";
import BlueBox from "../components/subscription/BlueBox";
export default class SubscriptionStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <StoreThatSells
          subheading="Why should they have all the fun?"
          heading="Get your share of subscription Revenue"
          image="https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/subscription-banner-2.png"
        />
        <PopularOrderingExperiences
          subheading={"Familiar & Intuitive Signup Process"}
          heading={"Market Standard Subsription Flows"}
          text={
            "Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          }
          point={[
            "Showcase Subscription Plans in elegant cards",
            "Give your customers option to choose between Item Count, Servings & Delivery Week-Day.",
            "Increase Conversions by funneling Customers to preview menus prior to signing up.",
          ]}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketStandardSubscriptionFlows@2x-1.png"
          }
        />
        <BlueBox />
        <TakingYourStore />
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
