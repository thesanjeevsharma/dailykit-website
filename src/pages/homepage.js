import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import VideoBanner from "../components/homepage/VideoBanners";
import ImageBox1 from "../components/homepage/ImageBox1";
import StartRunGrow from "../components/homepage/StartRunGrow";
import OurPricing from "../components/homepage/OurPricing";
import ScheduleMeeting from "../components/homepage/ScheduleMeeting";
import BannerSection1 from "../components/homepage/BannerSection1";
import BannerSection2 from "../components/homepage/BannerSection2";
import Categoriessection from "../components/homepage/Categoriessection";
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
        <BannerSection1
          boximage1subheading="Product Presentation"
          boximage1heading="Trend-Responsive Demand Platform"
          boximage1url="https://www.dailykit.org/hubfs/dailykit-assets/trending@2x.png"
          boximage2subheading="Add Combos"
          boximage2heading="Add Accompaniments"
          boximage2url="https://www.dailykit.org/hubfs/dailykit-assets/slidertrending@2x.png"
          heading={"Sell Everything With EveryWARE"}
          subheading={"Trend-Responsive Demand Platform"}
          buttontext={"TELL ME MORE"}
        />
        <Categoriessection
          list={[
            [
              "On-Demand Online Store",
              "Online Subscription Store",
              "Unlimited Ghost Brands",
              "iOS & Android Apps(Upon Request)",
            ],
            [
              "Marketplace Integrations(Coming Soon)",
              "Your Own Custom Domain",
              "Custom Brand Pages",
              "Easy Payment & Checkout Experiences",
            ],
            [
              "Combo Products",
              "Build Your Own Meal",
              "Modifiers",
              "Sort, Filter & Search",
            ],
            [
              "Nutrition & Allergens",
              "Product Recommendations",
              "Recipe Pages",
              "Order & Delivery Tracking",
            ],
          ]}
        />
        <BannerSection2
          rightimagecarousel={[
            "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Coupons.png",
            "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Referral%20Campaigns.png",
            "https://www.dailykit.org/hubfs/dailykit-assets/homepage/Points.png",
          ]}
          heading={"Gamify Your Marketing"}
          bluesubheading={"DailyKIT Marketing Hub"}
          greenbuttontext={"TELL ME MORE"}
          description="Let Your Imaginations Run Wild. Convert More with Advanced, Multi-Conditional Discounting Tools ."
          descriptionpoints={[
            "Create Smart Coupons that actually appeal to your consumers.",
            "Build exciting Referral Campaigns for your brand's Viral Growth.",
            "Loyalty Points, Wallet Money and more for Increased Customer Retention",
          ]}
        />

        <Categoriessection
          list={[
            [
              "Custom Advanced Coupons",
              "Coupon-based Cashback",
              "Coupon-based Loyalty Points",
            ],
            [
              "Signup Offer Campaigns",
              "Referral Marketing Campaigns",
              "Post-Order Loyalty Points Wallet Cashback",
            ],
            [
              "Automated Social Media Collateral(Coming Soon)",
              "Automated Recipe Cards",
              "SEO - Friendly Product Pages",
            ],
          ]}
        />
        <BannerSection2
          leftimageurl="https://www.dailykit.org/hubfs/dailykit-assets/Operate-hero@2x.png"
          heading={"Deliver Excellence With DailyOS"}
          subheading={"Trend-Agnostic Supply Platform"}
          greenbuttontext={"TELL ME MORE"}
        />
        <Categoriessection
          list={[
            [
              "Centralized Order Management",
              "KOT & Kitchen Display Systems",
              "Supplier, Inventory & Mise-en-Place Management",
            ],
            [
              "Third-Party Delivery Integrations",
              "Check-Weighing-based Portion Control",
              "QR Scan-based Assembly Flows",
            ],
            [
              "Order Routing Between Kitchen Stations",
              "Work-Orders for Shift Planning",
              "Planned/Batch Production Mode",
            ],
            [
              "Standard Operating Procedures",
              "Hardware (Label & Receipt Printers, Weighing Scales)",
              "Product & Ingredient Label Printing",
            ],
          ]}
        />
        <StartRunGrow />
        <OurPricing />
        <BannerSection2
          rightimageurl="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Reseller.png"
          heading={"Partner with DailyKIT."}
          subheading={"Are You A Reseller?"}
          descriptiontype2={
            "We offer very attractive incentives to anyone who wishes to Resellour platform to prospective clients anywhere in the world Click on the button below to talk to us about this opputunity."
          }
          blackbuttontext={"Schedule A meeting"}
        />

        <ScheduleMeeting />

        <Footer />
      </div>
    );
  }
}
