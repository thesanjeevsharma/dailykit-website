import React, { PureComponent } from "react";
import "../../style.css";
import display from "../../assets/display.PNG";

import kitchen from "../../assets/kitchen.PNG";
export default class Bluebox1 extends PureComponent {
  render() {
    return (
      <div
        style={{ background: "#111B2B", textAlign: "center", color: "white" }}
      >
        <div style={{ color: "#111B2B" }}>.</div>
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "50px",
            marginTop: "5rem",
          }}
        >
          {this.props.heading}
        </div>
        <small
          style={{
            color: "#8ac03b",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "6rem",
          }}
          class="nunito"
        >
          {this.props.subheading}
        </small>
        <div class="row justify-content-center mb-4 mt-4">
          <p
            class="col-5"
            style={{ fontSize: "19px", lineHeight: "2rem", textAlign: "right" }}
          >
            {" "}
            <div class="row justify-content-end mb-4 mt-4">
              <div class="col-10" style={{ fontWeight: "bolder" }}>
                {this.props.col1heading}
              </div>
              <div class="col-2">
                <img src={display} alt=".." width="80px" />
              </div>
            </div>
            <div class="row justify-content-end" style={{ textAlign: "right" }}>
              <div class="col-8" style={{ marginBottom: "5rem" }}>
                {this.props.col1para}
              </div>{" "}
            </div>
            {!this.props.learn && (
              <div class="row justify-content-end mt-4">
                <div class="col-3">
                  <div class="card">
                    <div
                      class="card-body imagebox12"
                      style={{
                        height: "10rem",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card">
                    <div
                      class="card-body imagebox13"
                      style={{
                        height: "10rem",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card">
                    <div
                      class="card-body imagebox14"
                      style={{
                        height: "10rem",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            {!this.props.learn && (
              <button
                type="button"
                className="learMore_button2 mt-4 mb-4"
                style={{ marginRight: "120px" }}
              >
                Learn More
              </button>
            )}
          </p>
          <p class="col-1 blackline2"></p>
          <p
            class="col-5"
            style={{ fontSize: "19px", lineHeight: "2rem", textAlign: "right" }}
          >
            {" "}
            <div class="row justify-content-start mb-4 mt-4">
              <div class="col-2 ml-2">
                <img src={kitchen} alt=".." width="90px" />
              </div>

              <div
                class="col-10"
                style={{ fontWeight: "bolder", textAlign: "left" }}
              >
                {this.props.col1heading}
              </div>
            </div>
            <div
              class="row justify-content-start"
              style={{ textAlign: "left" }}
            >
              <div class="col-8" style={{ marginBottom: "5rem" }}>
                {this.props.col2para}
              </div>
              {!this.props.learn && (
                <div class="row justify-content-start mt-4">
                  <div class="col-3">
                    <div class="card">
                      <div
                        class="card-body imagebox15"
                        style={{
                          height: "10rem",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="card">
                      <div
                        class="card-body imagebox16"
                        style={{
                          height: "10rem",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="card">
                      <div
                        class="card-body imagebox17"
                        style={{
                          height: "10rem",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>{" "}
            {!this.props.learn && (
              <button
                type="button"
                className="learMore_button2 mt-4 "
                style={{ marginRight: "15rem" }}
              >
                Learn More
              </button>
            )}
          </p>{" "}
        </div>{" "}
        {this.props.learn && (
          <button type="button" className="learMore_button2 mt-4 mb-4">
            Learn More
          </button>
        )}
      </div>
    );
  }
}
