import React, { PureComponent } from "react";
import "../../style.css";
export default class Bluebox extends PureComponent {
  render() {
    return (
      <div
        style={{ background: "#111B2B", textAlign: "center", color: "white" }}
      >
        <div style={{ color: "#111B2B" }}>.</div>
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "50px",
            margin: "5rem 0rem 2rem 0rem",
          }}
        >
          Menu Management <br />
          vs <br />
          Menu Engineering
        </div>

        <button
          type="button"
          style={{ fontSize: "14px" }}
          class="btn btn-success btn-lg p-3 pl-4 pr-4 mb-4"
        >
          Schedule A Meeting
        </button>
        <div class="row justify-content-center mb-4 mt-4">
          <p
            class="col-5"
            style={{ fontSize: "19px", lineHeight: "2rem", textAlign: "right" }}
          >
            Menu management is a general menu building excercise done
            periodically and ideally before the start of business each day,
            where you simply build & discuss your menu, as well as specials and
            substitutions, rather than getting into the weeds of your customer's
            demands and desires. Novice businesses often miss out on the
            importance of menu engineering.
          </p>
          <p class="col-1 blackline"></p>
          <p
            class="col-5"
            style={{ fontSize: "19px", lineHeight: "2rem", textAlign: "left" }}
          >
            Menu Engineering is Active & Modern Menu Management. Ask yourself:
            When was the last time you paid detailed attention to your menu and
            revamped it according to your customer's expectations? With
            increased competition, providing newer experiences to your customers
            is necessary to help you stand out and ultimately drive the success
            you wish for.
          </p>
        </div>
      </div>
    );
  }
}
