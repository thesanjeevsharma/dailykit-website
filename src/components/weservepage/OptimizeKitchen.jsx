import React, { PureComponent } from "react";
import dollar from "../../assets/dollar-cycle.svg";
import map from "../../assets/map.svg";
import link from "../../assets/link.svg";
import photos from "../../assets/photos.svg";
import "../../style.css";
export default class OptimizeKitchen extends PureComponent {
  render() {
    return (
      <div>
        <div className="container container_weserve">
          <div className="sideBar_left">
            <h6>For Restaurants</h6>
            <h2
              className="nunito blueboxHeading"
              style={{ color: "#fefdfc", marginTop: "-112px" }}
            >
              Optimize Kitchen Workflows <br /> &amp; Juice New Sales Channels.
            </h2>

            <h5>
              An Innovative Omni-Channel Solution That
              <br /> Monetizes Food Trends with End-To-End Kitchen
              <br /> Workflows & Operations Management Software
            </h5>
            <button type="button" className="weserve_button1">
              Schedule A Call
            </button>
            <button type="button" className="weserve_button2">
              Learn More
            </button>
            <img
              className="weserve_img"
              src="https://www.dailykit.org/hubfs/dailykit-assets/restaurant-chef-fold@2x.png"
              alt="..."
            />
          </div>
          <div className="sideBar_right">
            <div
              class="container"
              style={{
                marginTop: "6rem",
                padding: "2rem 0rem 6rem 0rem",
                color: "white",
                textAlign: "center",
              }}
            >
              <div class="row justify-content-evenly mb-4">
                <div class="col-md-4 col-xs-8 p-4 column3 justify-content-center">
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                    }}
                    class="nunito"
                  >
                    Trending Sales Channels
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                    }}
                  >
                    Leverage Trending Product Lines & Sales Channels such as
                    On-Demand, Ready To Eat, Meal Kits, Meal Prep..Etc To
                    Capture Maxmium Revenue.
                  </p>
                  <img
                    alt="icon"
                    src={link}
                    style={{
                      width: "90px",
                      display: "block",
                      margin: "2rem 40% 2rem 30%",
                    }}
                  />
                </div>
                <div class="col-md-4 col-xs-8 p-4 column3 justify-content-center">
                  {" "}
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                    }}
                    class="nunito"
                  >
                    Standardized Kitchen Workflows
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                    }}
                  >
                    Increase Kitchen Productivity & Reduce Labor Dependency
                    Through DailyKIT's Automated SOPs That Are Built Around Your
                    Existing BOH Workflows.
                  </p>
                  <img
                    alt="icon"
                    src={map}
                    style={{
                      width: "90px",
                      display: "block",
                      margin: "2rem 40% 2rem 30%",
                    }}
                  />
                </div>

                <div class="row justify-content-evenly mt-8">
                  <div class="col-md-4 col-xs-8 p-4 column3 justify-content-center">
                    {" "}
                    <h5
                      style={{
                        display: "inline",
                        fontWeight: "bolder",
                      }}
                      class="nunito"
                    >
                      Built For Scale
                    </h5>
                    <br />
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "2rem",
                      }}
                    >
                      Whether You Operate A Single Location or Multiple
                      Locations, A Regional or National Chain, The DailyKIT
                      Platform Will Work For You.
                    </p>
                    <img
                      alt="icon"
                      src={photos}
                      style={{
                        width: "90px",
                        display: "block",
                        margin: "2rem 40% 1.5rem 30%",
                      }}
                    />
                  </div>
                  <div class="col-md-4 col-xs-8 p-4 column3 justify-content-center">
                    <h5
                      style={{
                        display: "inline",
                        fontWeight: "bolder",
                      }}
                      class="nunito"
                    >
                      Mitigate Risks & Achieve Stability
                    </h5>
                    <br />
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "2rem",
                      }}
                    >
                      Reduce dependence on uncertain scenarios like labor,
                      environmental crisis, pandemic or any unforeseen
                      circumstances. DailyKIT acts like the digital copy of your
                      food business that you can turn it on and off at will.
                    </p>
                    <img
                      alt="icon"
                      src={dollar}
                      style={{
                        width: "90px",
                        display: "block",
                        margin: "2rem 40% 2rem 30%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
