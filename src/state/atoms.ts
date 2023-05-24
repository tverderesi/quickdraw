import { atom } from "recoil";

export const peopleState = atom<string[]>({
  key: "peopleState",
  default: [],
});

export const resultState = atom<Map<string, string>>({
  key: "resultState",
  default: new Map(),
});

export const errorState = atom<Error | null>({
  key: "errorState",
  default: null,
});
