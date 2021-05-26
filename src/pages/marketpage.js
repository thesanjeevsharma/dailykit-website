import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import MarketingMadeEasy from "../components/marketpage/MarketingMadeEasy";
import BuildSmarterCampaigns from "../components/marketpage/BuildSmarterCampaigns";
import InspireCustomers from "../components/marketpage/InspireCustomers";
import CreateRewardingExperiences from "../components/marketpage/CreateRewardingExperiences";
import Yourtryst from "../components/marketpage/Yourtryst";
import KeepthemLoyal from "../components/marketpage/KeepthemLoyal";
import EndToEndFoodBusiness from "../components/marketpage/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
export default class Marketpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <MarketingMadeEasy
          heading={"Marketing Made Easy."}
          subheading={
            "Must have Innovative Marketing tools to help you connect your brand with your customers."
          }
          imageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Marketing%20made%20easy.png"
          }
        />
        <BuildSmarterCampaigns />
        <InspireCustomers />
        <CreateRewardingExperiences />
        <Yourtryst />
        <KeepthemLoyal />
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
