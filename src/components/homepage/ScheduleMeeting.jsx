import React, { PureComponent } from "react";
import "../../style.css";
export default class ScheduleMeeting extends PureComponent {
  render() {
    return (
      <div className="container schedule-meeting-section1">
        <div class="row justify-content-between schedule-meeting-box1">
          <div class="col-md-5 col-xs-10 ">
            <h2 className="nunito">{this.props.heading}</h2>
            {this.props.content &&
              this.props.content.map((line) => {
                return (
                  <>
                    <div class="question">{line.question}</div>

                    <p class="answer">{line.answer}</p>
                    <br />
                  </>
                );
              })}
          </div>
          <div class="col-md-7 col-xs-10 nunito">
            <div class="row justify-content-center text-center">
              <div class="col-md-8 col-xs-10">
                <img
                  src={this.props.image}
                  alt="map"
                  style={{ maxWidth: "100%" }}
                />
                <br />
                <h5>
                  <strong>{this.props.imagebelowline}</strong>
                </h5>
                <small>
                  {this.props.contactline}
                  <br /> <br />
                  <a href={this.props.emaillink} alt="mail">
                    {this.props.emailline}
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
