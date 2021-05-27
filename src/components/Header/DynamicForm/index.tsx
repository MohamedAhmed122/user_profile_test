import React, { useEffect } from "react";
import CustomInput from "../../../common/CustomInput";

interface FormProps {
  displayInput: boolean;
  setDisplayInput: (bool: boolean) => void;
  error?: boolean;
  setInputValue: (e: any) => void;
  inputValue: string;
  inverted?: boolean;
  setError: (error: boolean) => void;
  setSkills?: any;
  skills?: any;
}

const DynamicForm: React.FC<FormProps> = ({
  displayInput,
  setDisplayInput,
  error,
  setInputValue,
  inputValue,
  setError,
  inverted,
  setSkills,
  skills,
  children,
}) => {
  useEffect(() => {
    if (displayInput) {
      var nameRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@#]/;
      const bool = nameRegex.test(inputValue);
      setError(bool);
    }
  }, [displayInput, inputValue]);

  const handleNameSubmit = (e: any) => {
    e.preventDefault();
    if (error) return;
    if (inverted) {
      setSkills([...skills, inputValue]);
    }
    setDisplayInput(false);
  };

  return (
    <div className="row">
      {!displayInput ? (
        <>{children}</>
      ) : (
        <form onSubmit={handleNameSubmit}>
          <CustomInput
            success={!error}
            error={error}
            width={inverted ? 100 : 300}
            placeholder="Change Name"
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
          />
          <button style={{ display: "none" }}></button>
        </form>
      )}
    </div>
  );
};

export default DynamicForm;
