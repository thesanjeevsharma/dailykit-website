import React, { PureComponent } from "react";
import "../../style.css";
export default class AnERP extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "12rem" }}>
          <div class="row justify-content-between">
            <div class="col-6">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "60px",
                  marginBottom: "2rem",
                }}
                className="nunito"
              >
                An ERP for Large Enterprises
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bolder",
                  color: "silver",
                }}
              >
                Easily address the complexities of large food manufacturers and
                distributors while dealing with high transaction volumes and
                multiple locations.
              </p>
              <button type="button" className="weserve_button1">
                SCHEDULE A MEETING
              </button>
            </div>
            <div class="col-6">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/enterprise-solution@2x.png"
                alt="..."
                style={{ marginTop: "-11rem", width: "35rem" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
