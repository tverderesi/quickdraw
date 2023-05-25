import { draw } from "./draw";

describe("For a draw:", () => {
  test("each participant does not draw their own name", () => {
    const participants = [
      "Anne",
      "Catherine",
      "Jackson",
      "July",
      "Joseph",
      "Nathalia",
    ];

    const drawResult = draw(participants);
    participants.forEach((participant) => {
      const secretFriend = drawResult.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
