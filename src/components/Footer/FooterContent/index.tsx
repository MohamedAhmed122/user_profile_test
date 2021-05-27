import React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { FooterContentData } from "../../../typings";

interface ContentProps {
  data: FooterContentData;
}

const FooterContent: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="footer_content flex_col">
      <h1 className="title">{data.title}</h1>
      <div className="flex">
        <FormatQuoteIcon className="quote_icon left" />
        <p className="footer_subtext">{data.text}</p>
        <FormatQuoteIcon className="quote_icon right" />
      </div>
    </div>
  );
};
export default FooterContent;
