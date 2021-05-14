import React, { PureComponent } from "react";
import "../../style.css";
export default class ScheduleMeeting extends PureComponent {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "12rem", marginBottom: "20rem" }}
      >
        <div class="row justify-content-between">
          <div class="col-5" style={{ textAlign: "left" }}>
            <h2
              style={{ fontWeight: "bolder", fontSize: "25px" }}
              className="nunito"
            >
              Schedule an E-Meeting
            </h2>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bolder",
                color: "#8ac03b",
              }}
            >
              How Do You Schedule A Meeting?
            </div>
            <br />
            <p
              style={{
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "1.9rem",
              }}
            >
              Select the date on the calendar, the time slot, and then simply
              fill in your information. Done!
            </p>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bolder",
                color: "#8ac03b",
              }}
            >
              What Happens After You Schedule A Meeting?
            </div>
            <br />
            <p
              style={{
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "1.9rem",
              }}
            >
              We will send you a calendar invite to your supplied email address
              with the Google Meet link at the scheduled date & time.
              <br />
              In the event that you're unable to join by laptop/computer, we
              will call you on the given phone number
            </p>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bolder",
                color: "#8ac03b",
              }}
            >
              What Happens During The Meeting?
            </div>
            <br />
            <p
              style={{
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "1.9rem",
              }}
            >
              We invite you to share good, bad and the ugly of your business.
              After understanding your requirements and concerns, we will figure
              out how to deploy the proper DailyKIT tech solutions based on your
              business strategy.
            </p>
          </div>
          <div class="col-7">
            <img
              src="https://static.hsappstatic.net/ui-images/static-2.377/optimized/errors/map.svg"
              alt="map"
              style={{ width: "45vw" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
