import { Skill } from "../typings";

export const compare = (a: Skill, b: Skill) => {
  let comparison = 0;
  if (Number(a.years) < Number(b.years)) {
    comparison = 1;
  } else if (Number(a.years) > Number(b.years)) {
    comparison = -1;
  }
  return comparison;
};
