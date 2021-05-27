import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./inputStyle.css";

interface InputProps {
  width?: number;
  placeholder: string;
  value: any;
  onChange: (e: any) => void;
  error?: boolean;
  success?: boolean;
  type?: string;
}

const CustomInput: React.FC<InputProps> = ({
  value,
  onChange,
  width = 500,
  placeholder,
  error,
  success,
  type = "text",
}) => {
  return (
    <div className="flex_align">
      <div
        style={{ width }}
        className={`input flex_align ${error && "error_input"}`}
      >
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(e) => onChange(e)}
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
