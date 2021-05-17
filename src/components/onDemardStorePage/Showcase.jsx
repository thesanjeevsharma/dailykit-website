import React, { PureComponent } from "react";
import "../../style.css";
export default class Showcase extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "12rem" }}>
          <div class="row justify-content-between">
            <div class="col-6">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Showcase your COVID Safety Measures
              </h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <div class="vl"></div>
                <div style={{ display: "inline" }}>
                  Reassure your customers of their safety using DailyKIT's COVID
                  Safety tools
                </div>
                <div
                  class="row"
                  style={{ marginTop: "2rem", marginLeft: "2rem" }}
                >
                  <ul class="col-6 onDemandCategories">
                    <li>Body-Temp Reports</li>
                    <li>Use of PPE Checklist</li>
                  </ul>
                  <ul class="col-6 onDemandCategories">
                    <li>Safety report on Invoice</li>
                    <li>Cleaning Protocols</li>
                  </ul>
                </div>
              </p>
            </div>{" "}
            <div class="col-6">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/ShowcaseYourCOVIDSafetyMeasures@2x.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>{" "}
        </div>
      </>
    );
  }
}