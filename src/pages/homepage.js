import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import VideoBanner from "../components/homepage/VideoBanners";
import ImageBox1 from "../components/homepage/ImageBox1";
import SellEverythingWithEveryWARE from "../components/homepage/SellEverythingWithEveryWARE";
import OnDemandCategories from "../components/homepage/OnDemandCategories";
import CustomAdvancedCoupons from "../components/homepage/CustomAdvancedCoupons";
import GamifyYourMarketing from "../components/homepage/GamifyYourMarketing";
import DeliverExcellence from "../components/homepage/DeliverExcellence";
import List from "../components/homepage/List";
import StartRunGrow from "../components/homepage/StartRunGrow";
import OurPricing from "../components/homepage/OurPricing";
import PartnerWithDailyKIT from "../components/homepage/PartnerWithDailyKIT";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <VideoBanner
          heading1text={"Time to EVOLVE with"}
          heading2text={"DailyKIT"}
          subheadingtext={
            "The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          }
          toggletextarr={[
            "Increase Bottom-Line Margin",
            "Grow Top-Line Revenue",
            "Mitigate Risk and Achieve Sustainability",
          ]}
          whitebuttontext={"Schedule Demo"}
          purplebuttontext={"Start Now With A 3-Month Trial"}
          offertext={"Available for a Limited Time Only"}
        />

        <ImageBox1
          Heading1text={"Built For Food Businesses"}
          SubHeading1text={
            "Whether You Are A Start-Up Or An Existing Food Business, We've Got You Covered."
          }
          imagetext1={"Restaurants"}
          imagetext2={"Supermarkets"}
          image1url={
            "https://www.dailykit.org/hubfs/dailykit-assets/Serve-restaurant@2x.png"
          }
          image2url={
            "https://www.dailykit.org/hubfs/dailykit-assets/Serve-supermarket@2x.png"
          }
        />
        <SellEverythingWithEveryWARE />
        <OnDemandCategories />
        <GamifyYourMarketing />
        <CustomAdvancedCoupons />
        <DeliverExcellence />
        <List />
        <StartRunGrow />
        <OurPricing />
        <PartnerWithDailyKIT />

        <ScheduleMeeting />

        <Footer />
      </div>
    );
  }
}
