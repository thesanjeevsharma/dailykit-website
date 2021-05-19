import React, { PureComponent } from "react";
import "../../style.css";
export default class OrderNotification extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F9FC", textAlign: "center" }}>
        <div style={{ color: "#F7F9FC" }}>.</div>
        <h2
          style={{
            fontWeight: "bolder",
            fontSize: "60px",
            margin: "4rem 0rem 0.5rem 0rem",
          }}
          className="nunito"
        >
          Order Notifications
        </h2>
        <h6>
          It is vital that no order slips through the cracks.
          <br />
          Get Notifications where you want.
        </h6>{" "}
        <div
          class="container"
          style={{
            textAlign: "center",
            marginTop: "1rem",
            padding: "2rem 0rem 0rem 0rem",
          }}
        >
          <div class="row justify-content-evenly">
            <div class="col-3 p-4  justify-content-center">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/DailyOS-Notifications@2x.png"
                style={{
                  width: "220px",
                  display: "block",
                  margin: "0rem 40% 2rem 30%",
                }}
              />
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                  textAlign: "center",
                }}
                class="nunito"
              >
                Create Custom Plans & Options
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                Multiple Plans like Vegan or Seafood | Couple or family | 2 or 3
                items. It's upto you.
              </p>
            </div>
            <div class="col-3 p-4  justify-content-center">
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/print-KOTs@2x.png"
                style={{
                  width: "220px",
                  display: "block",
                  margin: "0rem 40% 2rem 30%",
                }}
              />
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                }}
                class="nunito"
              >
                Print KOTs
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                Automatically Print KOTs with Order Details for the Manager &
                Kitchen Stations.
              </p>
            </div>
            <div class="col-3 p-4  justify-content-center">
              {" "}
              <img
                alt="icon"
                src="https://www.dailykit.org/hubfs/dailykit-assets/order-dashboard/Email-%26-SMS-Notifications@2x.png"
                style={{
                  width: "220px",
                  display: "block",
                  margin: "0rem 40% 2rem 30%",
                }}
              />{" "}
              <h5
                style={{
                  display: "inline",
                  fontWeight: "bolder",
                  fontSize: "21px",
                }}
                class="nunito"
              >
                Email & SMS Notifications
              </h5>
              <br />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                Configure Email & SMS to be sent to multiple staff members
                anytime a new order is received.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
