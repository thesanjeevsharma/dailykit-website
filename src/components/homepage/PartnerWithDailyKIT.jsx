import React, { PureComponent } from "react";

export default class PartnerWithDailyKIT extends PureComponent {
  render() {
    return (
      <div className="container" style={{ marginTop: "12rem" }}>
        <div class="row justify-content-between">
          <div class="col-6" style={{ textAlign: "left" }}>
            <div style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Are You A Reseller?
            </div>
            <h2 style={{ fontWeight: "bolder", fontSize: "60px" }}>
              Partner with DailyKIT.
            </h2>
            <br />
            <p style={{ fontWeight: "400", fontSize: "18px" }}>
              We <b>offer very attractive</b> incentives to anyone who wishes to{" "}
              <b>Resell</b>
              our platform to prospective clients anywhere in the world{" "}
              <b>Click on the button</b> below to talk to us about this
              opputunity.
            </p>
            <button
              type="button"
              class="btn btn-dark btn-lg p-4"
              style={{ fontSize: "15px", marginTop: "2rem" }}
            >
              Schedula A Meeting
            </button>
          </div>
          <div class="col-6">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Reseller.png"
              alt="women"
              style={{ width: "45vw" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
