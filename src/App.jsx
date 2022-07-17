import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const App = () => (
  <AuthProvider>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  </AuthProvider>
);
