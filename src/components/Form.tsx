import { useRef, useState } from "react";
import { useAddPeople } from "../state/hooks/useAddPeople";
import { useError } from "../state/hooks/useError";

export default function Form() {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addList = useAddPeople();

  const error = useError();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addList(name);
    setName("");
    inputRef.current?.focus();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-0 text-3xl font-medium p-5"> Participants</h2>
      <form
        onSubmit={handleSubmit}
        className="w-100 flex flex-row gap-5 items-center justify-center"
      >
        <div className="relative">
          <input
            type="text"
            ref={inputRef}
            onChange={handleChange}
            placeholder="Add a participant"
            className="input input-primary input-bordered w-full pr-16"
          />
          <button
            disabled={!name}
            className="btn btn-secondary  absolute top-0 right-0 rounded-l-none shadow-lg"
          >
            Add
          </button>
        </div>
      </form>
      {error && (
        <div className="alert alert-error shadow-lg w-96 m-5 fixed bottom-3 z-10 transition-all duration-300 ease-in-out">
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
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! {error.message}!</span>
          </div>
        </div>
      )}
    </div>
  );
}
