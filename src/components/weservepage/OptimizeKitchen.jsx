import React, { PureComponent } from "react";
import "../../style.css";
export default class OptimizeKitchen extends PureComponent {
  render() {
    return (
      <div>
        <div className="container_weserve">
          <div className="sideBar_left">
            <h6>For Restaurants</h6>
            <h1>
              Optimize Kitchen Workflows <br /> &amp; Juice New Sales Channels.
            </h1>
            <h5>
              An Innovative Omni-Channel Solution That
              <br /> Monetizes Food Trends with End-To-End Kitchen
              <br /> Workflows & Operations Management Software
            </h5>
            <button type="button" className="weserve_button1">
              Schedule A Call
            </button>
            <button type="button" className="weserve_button2">
              Learn More
            </button>
            <img
              className="weserve_img"
              src="https://www.dailykit.org/hubfs/dailykit-assets/restaurant-chef-fold@2x.png"
            />
          </div>
          <div className="sideBar_right"></div>
        </div>
      </div>
    );
  }
}
