import React from "react";
import Details from "./Details";
import s1 from "../../public/s1.jpeg";
import s2 from "../../public/s2.jpeg";
import s3 from "../../public/s3.jpeg";

const Agent = () => {
  return (
    <div className="agent">
      <div className="a-heading">
        <h1>Supercharge your business with our global supply chain</h1>
        <p>Lorem dolor sit amet, consectetur adipisicing elit and preciseh</p>
      </div>
      <div className="b-container">
        <Details image={s1} name="Tom" />
        <Details image={s2} name="Robert" />
        <Details image={s3} name="Lara" />
      </div>
    </div>
  );
};

export default Agent;
