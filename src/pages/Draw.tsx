import { usePeople } from "../state/hooks/usePeople";
import { ButtonHTMLAttributes, useState, MouseEventHandler } from "react";
import { useDrawResults } from "../state/hooks/useDrawResults";
import OouiArrowPreviousLtr from "../components/OouiArrowPreviousLtr";
import OouiArrowNextLtr from "../components/OouiArrowNextLtr";

export default function Draw() {
  const people = usePeople();

  const [secretSanta, setSecretSanta] = useState("");
  const [index, setIndex] = useState(0);

  const result = useDrawResults();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,

    left: boolean
  ) => {
    left ? setIndex(index + 1) : setIndex(index - 1);
  };

  const handleClick = () => {
    result.has(people[index]) && setSecretSanta(result.get(people[index])!);
    setTimeout(() => {
      setSecretSanta("");
    }, 2000);
  };
  return (
    <section className="relative card py-6 px-3 bg-info shadow-2xl shadow-neutral m-5 lg:m-10 text-info-content h-[calc(100vh-17.5rem)] ">
      <h2 className="text-5xl text-center w-full">Next Person</h2>
      <button
        disabled={!index}
        onClick={(e) => handleNavClick(e, false)}
        className="btn btn-square btn-secondary text-3xl absolute left-5 transition-all duration-200 ease-in-out"
      >
        <OouiArrowPreviousLtr />
      </button>
      <button
        disabled={index >= people.length - 1}
        onClick={(e) => handleNavClick(e, true)}
        className="btn btn-square btn-secondary text-3xl absolute right-5 transition-all duration-200 ease-in-out"
      >
        <OouiArrowNextLtr />
      </button>
      <p className="text-7xl font-semibold w-full text-center py-10">
        {people[index]}
      </p>

      <button onClick={handleClick} className="btn btn-xl mx-auto">
        Draw
      </button>

      {secretSanta && (
        <div className="flex flex-row items-center justify-center">
          <div
            className="alert alert-warning shadow-lg w-96 m-5 absolute bottom-3 z-10 transition-all duration-300 ease-in-out"
            role="alert"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-2xl w-full text-center">
                Your secret santa is{" "}
                <span className="font-bold">{secretSanta}</span>!
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
