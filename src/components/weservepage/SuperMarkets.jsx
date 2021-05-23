import React, { PureComponent } from "react";
import "../../style.css";
export default class SuperMarkets extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            {this.props.leftImage && (
              <div class="col-md-6 col-xs-10">
                <img
                  src={this.props.leftImage}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            )}
            <div class="col-md-6 col-xs-10 trend-responsive">
              {" "}
              <h6
                style={{
                  fontWeight: "bolder",
                }}
              >
                {this.props.subheading}
              </h6>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <div class="row">
                  <div
                    class="col-2 vl"
                    style={{ marginRight: "-70px", paddingRight: "-12px" }}
                  ></div>
                  <div class="col-md-10">{this.props.para}</div>
                </div>
                <div
                  class="row"
                  style={{ marginTop: "2rem", marginLeft: "2rem" }}
                >
                  <ul class="col-md-6 col-xs-10 onDemandCategories trend-responsive">
                    {this.props.list1.map((list) => {
                      return <li style={{ fontSize: "14px" }}>{list}</li>;
                    })}
                  </ul>
                  <ul class="col-md-6 col-xs-10 onDemandCategories">
                    {this.props.list2.map((list) => {
                      return <li style={{ fontSize: "14px" }}>{list}</li>;
                    })}
                  </ul>
                </div>
              </p>{" "}
              <button type="button" className="weserve_button1">
                Schedule A Call
              </button>
              &nbsp;&nbsp;
              <button type="button" className="weserve_button2">
                Learn More
              </button>
            </div>
            {this.props.rightImage && (
              <div class="col-md-6 col-xs-10 right-image-margintop">
                <img
                  src={this.props.rightImage}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
