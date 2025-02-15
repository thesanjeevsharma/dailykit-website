import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import BannerSection6 from "../components/shared/BannerSection6";
import Bluebox3 from "../components/menumanagepage/Bluebox3";
import BannerSection3 from "../components/shared/BannerSection3";
export default class MenuManagementpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <BannerSection3
          text={
            "With our powerful tools at your disposal, menu innovations are just a few clicks away, so be creative and stand-out from the rest."
          }
          heading={"Be An Innovator"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/menu-banner.jpg"
          }
          blackbuttontext={"Start Now"}
        />
        <BannerSection6
          greenbuttontext={"Learn More"}
          buttonlink={"/do-more/Recipe-Provider"}
          heading={"Personalization Done Right"}
          para={[
            "To Eat or To Cook? With DailyKIT you win either way, by offering your customers the choice of Ready-to-Eat or Ready-to-Cook",
            "How Many Servings? You can choose to offer different products with different available servings.",
            "What Sides Would You Like? Configure the specfic sides to offer along with a main product.",
            "How Do You Want It? Offer your customers a choice of different recipes for the main product and sides to cater to your customer’s dietary preferences.",
          ]}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/personalization.gif"
          }
        />{" "}
        <BannerSection6
          greenbuttontext={"Learn More"}
          buttonlink={"/meal-kit-guides/how-to-decide-your-meal-kits"}
          heading={"Give Life To Your Menu"}
          para={[
            "Gone are the days of The Static Menu",
            "With DailyKIT, you can rotate your menu by days & seasons, and offer special menus for special occasions to bring life to your brand, keeping your valued cusomters coming back for more!",
          ]}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/give-life-to-your-menu2.gif"
          }
        />
        <Bluebox3
          heading={"Menu Management vs Menu Engineering"}
          buttonlink={"/"}
          buttontext={"Schedule A Meeting"}
          leftpara={
            "Menu management is a general menu building excercise done periodically and ideally before the start of business each day, where you simply build & discuss your menu, as well as specials and substitutions, rather than getting into the weeds of your customer's demands and desires. Novice businesses often miss out on the importance of menu engineering."
          }
          rightpara={
            "Menu Engineering is Active & Modern Menu Management. Ask yourself: When was the last time you paid detailed attention to your menu and revamped it according to your customer's expectations? With increased competition, providing newer experiences to your customers is necessary to help you stand out and ultimately drive the success you wish for."
          }
        />
        <BannerSection6
          greenbuttontext={"Learn More"}
          buttonlink={"/"}
          heading={"How Intimately Do You Know Your Food Costs?"}
          para={[
            "It’s impossible to optimize business profitablity without having a detailed handle on your Food Costs.",
            "DailyKIT’s Automated Food Cost Tracking gives you all of the data you'll need to help you run a successful and profitable business.",
          ]}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/Food-cost.png"
          }
        />
        <BannerSection6
          greenbuttontext={"Learn More"}
          buttonlink={"/"}
          heading={"Zero In On Product Pricing."}
          para={[
            "No more back-of-the-envelope math. No more calculators and excel sheets. With DailyKIT’s Intelligent Product Pricing, you can easily set target food cost %'s and get a suggested price range that falls within your targeted food cost. With minimal effort and easy decision making, set your menu prices like the experts.",
          ]}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/product-pricing.png"
          }
        />
        <BannerSection6
          greenbuttontext={"Schedule A Meeting"}
          buttonlink={"/"}
          heading={"Automation is the New Mantra."}
          para={[
            "Today Nutritional & Allergen data are one of the most important factors in the consumer’s decision making process.",
            "Unlike other tools, DailyKIT automatically builds a nutrition chart for you.",
          ]}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/menu/automation.png"
          }
          buttontext={"Schedule A Meeting"}
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
