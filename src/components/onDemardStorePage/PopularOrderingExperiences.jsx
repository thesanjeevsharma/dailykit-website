import React, { PureComponent } from "react";
import "../../style.css";
export default class PopularOrderingExperiences extends PureComponent {
  render() {
    return (
      <div class="container" style={{ marginTop: "15rem" }}>
        <div class="row justify-content-center">
          <div class="col-6">
            <div
              style={{
                color: "#1374f6",
                fontWeight: "bolder",
                fontSize: "15px",
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              Familiar & Intuitive
            </div>
            <h2
              style={{
                fontWeight: "400",
                fontSize: "60px",
                marginBottom: "2rem",
              }}
              className="nunito"
            >
              Popular Ordering Experiences
            </h2>
            <p
              style={{
                fontSize: "23px",
              }}
            >
              Customer Experience shouldn't be an expense. DailyKIT offers
              turnkey solutions for higher conversions.
            </p>

            <ul
              className="onDemandCategories"
              style={{
                fontSize: "19px",
                marginTop: "2rem",
              }}
            >
              <li>
                Showcase Multiple Product Types in
                <b> elegant cards & drawers.</b>
              </li>
              <li>
                Give your customers option to choose between
                <b> Now/Later & Pickup/Delivery.</b>
              </li>
              <li>
                Increase conversions by showcasing categories as
                <b> Digital Aisle for Smooth Browsing.</b>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/popularOrderingExperiences.gif"
              alt="image-gif"
              style={{ width: "35rem" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
