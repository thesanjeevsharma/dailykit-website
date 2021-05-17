import React, { PureComponent } from "react";
import tick from "../../tick.PNG";

export default class EndToEndFoodBusiness extends PureComponent {
  render() {
    return (
      <div
        style={{
          background: "#111B2B",
          color: "white",
        }}
      >
        {" "}
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "23rem",
          }}
        >
          <br />
          An End-To-End Food Business Software Solution Provider
        </p>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            margin: "2rem 0rem 2rem 0rem",
            textAlign: "center",
          }}
          className="nunito text-center"
        >
          You've Never Managed Your Food Business
          <br /> Like This Before
        </h2>
        <form>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Valid Email Address"
            style={{
              width: "30rem",
              height: "3.29rem",
              display: "inline",
              background: "#E6F8FC",
              marginLeft: "20rem",
              marginTop: "2rem",
            }}
          />
          <button
            type="button"
            style={{ fontSize: "14px", width: "150px" }}
            class="btn btn-dark btn-lg p-3 pl-4 pr-4"
          >
            Start Now
          </button>
        </form>
        <div class="row justify-content-center mt-4 mb-4">
          <div class="col-3 p-4">
            <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
            <h6 style={{ display: "inline" }}>Recipe & Menu Engineering</h6>
            <br />
          </div>
          <div class="col-3 p-4">
            <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
            <h6 style={{ display: "inline" }}> Manufacturing Technology</h6>
            <br />
          </div>
          <div class="col-3 p-4">
            <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
            <h6 style={{ display: "inline" }}>Sales & Marketing Platform</h6>
            <br />
          </div>
          <div class="row justify-content-center">
            <div class="col-4 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
              <h6 style={{ display: "inline" }}>
                Delivery & Packaging Integrations
              </h6>
              <br />
            </div>
            <div class="col-3 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />
              <h6 style={{ display: "inline" }}>Inventory Management</h6>
              <br />
            </div>
            <div class="col-2 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />
              <h6 style={{ display: "inline" }}> Analytics</h6>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
