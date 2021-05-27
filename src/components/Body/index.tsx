import React from "react";
import { useState } from "react";
import SampleCode from "./SampleCode";
import "./styleBody.css";

const Body: React.FC = () => {
  const [exps, setExps] = useState([
    {
      name: 'PHP'
    }
  ])
  return (
    <div className="flex_wrap">
      <div className="body_content">
        <h2 className="title">Portfolio</h2>
        {data.map((text) => (
          <p key={text} className="_mr body_text">
            {" "}
            - {text}
          </p>
        ))}
      </div>
      <div className="body_content">
        <h2 className="title">Experience</h2>
      </div>
      <div className="body_content">
        <h2 className="title">Sample Code</h2>
        <SampleCode />
      </div>
      <div className="body_content ">
        <div style={{ marginLeft: 10 }}>
          <h2 className="title">Availability</h2>
          <p> Full-time</p>
          <br />
          <h2 className="title">Preferred Environment</h2>
          <p> Full-time</p>
        </div>
      </div>
    </div>
  );
};

export default Body;

const data = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  "quia quidem, nam distinctio minima officiis! amet consectetur adipisicing",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing",
  "non suscipit obcaecati repudiandae, quasi nobis voluptates",
];
