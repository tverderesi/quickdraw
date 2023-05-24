import { useRecoilState, useSetRecoilState } from "recoil";
import { errorState, peopleState } from "../atoms";
import { InputError } from "../errors/inputError";

export const useAddPeople = () => {
  const [people, setPeople] = useRecoilState(peopleState);
  const setError = useSetRecoilState(errorState);
  return (name: string) => {
    const isInList = people.includes(name);
    try {
      if (isInList) {
        throw new InputError("Duplicate name");
      } else {
        setPeople((people: string[]) => [...people, name]);
      }
    } catch (err: any) {
      setError(err);
      setTimeout(() => {
        setError(null);
      }, 5000);
      console.error(err);
    }
  };
};
