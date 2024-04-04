import React from "react";
import "./HeaderSection.scss";
import { Typewriter } from "react-simple-typewriter";

function HeaderSection() {
  return (
    <div className="HeaderSection px-globalWrapper">
      <div className="HeaderText">
        <div>Hi,</div>
        <div>I'm a</div>
        <span className="DynamicText">
          <Typewriter
            words={["Full Stack", "Front End", "Back End"]}
            loop={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            cursorBlinking={true}
            cursor={true}
          />
        </span>
        &nbsp;Developer
      </div>
      <div>
        <img src="portraits.jpg" alt="" />
      </div>
    </div>
  );
}

export default HeaderSection;
