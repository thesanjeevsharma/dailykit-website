import React, { PureComponent } from "react";
import "../../style.css";
export default class PricingSection1 extends PureComponent {
  render() {
    return (
      <div className="nunito pricingsection1">
        <h6 className="price-heading">Our Pricing</h6>
        <div class="container">
          <div class="row justify-content-center">
            {this.props.offers.map((offer) => {
              return (
                <div class="col-md-6 col-xs-10">
                  <div class="card pricing-box">
                    <div class="card-body">
                      <h4 class="card-subtitle">{offer.name}</h4>
                      <h1 class="card-title">{offer.price}</h1>
                      <h4 class="card-subtitle">{offer.feature1}</h4>
                      <h4 class="card-subtitle">{offer.feature2}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="justify-content-center">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                fontFamily: "'Nunito', sans-serif",
                letterSpacing: "1.5px",
                textAlign: "center",
                margin: "4rem 0rem 0.7rem 0rem",
                color: "#113D63",
              }}
            >
              Sign up Now
            </h1>
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                fontFamily: "'Nunito', sans-serif",
                letterSpacing: "1.5px",
                textAlign: "center",
                margin: "0rem 0rem 2rem 0rem",
                color: "#113D63",
              }}
            >
              To start now, get in touch
            </h1>
            <form>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Valid Email Address"
              />
              <button
                type="button"
                style={{
                  fontSize: "14px",
                  width: "150px",
                  marginTop: "2rem",
                }}
                class="btn btn-dark btn-lg p-3 pl-4 pr-4"
              >
                Start Now
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
