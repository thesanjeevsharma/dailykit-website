import React, { PureComponent } from "react";
import "../../style.css";
export default class ImageBox extends PureComponent {
  render() {
    return (
      <>
        {" "}
        <div
          style={{
            color: "#90C345",
            fontWeight: "bolder",
            fontSize: "15px",
            marginBottom: "1rem",
            marginTop: "2rem",
            marginLeft: "4rem",
          }}
        >
          Order Fulfillment
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
          What Do You Need?
          <br />
          Pick-Up? Delivery? Both?
        </h2>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-6">
              <div class="card">
                <div
                  class="card-body imagebox19"
                  style={{
                    height: "23rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></div>
                <a
                  href="#"
                  class="btn btn-dark pt-4 pb-4"
                  style={{
                    fontSize: "25px",
                    marginTop: "-5rem",
                    width: "30rem",
                    marginLeft: "2rem",
                  }}
                >
                  <h4 class="card-title nunito">PICK-UP</h4>
                  <p class="card-text nunito" style={{ fontSize: "16px" }}>
                    Set Pickup Time Range Daily, Weekly, Monthly, etc. Ensure
                    Contactless Pickup
                  </p>
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div
                  class="card-body imagebox20"
                  style={{
                    height: "23rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></div>
                <a
                  href="#"
                  class="btn btn-dark  pt-4 pb-4"
                  style={{
                    fontSize: "25px",
                    marginTop: "-5rem",
                    width: "30rem",
                    marginLeft: "2rem",
                    border: "0 2px 0 2px green",
                  }}
                >
                  <h4 class="card-title nunito">DELIVERY</h4>
                  <p class="card-text nunito" style={{ fontSize: "16px" }}>
                    Opt for Self-Delivery or Partner with a 3rd-Party Set
                    Multiple Delivery Choices Based on: Day, Delivery Range,
                    Cost, etc..
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}