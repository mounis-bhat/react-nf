import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

export const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </>
);
