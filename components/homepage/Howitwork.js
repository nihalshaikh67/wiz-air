import React from "react";

const Howitwork = () => {
  return (
    <div className="how-it-works">
      <div className="container">
        <h2>We make supply chain very highly visible</h2>
        <div className="flex">
          <div>
            <span className="fas fa-home"></span>
            <h4>Save 15% on landed cost</h4>
            <p>
              {" "}
              Our AI rate optimiser scans 100’s of options across carriers, CHAs
              &amp; truckers to find the best rates factoring schedules, transit
              times and space.
            </p>
          </div>
          <div>
            <span className="fas fa-dollar-sign"></span>
            <h4>Get Door to Door visibility</h4>
            <p>
              {" "}
              Our real-time GPS-powered tracking across the first mile, ocean,
              customs and the last mile with automated status updates at every
              step.
            </p>
          </div>
          <div>
            <span className="fas fa-chart-line"></span>
            <h4>Reduce manual work by 30%</h4>
            <p>
              {" "}
              Automated tasks and collaborative document management saves your
              teams a lot of time and minimises manual errors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitwork;
