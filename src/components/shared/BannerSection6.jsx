import React, { PureComponent } from "react";
import "../../style.css";
export default class BannerSection6 extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            {this.props.leftImage && (
              <div class="col-md-5 col-xs-10">
                <img
                  src={this.props.leftImage}
                  class="d-block image-responsive-size"
                  alt="..."
                />
              </div>
            )}
            <div class="col-md-5 col-xs-10 trend-responsive">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                {this.props.para.map((para) => {
                  return (
                    <p style={{ display: "inline" }}>
                      {para}
                      <br />
                      <br />
                    </p>
                  );
                })}
                {this.props.buttonlink && (
                  <a href={this.props.buttonlink}>
                    {this.props.greenbuttontext && (
                      <button
                        type="button"
                        className="btn-style-thirteen green"
                      >
                        {this.props.greenbuttontext}
                      </button>
                    )}
                  </a>
                )}
              </p>
            </div>
            {this.props.rightImage && (
              <div class="col-md-5 col-xs-10">
                <img
                  src={this.props.rightImage}
                  class="d-block image-responsive-size"
                  width="480px"
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
