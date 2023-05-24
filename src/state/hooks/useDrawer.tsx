import { useSetRecoilState } from "recoil";
import { resultState } from "../atoms";
import { draw } from "../../util/draw";
import { usePeople } from "./usePeople";

export const useDrawer = () => {
  const participants = usePeople();
  const setResult = useSetRecoilState(resultState);
  return () => {
    const result = draw(participants);
    setResult(result);
  };
};
