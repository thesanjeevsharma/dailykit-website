import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import WhyChoose from "../components/onDemardStorePage/WhyChoose";
import BlueBox from "../components/subscription/BlueBox";
import BannerSection2 from "../components/shared/BannerSection2";
import BannerSection3 from "../components/shared/BannerSection3";
import BannerSection5 from "../components/shared/BannerSection5";
export default class SubscriptionStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <BannerSection3
          subheading={"Why should they have all the fun?"}
          heading={"Get your share of subscription Revenue"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/subscription-banner-2.png"
          }
          blackbuttontext={"Start Now"}
        />

        <BannerSection2
          rightimageurl={
            "https://www.dailykit.org/hubfs/dailykit-assets/marketStandardSubscriptionFlows@2x-1.png"
          }
          heading={"Market Standard Subsription Flows"}
          bluesubheading={"Familiar & Intuitive Signup Process"}
          description="Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          descriptionpoints={[
            "Showcase Subscription Plans in elegant cards",
            "Give your customers option to choose between Item Count, Servings & Delivery Week-Day.",
            "Increase Conversions by funneling Customers to preview menus prior to signing up.",
          ]}
        />

        <BlueBox />
        <BannerSection5
          heading={"Taking Your Store Beyond & Above"}
          description={
            "Incorporate Multiple Instructional or about us pages along with any other information suiting your brand."
          }
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/takingyourStoreAbove%26Beyond@2x.png"
          }
          box1icon={
            "https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/About%20Pages.svg"
          }
          box2icon={
            "https://www.dailykit.org/hubfs/dailykit-assets/subscription-logos/FAQ%20Pages.svg"
          }
          box1title={"About Pages"}
          box2title={"FAQ Pages"}
          box1description={
            "Showcase as much Information you want eg: Chef, Sourcing, etc."
          }
          box2description={
            "Easily Highlight FAQs and How it Work Pages to Your Customers."
          }
        />
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
