import React, { PureComponent } from "react";

export default class BannerSection3 extends PureComponent {
  render() {
    return (
      <>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xs-10 trend-responsive">
              {this.props.subheading && (
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {this.props.subheading}
                </p>
              )}
              {this.props.heading && (
                <h2
                  style={{
                    fontWeight: "bolder",
                    fontSize: "50px",
                    margin: "2rem 0rem 2rem 0rem",
                  }}
                  className="nunito"
                >
                  {this.props.heading}
                </h2>
              )}
              {this.props.text && (
                <p
                  style={{
                    fontSize: "17px",
                    marginBottom: "4rem",
                  }}
                >
                  {this.props.text}
                </p>
              )}
              <div className="justify-content-center">
                {this.props.blackbuttontext && (
                  <form>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Valid Email Address"
                      style={{
                        width: "20rem",
                        height: "3.29rem",
                        display: "inline",
                        background: "#E6F8FC",
                      }}
                    />

                    <button type="button" class="btn-style-thirteen black">
                      {this.props.blackbuttontext}
                    </button>
                  </form>
                )}
                {this.props.button2 && (
                  <div className="justify-content-center mb-4">
                    <button type="button" class="btn-style-thirteen black">
                      {this.props.button2[0]}
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn-style-thirteen white">
                      {this.props.button2[1]}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div class="col-md-6 col-xs-10">
              {this.props.image && (
                <img
                  src={this.props.image}
                  class="d-block w-100 image-responsive"
                  alt="..."
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
