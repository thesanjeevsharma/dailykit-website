import React, { PureComponent } from "react";
import "../../style.css";
export default class WhyChoose extends PureComponent {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10.3rem",
          marginBottom: "1.2rem",
        }}
      >
        {this.props.heading && (
          <h1 className="nunito blueboxHeading" style={{ color: "#111b2b" }}>
            {this.props.heading}
          </h1>
        )}
        {this.props.subpara && <p class="why_choose">{this.props.subpara}</p>}
        {/* categories */}
        <div class="container" style={{ textAlign: "left" }}>
          <div class="row justify-content-center">
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/unlimited-categories.png"
                style={{ width: "30px" }}
              />
              <h5> Unlimited Categories</h5>
              <br />
              <small>Manage multiple categories for easy browsing.</small>
            </div>
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/seo-friendly.png"
                style={{ width: "30px" }}
              />{" "}
              <h5>SEO-Friendly Pages</h5>
              <br />
              <small>URL-based pages for Products & Categories.</small>
            </div>
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/product-tags.png"
                style={{ width: "30px" }}
              />{" "}
              <h5> Product Tags</h5>
              <br />
              <small>
                Tag your products for easy filtering and discoverability.
              </small>
            </div>
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/product-images.png"
                style={{ width: "30px" }}
              />{" "}
              <h5>Product Images</h5>
              <br />
              <small>
                Display Amazing Product Pictures for Higher Conversion.
              </small>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/product-description.png"
                style={{ width: "30px" }}
              />
              <h5>Product Description</h5>
              <br />
              <small>Convert more via enticing product descriptions.</small>
            </div>
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/social-media-share.png"
                style={{ width: "30px" }}
              />
              <h5>Social Media Sharimg</h5>
              <br />
              <small>
                Integrated Social Media sharing functionality on every product
                page.
              </small>
            </div>
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/desktop-friendly.png"
                style={{ width: "30px" }}
              />
              <h5>Desktop Friendly</h5>
              <br />
              <small>
                Don't miss out on the 20% of consumers ordering food through
                their laptops/desktops.
              </small>
            </div>
            <div class="col-md-3 col-xs-10 p-4 column">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/mobile-friendly.png"
                style={{ width: "30px" }}
              />
              <h5>Mobile & Tab Friendly</h5>
              <br />
              <small>
                Perfect experience through any browser app or in-app browsers.
              </small>
            </div>
          </div>
        </div>
        <a href={this.props.buttonlink}>
          <button type="button" class="btn-style-thirteen green">
            {this.props.buttontext}
          </button>
        </a>

        {/* second_categories */}

        <div
          style={{
            background: "#111b2b",
            color: "white",
            marginTop: "6rem",
          }}
        >
          <div class="container whychoose-container2">
            <div class="row justify-content-evenly">
              <div class="col-md-3 col-xs-10 p-4 column2">
                <img
                  alt="icon"
                  src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Advance%20Scheduling.svg"
                  style={{ width: "30px" }}
                />{" "}
                <h5 style={{ display: "inline" }}>Advanced Scheduling</h5>
                <br />
                <small>
                  BreakFast, Lunch, Dinner or Daily/Weekly Recurring, Festive
                  Menus.
                </small>
              </div>
              <div class="col-md-3 col-xs-10 p-4 column2">
                <img
                  alt="icon"
                  src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Margins.svg"
                  style={{ width: "30px" }}
                />{" "}
                <h5 style={{ display: "inline" }}> Know your Margins</h5>
                <br />
                <small>
                  Control your food cost with Sales Price Recommendations.
                </small>
              </div>
              <div class="col-md-3 col-xs-10 p-4 column2">
                <img
                  alt="icon"
                  src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Precise%20Configuration.svg"
                  style={{ width: "30px" }}
                />{" "}
                <h5 style={{ display: "inline" }}>Precise Configuration</h5>
                <br />
                <small>
                  Configure Inventory, Packaging and Product Labels.
                </small>
              </div>
            </div>
            <div class="row justify-content-evenly">
              <div class="col-md-3 col-xs-10 p-4 column2">
                <img
                  alt="icon"
                  src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Smart%20Insights.svg"
                  style={{ width: "30px" }}
                />{" "}
                <h5 style={{ display: "inline" }}>Smart Insights</h5>
                <br />
                <small>Automated Sales Reports with conversion details.</small>
              </div>
              <div class="col-md-3 col-xs-10 p-4 column2">
                <img
                  alt="icon"
                  src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Discounts%20%26%20Coupons.svg"
                  style={{ width: "30px" }}
                />
                <h5 style={{ display: "inline" }}>Discounts & Coupons</h5>
                <br />
                <small>Create Smart Rewards, Vouchers and more from CRM</small>
              </div>
              <div class="col-md-3 col-xs-10 p-4 column2">
                <img
                  alt="icon"
                  src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Delivery%20Integrations.svg"
                  style={{ width: "30px" }}
                />
                <h5 style={{ display: "inline" }}> Delivery Integrations</h5>
                <br />
                <small>
                  Supporting Selected Delivery Partners in your Area.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
