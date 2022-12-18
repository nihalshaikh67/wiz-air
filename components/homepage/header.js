import React from "react";
// import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      {/* <Navbar /> */}
      <div className="intro">
        <p style={{ color: "white", fontSize: "18px" }}>
          Looking for Air Cargo !
        </p>
        <h1 style={{ color: "white" }}>
          WIZ AIR - Simplified, sustainable AIR shipping, using Digital
          Transformation
        </h1>
        <p style={{ color: "white" }} className="details">
          lorem i[psum dolor mwn dlkgldkgn consyt a;pdjdjd laobor . inut lorgf
          fgsbvrt efjnejlf wjrejrd;e jefjre;jfd;ew batrifjf enfelfnel efejflejf
        </p>
        <a style={{ color: "white" }} href="#" className="header-btn">
          Details
        </a>
      </div>
    </div>
  );
};

export default Header;
