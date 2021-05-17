import React, { PureComponent } from "react";

export default class StoreThatSells extends PureComponent {
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
                DailyKIT for Online Ordering
                <br />
                The Only Affordable End-to-End Software Solution Built for Food
                Trends.
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                A Store That Sells
              </h2>

              <div className="justify-content-center">
                <form>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Valid Email Address"
                    style={{
                      width: "20rem",
                      height: "3.29rem",
                      display: "inline",
                      background: "#E6F8FC",
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
                      src="https://www.dailykit.org/hubfs/dailykit-assets/ondemand-hero1.gif"
                      class="d-block w-100"
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
