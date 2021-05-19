import React, { PureComponent } from "react";

export default class Makethejuice extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-6">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bolder",
                }}
              >
                One-Stop Shop
                <br />
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Make The Juice Worth The Squeeze
              </h2>
              <div class="row">
                <div
                  class="col-2 vl"
                  style={{ marginRight: "-70px", paddingRight: "-12px" }}
                ></div>
                <div class="col-10">
                  Blend Best Business Practices To Help Your Food Business
                  Maximize Sustainability & Growth
                </div>
              </div>
              <div className="justify-content-center mt-4">
                <button type="button" className="weserve_button1">
                  Schedule A Call
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="weserve_button2">
                  Learn More
                </button>
              </div>
              <div class="row" style={{ paddingTop: "1rem" }}>
                <div class="col-3">
                  {" "}
                  <img
                    src="https://www.dailykit.org/hubfs/osaas/images/icons/chat-icon.png"
                    alt=""
                    style={{ paddingTop: "2rem", width: "110px" }}
                  />
                </div>
                <div class="col-5" style={{ paddingTop: "2rem" }}>
                  <small>Minimum Added Revenue</small>
                  <h4 style={{ color: "#8ac03b", fontWeight: "bolder" }}>
                    $100000
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-6">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/Lob-hero@2x.png"
                alt="..."
                style={{ width: "37rem", marginTop: "-15rem" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
