import { useRecoilValue } from "recoil";
import { errorState } from "../atoms";

export const useError = () => {
  return useRecoilValue(errorState);
};
