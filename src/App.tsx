import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import ThemeChanger from "./components/ThemeChanger";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ThemeChanger />} />
      </Route>
    </Routes>
  );
}

export default App;
