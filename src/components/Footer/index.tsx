import React from "react";
import Map from "./Map/index";
import FooterContent from "./FooterContent/index";
import { FooterContentData } from "../../typings";

import "./styleFooter.css";

const data: Array<FooterContentData> = [
  {
    id: 1,
    title: "Lorem Title ",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eligendi impedit",
  },
  {
    id: 2,
    title: " Live your Life :)",
    text: "doloremque. Dicta quisquam nihil corrupti voluptas quibusdam optio",
  },
];

const Footer: React.FC = () => {
  return (
    <div className="flex_align" style={{ height: "50vh" }}>
      <div className="footer_contain_container">
        <div className="flex_wrap">
          {data.map((data) => (
            <FooterContent key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="map_container">
        <Map />
      </div>
    </div>
  );
};

export default Footer;
