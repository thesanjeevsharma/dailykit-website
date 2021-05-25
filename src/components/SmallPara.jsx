import React from "react";
const SmallPara = (props) => {
  return props.smallPara.map((smallPara) => {
    return (
      <>
        {smallPara}
        <br />
        <br />
      </>
    );
  });
};
export default SmallPara;
