import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import IdealProduct from "../components/onDemardStorePage/IdealProduct";
import BannerSection4 from "../components/shared/BannerSection4";
import BannerSection2 from "../components/shared/BannerSection2";
import BannerSection3 from "../components/shared/BannerSection3";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
export default class OnDemandStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <BannerSection3
          subheading={"DailyKIT for Online Ordering"}
          heading={"A Store That Sells"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/ondemand-hero1.gif"
          }
          blackbuttontext={"Start Now"}
        />
        <BannerSection2
          rightimageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/popularOrderingExperiences.gif"
          }
          heading={"Popular Ordering Experiences"}
          bluesubheading={"Familiar & Intuitive"}
          description="Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          descriptionpoints={[
            "Showcase Multiple Product Types in elegant cards & drawers.",
            "Give your customers option to choose between Now/Later & Pickup/Delivery.",
            "Increase conversions by showcasing categories as Digital Aisle for Smooth Browsing.",
          ]}
        />

        <IdealProduct />
        <BannerSection4
          heading={"Real-Time Order Tracking"}
          description={
            "Cater to consumer habits of tracking order lifecycle from Kitchen to Delivery leading to higher retention."
          }
          points={[
            ["Kitchen Order Status", "Delivery Personnel Info"],
            ["ETA & Map Tracking", "Review & Rating"],
          ]}
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/Real-TimeOrderTracking@2x.png"
          }
        />
        <BannerSection4
          heading={"Showcase your COVID Safety Measures"}
          description={
            "Reassure your customers of their safety using DailyKIT's COVID Safety tools"
          }
          points={[
            ["Body-Temp Reports", "Safety report on Invoice"],
            ["Use of PPE Checklist", "Cleaning Protocols"],
          ]}
          rightimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/ShowcaseYourCOVIDSafetyMeasures@2x.png"
          }
        />
        <BannerSection4
          heading={"Own Your Online Store Completely"}
          bluesubheading={"Don't Compromise"}
          description={
            "In the modern digital world, owning your web presence is a MUST."
          }
          points={[
            ["Your Own Domain", "Themes & Brand Colors"],
            ["iOS & Android Apps", "Custom Brand Pages"],
          ]}
          leftimage={
            "https://www.dailykit.org/hubfs/dailykit-assets/own-store/Themes%20and%20brand%20colors.png"
          }
          blackbuttontext={"TELL ME MORE"}
          buttonlink={"/"}
        />
        <WhyChoose
          heading={"Why Choose DailyKIT"}
          subpara={
            "Are You Using A Plain Old Micro-Site For Online Ordering Or Worse, Do You Not Have An Online Store? It’s Vital To The Success Of Your Business To Have A Professional Looking Onine Store."
          }
          buttontext={"Schedule A Demo"}
          buttonlink={"/"}
        />
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
