import React from "react";
import "./../../style.css";
import $ from "jquery";
const VideoBanner = () => {
  return (
    <div className="image video-1">
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
      <div className="header">
        <div class="heading-1">Time to EVOLVE with</div>
        <h2 class="nunito">DailyKIT</h2>
        <br />
        <h5>The only Trend-Responsive Food-tech solution You'll Ever Need</h5>
        <br />
        <h4
          id="yourElem"
          class="all-text"
          onclick={setInterval(() => {
            var array = [
              "Increase Bottom-Line Margin",
              "Grow Top-Line Revenue",
              "Mitigate Risk and Achieve Sustainability",
              "Grow Top-Line Revenue",
            ];
            $("#yourElem").text(array[Math.floor(Math.random() * 4) + 0]);
          }, 2000)}
        >
          Multiple Your Brand Awareness
        </h4>
        <br />
        <br />
        <a href="/">
          <button type="button" className="btn-style-thirteen white">
            Schedule Demo
          </button>
        </a>
        &ensp;
        <a href="/">
          <button type="button" className="btn-style-ten purple">
            Start Now With A 3-Month Trail
          </button>
        </a>
        <br />
        <br />
        <div class="offer">Available for a Limited time Only</div>
      </div>
    </div>
  );
};

export default VideoBanner;
