import React, { PureComponent } from "react";
import "../../style.css";
export default class Insights extends PureComponent {
  render() {
    return (
      <>
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bolder",
            marginTop: "12rem",
            marginLeft: "5.5rem",
          }}
        >
          -Insights
        </h6>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3.5rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
            marginLeft: "5.5rem",
            marginTop: "2rem",
            marginBottom: "4rem",
            display: "inline",
          }}
        >
          Daily Order Reporting & Analytics
        </h1>
        &nbsp;&nbsp;
        <button type="button" className="learn">
          Learn More
        </button>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="card redhover">
                <div
                  class="card-body imagebox5"
                  style={{
                    height: "14rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn  pl-4 pr-4"
                    style={{
                      backgroundColor: "#FA4B4B",
                      color: "white",
                      width: "250px",
                      fontWeight: "bold",
                      border: "0 2px 0 2px green",
                      marginTop: "-5rem",
                      marginLeft: "2rem",
                    }}
                  >
                    SuperMarkets
                  </a>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div
                  class="card-body imagebox6"
                  style={{
                    height: "14rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn  pl-4 pr-4"
                    style={{
                      backgroundColor: "#FA4B4B",
                      color: "white",
                      width: "250px",
                      fontWeight: "bold",
                      border: "0 2px 0 2px green",
                      marginTop: "-5rem",
                      marginLeft: "2rem",
                    }}
                  >
                    Cloud Kitchens
                  </a>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card redhover">
                <div
                  class="card-body imagebox7"
                  style={{
                    height: "14rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn pl-4 pr-4"
                    style={{
                      backgroundColor: "#FA4B4B",
                      color: "white",
                      width: "250px",
                      fontWeight: "bold",
                      border: "0 2px 0 2px green",
                      marginTop: "-5rem",
                      marginLeft: "2rem",
                    }}
                  >
                    Enterprise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
