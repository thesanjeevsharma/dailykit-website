import React, { PureComponent } from "react";
import "../../style.css";

export default class Weserve extends PureComponent {
  render() {
    return (
      <>
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          DailyKIT Does It All
        </h6>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3.5rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          We Serve
        </h1>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-3">
              <div class="card">
                <div
                  class="card-body imagebox1"
                  style={{
                    height: "10rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn btn-dark p-4"
                    style={{
                      fontSize: "19px",
                      marginTop: "5rem",
                      marginLeft: "2em",
                    }}
                  >
                    Restaurants
                  </a>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div
                  class="card-body imagebox2"
                  style={{
                    height: "10rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn btn-dark  p-4"
                    style={{
                      fontSize: "19px",
                      border: "0 2px 0 2px green",
                      marginTop: "5rem",
                      marginLeft: "2rem",
                    }}
                  >
                    SuperMarkets
                  </a>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div
                  class="card-body imagebox3"
                  style={{
                    height: "10rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn btn-dark  p-4"
                    style={{
                      fontSize: "19px",
                      border: "0 2px 0 2px green",
                      marginTop: "5rem",
                      marginLeft: "2rem",
                      marginTop: "5rem",
                    }}
                  >
                    Cloud Kitchens
                  </a>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div
                  class="card-body imagebox4"
                  style={{
                    height: "10rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>{" "}
                  <a
                    href="#"
                    class="btn btn-dark p-4"
                    style={{
                      fontSize: "19px",
                      border: "0 2px 0 2px green",
                      marginTop: "5rem",
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
