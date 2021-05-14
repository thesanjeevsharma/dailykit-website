import React, { PureComponent } from "react";
import "../../style.css";
export default class OurPricing extends PureComponent {
  render() {
    return (
      <div>
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bold",
            paddingTop: "7rem",
            textAlign: "center",
          }}
        >
          Our Pricing
        </h6>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
          </div>
        </div>
      </div>
    );
  }
}
