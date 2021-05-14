import React, { PureComponent } from "react";
import "../../style.css";
export default class StartRunGrow extends PureComponent {
  render() {
    return (
      <div
        class="nunito"
        style={{
          background: "#111B2B",
          height: "100vh",
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
            width: "90vw",

            textAlign: "center",
          }}
        >
          Start, Run & Grow Your Food Business with Ease
        </h1>
      </div>
    );
  }
}
