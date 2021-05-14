import React, { PureComponent } from "react";
import "../../style.css";
export default class SellEverythingWithEveryWARE extends PureComponent {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "12rem", textAlign: "center" }}
      >
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="row justify-content-around">
              <div
                class="col-5 justify-content-around"
                style={{ background: "#F4F9FF", borderRadius: "5%" }}
              >
                <div
                  style={{
                    color: "#1374f6",
                    fontWeight: "bolder",
                    fontSize: "12px",
                    marginBottom: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  Product Presentation
                </div>
                <h4>Trending & Customizeable</h4>
                <br />

                <img
                  src="https://www.dailykit.org/hubfs/dailykit-assets/trending@2x.png"
                  style={{ width: "10rem", marginBottom: "2rem" }}
                  alt="trending"
                />
              </div>
              <div
                class="col-5 justify-content-center"
                style={{ background: "#FFF4FA", borderRadius: "5%" }}
              >
                <br />
                <img
                  src="https://www.dailykit.org/hubfs/dailykit-assets/trending@2x.png"
                  style={{ width: "10rem", marginBottom: "2rem" }}
                  alt="trending2"
                />{" "}
                <div
                  style={{
                    color: "#ff8c8c",
                    fontWeight: "bolder",
                    fontSize: "12px",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  Add Combos
                </div>
                <h4>Add Accompaniments</h4>
              </div>
            </div>
          </div>
          <div class="col-6" style={{ textAlign: "left" }}>
            <div class="title">Trend-Responsive Demand Platform</div>
            <h2 style={{ fontWeight: "bolder", fontSize: "60px" }}>
              Sell Everything With EveryWARE
            </h2>
            <br />
            <button type="button" class="btn btn-outline-success btn-lg">
              TELL ME MORE
            </button>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-6 accompaniments_image">
            <div style={{ height: "13rem" }} />
          </div>
        </div>
      </div>
    );
  }
}
