import StreamlineEmojisGameDice from "./StreamlineEmojisGameDice";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-300 h-24 shadow-xl">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <Link to="/" className="flex flex-row items-center">
          <StreamlineEmojisGameDice className="text-7xl" />
          <span className="ml-4 text-4xl font-bold bg">QuickDraw!</span>
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
