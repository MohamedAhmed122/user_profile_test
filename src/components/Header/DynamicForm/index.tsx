import React, { useEffect } from "react";
import { useContext } from "react";
import CustomInput from "../../../common/CustomInput";
import GlobalContext from "../../../GlobalContext";

interface FormProps {
  displayInput: boolean;
  setDisplayInput: (bool: boolean) => void;
  error?: boolean;
  setInputValue: (e: any) => void;
  inputValue: string;
  inverted?: boolean;
  setError: (error: boolean) => void;
  fontSize?: number;
}

const DynamicForm: React.FC<FormProps> = ({
  displayInput,
  setDisplayInput,
  error,
  setInputValue,
  inputValue,
  setError,
  inverted,
  children,
  fontSize,
}) => {
  const { skills, setSkills } = useContext(GlobalContext);

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
      setSkills([...skills, { skill: inputValue, years: 0 }]);
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
            fontSize={fontSize}
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
