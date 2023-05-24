import { useRecoilValue } from "recoil";
import { peopleState } from "../atoms";

export const usePeople = () => {
  return useRecoilValue(peopleState);
};
