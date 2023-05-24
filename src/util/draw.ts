import shuffle from "just-shuffle";

export function draw(people: string[]) {
  const draw = shuffle(people);
  const result = new Map<string, string>();
  for (let i = 0; i < people.length; i++) {
    const index = i === people.length - 1 ? 0 : i + 1;
    result.set(draw[i], draw[index]);
  }
  return result;
}
