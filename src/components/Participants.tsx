import { usePeople } from "../state/hooks/usePeople";

export default function Participants() {
  const people = usePeople();
  return (
    <div
      data-testid="participants-component"
      className="card py-6 px-3 bg-info shadow-2xl shadow-neutral m-5 lg:m-10 text-info-content min-h-fit "
    >
      <h2 className="text-center text-3xl font-bold">Participants</h2>{" "}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 mt-5">
        {people.length ? (
          people.map((person, idx) => (
            <li
              key={idx}
              className="p-2 font-medium text-lg border-b border-info-content mx-3 transition duration-500 ease-in-out mt-1 truncate text-ellipsis w-4/5"
            >
              <span className="font-bold text-info-focus">{idx + 1}. </span>
              {person}
            </li>
          ))
        ) : (
          <p className="p-3 text-3xl font-medium text-center col-span-1 md:col-span-2 lg:col-span-3">
            No participants yet.
          </p>
        )}
      </ul>
    </div>
  );
}
