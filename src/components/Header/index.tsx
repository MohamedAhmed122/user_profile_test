import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import LocationSearchInput from "./LocationSearchInput";
import UploadPhoto from "./UploadPhoto";

import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";

import "./styleHeader.css";

const Header: React.FC = () => {
  // state for location
  const [address, setAddress] = useState<string>("Egypt");
  const [displayAddressInput, setDisplayAddressInput] =
    useState<boolean>(false);
  // state for name
  const [name, setName] = useState<string>("Elon Musk");
  const [displayNameInput, setDisplayNameInput] = useState<boolean>(false);
  const [nameError, setNameError] = useState(false);
  // state for language
  const [lang, setLang] = useState<string>("Russia");
  const [displayLangInput, setDisplayLangInput] = useState<boolean>(false);
  const [LangError, setLangError] = useState<boolean>(false);
  // state for skills
  const [displaySkillInput, setDisplaySkillInput] = useState<boolean>(false);
  const [skills, setSkills] = useState<Array<string>>([
    "React",
    "JavaScript",
    "TypeScript",
  ]);
  const [skillError, setSkillError] = useState<boolean>(false);
  const [skill, setSkill] = useState<string>("");

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };
  return (
    <div className="header flex_col">
      <div className="container">
        <div className="flex_between">
          <div className="flex_align">
            <UploadPhoto />
            <div>
              <DynamicForm
                displayInput={displayNameInput}
                error={nameError}
                setError={setNameError}
                setDisplayInput={setDisplayNameInput}
                inputValue={name}
                setInputValue={setName}
              >
                <h1 onClick={() => setDisplayNameInput(true)} className="_mr">
                  {name}
                </h1>
              </DynamicForm>
              <DynamicForm
                displayInput={displayLangInput}
                error={LangError}
                setError={setLangError}
                setDisplayInput={setDisplayLangInput}
                inputValue={lang}
                setInputValue={setLang}
              >
                <p onClick={() => setDisplayLangInput(true)} className="_mr">
                  {lang}
                </p>
              </DynamicForm>
              {displayAddressInput ? (
                <LocationSearchInput
                  address={address}
                  setAddress={setAddress}
                  setDisplayInput={setDisplayAddressInput}
                />
              ) : (
                <p onClick={() => setDisplayAddressInput(true)} className="_mr">
                  {address}
                </p>
              )}
              <div className="flex_align">
                {skills.map((skill) => (
                  <div key={skill}>
                    <div
                      className="delete_icon_container"
                      onClick={() => handleDelete(skill)}
                    >
                      <div className="delete_icon"> x </div>
                    </div>
                    <div className="badge">{skill}</div>
                  </div>
                ))}
                <DynamicForm
                  displayInput={displaySkillInput}
                  error={skillError}
                  setError={setSkillError}
                  setDisplayInput={setDisplaySkillInput}
                  inputValue={skill}
                  setInputValue={setSkill}
                  setSkills={setSkills}
                  skills={skills}
                  inverted
                >
                  <div
                    className="badge"
                    onClick={() => setDisplaySkillInput(true)}
                  >
                    +
                  </div>
                </DynamicForm>
              </div>
            </div>
          </div>
          <div >
            <div className="flex_align print" onClick={handlePrint}>
              <LocalPrintshopIcon style={{ marginRight: 10 ,}} />
              <p>Print Page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
