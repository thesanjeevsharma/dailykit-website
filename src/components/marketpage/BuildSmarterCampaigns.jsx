import React, { PureComponent } from "react";
import "../../style.css";
import computerIcon from "../../computerIcon.PNG";
export default class BuildSmarterCampaigns extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-6">
              <img src={computerIcon} width="70px" />
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Build Smarter Campaigns.
              </h2>{" "}
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                <br />
                Create and deliver engaging experiences, improve customer
                engagement and boost ROI in the process.
              </p>
              <div className="justify-content-center"></div>
            </div>
            <div class="col-6">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/marketing-overview/Build%20smarter%20campaigns.png"
                class="d-block w-80"
                alt="..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}