import React, { PureComponent } from "react";

export default class DeliverExcellence extends PureComponent {
  render() {
    return (
      <div className="container" style={{ marginTop: "12rem" }}>
        <div class="row justify-content-between">
          <div class="col-6">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/Operate-hero@2x.png"
              alt="women"
              style={{ width: "40vw" }}
            />
          </div>
          <div class="col-6" style={{ textAlign: "left" }}>
            <div style={{ fontSize: "18px" }}>
              Trend-Agnostic Supply Platform
            </div>
            <h2 style={{ fontWeight: "bolder", fontSize: "60px" }}>
              Deliver Excellence With DailyOS
            </h2>
            <br />
            <button type="button" class="btn btn-outline-success btn-lg">
              TELL ME MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
