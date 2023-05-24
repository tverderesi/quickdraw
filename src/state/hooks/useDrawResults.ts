import { resultState } from "../atoms";
import { useRecoilValue } from "recoil";

export const useDrawResults = () => {
  return useRecoilValue(resultState);
};
