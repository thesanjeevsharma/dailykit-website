import React, { PureComponent } from "react";
import "../../style.css";
import Heading1 from "./Heading";
import SubHeading1 from "./SubHeading";
export default class ImageBox1 extends PureComponent {
  render() {
    return (
      <div class="container image-section-1">
        <Heading1 text={this.props.Heading1text} />
        <SubHeading1 text={this.props.SubHeading1text} />
        <div class="row justify-content-center">
          <div class="col-md-6 col-xs-10">
            <div class="card">
              <div class="card-body inner-box">
                <img alt={this.props.imagetext1} src={this.props.image1url} />

                <a href="/we_serve" class="btn btn-dark image1-button">
                  {this.props.imagetext1 && this.props.imagetext1}
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-10">
            <div class="card">
              <div class="card-body inner-box">
                <img alt={this.props.imagetext2} src={this.props.image2url} />

                <a href="/we_serve" class="btn btn-dark image2-button">
                  {this.props.imagetext2 && this.props.imagetext2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
