import React, { PureComponent } from "react";

export default class PersonalizationDoneRight extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            {this.props.leftImage && (
              <div class="col-5">
                <img
                  src={this.props.leftImage}
                  class="d-block w-80"
                  alt="..."
                />
              </div>
            )}
            <div class="col-6">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "60px",
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
                <button
                  type="button"
                  style={{ fontSize: "14px", width: "150px" }}
                  class="btn btn-success btn-lg p-3 pl-4 pr-4"
                >
                  {this.props.buttontext
                    ? this.props.buttontext
                    : "TELL ME MORE"}
                </button>
              </p>
            </div>
            {this.props.rightImage && (
              <div class="col-5">
                <img
                  src={this.props.rightImage}
                  class="d-block"
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
