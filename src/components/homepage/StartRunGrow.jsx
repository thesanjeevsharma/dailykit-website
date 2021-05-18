import React, { PureComponent } from "react";
import "../../style.css";
export default class StartRunGrow extends PureComponent {
  render() {
    return (
      <div
        class="nunito justify-content-center"
        style={{
          background: "#111B2B",
          height: "110vh",
          color: "white",
          textAlign: "center",
        }}
      >
        <h6
          style={{ color: "#8ac03b", fontWeight: "bold", paddingTop: "7rem" }}
        >
          We’re There For You Every Step Of The Way
        </h6>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "60px",
            width: "90%",
            textAlign: "center",
          }}
          className="margin"
        >
          Start, Run & Grow Your Food Business <br />
          with Ease
        </h1>
        <div class="container">
          <div class="row justify-content-evenly">
            <div
              class="col-4"
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
            >
              <div class="row justify-content-center">
                <div class="col-4">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Technical%20Support.png"
                    alt="icon"
                  />
                </div>
                <div class="col-8" style={{ textAlign: "left" }}>
                  <h5>Technical Support</h5>
                  <p>Tech Glitches Happen. Our support team will be there.</p>
                </div>
              </div>
            </div>
            <div
              class="col-4"
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
            >
              {" "}
              <div class="row justify-content-center">
                <div class="col-4">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Emp.%20Training.png"
                    alt="icon"
                  />
                </div>
                <div class="col-8" style={{ textAlign: "left" }}>
                  <h5>Employee Training</h5>
                  <p>We Make Sure Your Staff Knows The System Like We Do.</p>
                </div>
              </div>
            </div>
            <div
              class="col-4"
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
            >
              {" "}
              <div class="row justify-content-center">
                <div class="col-4">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Menu%20%26%20Recipe%20Ideas.png"
                    alt="icon"
                  />
                </div>
                <div class="col-8" style={{ textAlign: "left" }}>
                  <h5>Menu & Recipe Ideas</h5>
                  <p>Need Inspiration? No Sweat! We Can Help.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div
              class="col-4"
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
            >
              {" "}
              <div class="row justify-content-center">
                <div class="col-4">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Migrate.png"
                    alt="icon"
                  />
                </div>
                <div class="col-8" style={{ textAlign: "left" }}>
                  <h5>Migrate</h5>
                  <p>Running Outdated Tech? Don't Worry, We'll Handle It.</p>
                </div>
              </div>
            </div>
            <div
              class="col-4"
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
            >
              {" "}
              <div class="row justify-content-center">
                <div class="col-4">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Data%20Onboarding.png"
                    alt="icon"
                  />
                </div>
                <div class="col-8" style={{ textAlign: "left" }}>
                  <h5>Data Onboarding</h5>
                  <p>
                    Got Tons of Recipes to Upload? Our Team Can Get You There in
                    a Snap!
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-4"
              style={{ marginBottom: "2rem", marginTop: "2rem" }}
            >
              {" "}
              <div class="row justify-content-center">
                <div class="col-4">
                  <img
                    src="https://www.dailykit.org/hubfs/dailykit-assets/homepage/Packaging%20Ass..png"
                    alt="icon"
                  />
                </div>
                <div class="col-8" style={{ textAlign: "left" }}>
                  <h5>Packaging Assistance</h5>
                  <p>
                    We Know Finding Right Packaging is Tough. Let Our Partners
                    Help You.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
