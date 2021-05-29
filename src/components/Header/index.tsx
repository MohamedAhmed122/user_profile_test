import React, { useContext, useState } from "react";
import GlobalContext from "../../GlobalContext";
import DynamicForm from "./DynamicForm";
import LocationSearchInput from "./LocationSearchInput";
import UploadPhoto from "./UploadPhoto";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";

import { Skill } from "../../typings";
import { compare } from "../../utils/utils";

import "./styleHeader.css";

const Header: React.FC = () => {
  // state for location
  const [address, setAddress] = useState<string>("USA, Chicago");
  const [displayAddressInput, setDisplayAddressInput] =
    useState<boolean>(false);
  // state for name
  const [name, setName] = useState<string>("Elon Musk");
  const [displayNameInput, setDisplayNameInput] = useState<boolean>(false);
  const [nameError, setNameError] = useState(false);
  // state for language
  const [lang, setLang] = useState<string>("English Language");
  const [displayLangInput, setDisplayLangInput] = useState<boolean>(false);
  const [LangError, setLangError] = useState<boolean>(false);
  // state for skills
  const { skills, setSkills } = useContext(GlobalContext);
  const [displaySkillInput, setDisplaySkillInput] = useState<boolean>(false);
  const [skillError, setSkillError] = useState<boolean>(false);
  const [skill, setSkill] = useState<string>("");

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = (skill: string) => {
    setSkills(skills.filter((s: Skill) => s.skill !== skill));
  };

  skills.sort(compare);

  return (
    <div className="header flex_col">
      <div className="container">
        <div className="flex_between">
          <div className="flex_align header_info">
            <UploadPhoto />
            <div>
              <div className="_mr">
                <DynamicForm
                  displayInput={displayNameInput}
                  error={nameError}
                  setError={setNameError}
                  setDisplayInput={setDisplayNameInput}
                  inputValue={name}
                  setInputValue={setName}
                  fontSize={30}
                >
                  <h1
                    onClick={() => setDisplayNameInput(true)}
                    className="_mr main_title"
                  >
                    {name}
                  </h1>
                </DynamicForm>
              </div>
              <div className="_mr">
                <DynamicForm
                  displayInput={displayLangInput}
                  error={LangError}
                  setError={setLangError}
                  setDisplayInput={setDisplayLangInput}
                  inputValue={lang}
                  setInputValue={setLang}
                >
                  <p
                    onClick={() => setDisplayLangInput(true)}
                    className="small_title"
                  >
                    {lang}
                  </p>
                </DynamicForm>
              </div>
              <div className="_mr">
                {displayAddressInput ? (
                  <LocationSearchInput
                    displayInput={displayAddressInput}
                    address={address}
                    setAddress={setAddress}
                    setDisplayInput={setDisplayAddressInput}
                  />
                ) : (
                  <p
                    onClick={() => setDisplayAddressInput(true)}
                    className="small_title"
                  >
                    {address}
                  </p>
                )}
              </div>
              <div className="flex_align skills_badges_container">
                {skills.map((s: any) => (
                  <div className="badge_container" key={s.skill}>
                    <div
                      className="delete_icon_container"
                      onClick={() => handleDelete(s.skill)}
                    >
                      <div className="delete_icon"> x </div>
                    </div>

                    <div className="badge">{s.skill}</div>
                  </div>
                ))}
                <DynamicForm
                  displayInput={displaySkillInput}
                  error={skillError}
                  setError={setSkillError}
                  setDisplayInput={setDisplaySkillInput}
                  inputValue={skill}
                  setInputValue={setSkill}
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
          <div>
            <div className="flex_align print" onClick={handlePrint}>
              <LocalPrintshopIcon className='print_icon' />
              <p className='print_text'>Print Page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
