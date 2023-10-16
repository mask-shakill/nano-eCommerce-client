import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-slate-700 flex flex-row justify-between items-center p-4 text-white ">
        <h1>Nano Ecommerce</h1>
        <ul className="flex flex-row items-center gap-x-4">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Function</Link>
          </li>
          <li>
            <Link>Function</Link>
          </li>
          <li>
            <Link>About us</Link>
          </li>
        </ul>
        <button className="bg-amber-500 py-1 px-6 rounded-lg text-black">
          login
        </button>
      </nav>
    </div>
  );
};

export default Header;
