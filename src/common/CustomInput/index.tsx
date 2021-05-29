import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./inputStyle.css";
import { useMediaQuery, useTheme } from "@material-ui/core";

interface InputProps {
  width?: number;
  placeholder: string;
  value: any;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement> | string
  ) => void | string;
  error?: boolean;
  success?: boolean;
  type?: string;
  fontSize?: number | string;
}

const CustomInput: React.FC<InputProps> = ({
  value,
  onChange,
  width = 500,
  placeholder,
  error,
  success,
  fontSize = 15,
  type = "text",
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="flex_align">
      <div
        style={{ width: matches ? 200 : width }}
        className={`input flex_align ${error && "error_input"}`}
      >
        <input
          style={{ fontSize }}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
        />
        {error && <CancelIcon style={{ color: "red" }} />}
        {success && <CheckCircleIcon style={{ color: "green" }} />}
      </div>
      {error && (
        <p style={{ color: "red", marginLeft: 10 }}> Error Description</p>
      )}
    </div>
  );
};

export default CustomInput;
