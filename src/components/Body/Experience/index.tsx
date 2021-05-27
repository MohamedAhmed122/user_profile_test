import React, { useContext, useState } from "react";
import CustomInput from "../../../common/CustomInput";
import GlobalContext from "../../../GlobalContext";
import { Skill } from "../../../typings";

interface ExperienceProps {
  skill: Skill;
}

const Experience: React.FC<ExperienceProps> = ({ skill }) => {
  const [displayInput, setDisplayInput] = useState<Boolean>(false);
  const { skills, setSkills } = useContext(GlobalContext);
  const [years, setYears] = useState<number>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDisplayInput(false);
    const exp = skills.find((s: Skill) => s.skill === skill.skill);
    let newSkills: any = skills.filter((s: Skill) => s.skill !== skill.skill);
    setSkills([...newSkills, { skill: exp.skill, years }]);
  };

  return (
    <div className="flex_align" style={{ marginTop: "1rem" }}>
      <h3 style={{ width: 150 }}> - {skill.skill}</h3>
      {!displayInput ? (
        <p onClick={() => setDisplayInput(true)} className="years">
          {skill.years}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="number"
            width={100}
            placeholder="Years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
      )}
    </div>
  );
};
export default Experience;
