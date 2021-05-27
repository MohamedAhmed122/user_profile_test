import { Skill } from "../typings";

export const compare = (a: Skill, b: Skill) => {
  let comparison = 0;
  if (a.years < b.years) {
    comparison = 1;
  } else if (a.years > b.years) {
    comparison = -1;
  }
  return comparison;
};
