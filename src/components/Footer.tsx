import { useRecoilValue, useResetRecoilState } from "recoil";
import { peopleState } from "../state/atoms";
import { useDrawer } from "../state/hooks/useDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
export default function Footer() {
  const people = useRecoilValue(peopleState);
  const resetPeople = useResetRecoilState(peopleState);
  const navigate = useNavigate();
  const draw = useDrawer();
  const location = useLocation();

  const handleStartDraw = () => {
    location.pathname === "/results" ? resetPeople() : draw();

    navigate(location.pathname === "/results" ? "/" : "/results");
  };

  return (
    <footer
      data-testid="header-component"
      className="footer absolute bottom-0 h-24 bg-base-300 shadow-neg-xl  w-full pb-5"
    >
      <div className="flex flex-row items-end px-5 w-full h-full justify-between">
        <ThemeChanger />
        <button
          className="btn btn-primary"
          disabled={people.length < 3}
          onClick={handleStartDraw}
        >
          {location.pathname === "/results" ? "Restart" : " Start Draw! 🎉"}
        </button>
      </div>
    </footer>
  );
}
