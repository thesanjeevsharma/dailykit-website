import React from "react";
import "./../../style.css";
const VideoBanner = () => {
  return (
    <div className="image" style={{ background: "#212529" }}>
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{ opacity: "0.1" }}
      >
        <source
          src="https://www.dailykit.org/hubfs/dailykit-assets/home-video-3.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBanner;
