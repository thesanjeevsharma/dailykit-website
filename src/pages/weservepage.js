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
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
export default class Weservepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <MarketingMadeEasy />
        <BuildSmarterCampaigns />
        <InspireCustomers />
        <CreateRewardingExperiences />
        <Yourtryst />
        <KeepthemLoyal />
        <EndToEndFoodBusiness />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
