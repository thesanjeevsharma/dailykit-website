import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
// import StoreThatSells from "../components/onDemardStorePage/StoreThatSells";
// import PopularOrderingExperiences from "../components/onDemardStorePage/PopularOrderingExperiences";
// import IdealProduct from "../components/onDemardStorePage/IdealProduct";
import RealTimeOrderTracking from "../components/onDemardStorePage/RealTimeOrderTracking";
import OwnYourOnline from "../components/onDemardStorePage/OwnYourOnline";
import Showcase from "../components/onDemardStorePage/Showcase";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
export default class Marketpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <RealTimeOrderTracking />
        <Showcase />
        <OwnYourOnline />
        <WhyChoose />
        <ScheduleMeeting />
        <Footer />
      </div>
    );
  }
}
