import React, { PureComponent } from "react";
import Heading1 from "../shared/Heading";
import SubHeading1 from "../shared/SubHeading";

export default class SpecialBanner3 extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "6rem" }}>
        <div
          class="container"
          style={{
            padding: "2rem 0rem 6rem 0rem",
          }}
        >
  {this.props.SubHeading2text &&   <SubHeading1 text={this.props.SubHeading2text} />}
        {this.props.Heading1text && <Heading1 text={this.props.Heading1text} />}
        {this.props.SubHeading1text && <SubHeading1 text={this.props.SubHeading1text} />}
        
        <div class="row">
        
          <div class="col-md-6 col-xs-10 ">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/consumer@2x.png"
              alt="..."
              className="image-responsive-2"
            />
          </div>
          <div class="col-md-6 col-xs-10">
            <img
              src="https://www.dailykit.org/hubfs/dailykit-assets/order-fulfilment/operator@2x-1.png"
              alt="..."
              className="image-responsive-2"
            />
          </div>
        </div>
        </div>
        </div>
    );
  }
}
