import React from "react";
import SampleCode from "./SampleCode";
import "./styleBody.css";

const Body: React.FC = () => {
  return (
    <div className="flex_wrap">
      <div className="body_content">
        <h1 className="title">Portfolio</h1>
      </div>
      <div className="body_content">
        <h1 className="title">Portfolio</h1>
      </div>
      <div className="body_content">
        <h1 className="title">Sample Code</h1>
        <SampleCode />
      </div>
      <div className="body_content">
        <h1 className="title">Portfolio</h1>
      </div>
    </div>
  );
};

export default Body;
