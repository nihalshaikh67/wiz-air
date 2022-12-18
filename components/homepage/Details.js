import Image from "next/image";
import React from "react";

const Details = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <Image src={props.image} />
      </div>
      <div className="a-b-text">
        <h3>
          {" "}
          Services necessary for the quick and economical movement of
          time-sensitive cargo.
        </h3>
        <a href="#" className="agent-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Details;
