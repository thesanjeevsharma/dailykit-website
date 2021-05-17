import React, { PureComponent } from "react";

export default class WhyChoose extends PureComponent {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "2.3rem",
          marginBottom: "1.2rem",
        }}
      >
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
          }}
        >
          Why Choose DailyKIT
        </h1>
        <p
          style={{
            color: "#8ac03b",
            fontWeight: "600",
            marginTop: "1.5rem",
            width: "80%",
            marginLeft: "7rem",
          }}
        >
          Are You Using A Plain Old Micro-Site For Online Ordering Or Worse, Do
          You Not Have An Online Store?
          <br /> It’s Vital To The Success Of Your Business To Have A
          Professional Looking Onine Store.
        </p>
      </div>
    );
  }
}
