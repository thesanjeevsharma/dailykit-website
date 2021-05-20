import React, { PureComponent } from "react";

export default class CustomerorOperator extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <div
          style={{
            color: "#90c345",
            fontWeight: "bolder",
            fontSize: "15px",
            marginBottom: "1rem",
            marginTop: "2rem",
            marginLeft: "4rem",
          }}
        >
          Order Tracking
        </div>
        <h2
          style={{
            fontWeight: "400",
            fontSize: "60px",
            marginBottom: "2rem",
            marginLeft: "4rem",
          }}
          className="nunito"
        >
          Customer or Operator? Track Orders the Same Way!
        </h2>
        <div class="row">
          <div class="col-6">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/consumer@2x.png"
              alt="..."
              width="580px"
            />
          </div>
          <div class="col-6">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/operator@2x-1.png"
              alt="..."
              width="580px"
            />
          </div>
        </div>
      </div>
    );
  }
}
