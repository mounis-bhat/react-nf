import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="flex items-center justify-between p-4 z-50 absolute w-full">
    <Link to="/">
      <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
        NETFLIX
      </h1>
    </Link>
    <div>
      <Link to="/login">
        <button className="text-white pr-4">Sign In</button>
      </Link>
      <Link to="/register">
        <button className="bg-red-600 px-6 py-2 text-white rounded">
          Sign Up
        </button>
      </Link>
    </div>
  </div>
);
