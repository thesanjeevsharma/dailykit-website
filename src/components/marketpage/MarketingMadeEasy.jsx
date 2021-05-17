import React, { PureComponent } from "react";
import "../../style.css";
export default class MarketingMadeEasy extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-6">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                <br />
                Must have Innovative Marketing tools to help you connect your
                brand with your customers.
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Marketing Made Easy.
              </h2>

              <div className="justify-content-center">
                <button type="button" class="btn btn-dark">
                  Get Started Now
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-light">
                  Free Demo
                </button>
              </div>
            </div>
            <div class="col-6">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Marketing%20made%20easy.png"
                      class="d-block w-80"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
