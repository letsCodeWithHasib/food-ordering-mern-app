import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="flex justify-between items-center py-5">
      <img className="w-40" src={assets.logo} alt="Loading..." />
      <ul className="flex text-secondary gap-5 text-lg">
        <li
          className={`${
            menu === "home" ? "pb-1 border-b-secondary border-b-2" : ""
          } cursor-pointer`}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={`${
            menu === "menu" ? "pb-1 border-b-secondary border-b-2" : ""
          } cursor-pointer `}
          onClick={() => setMenu("menu")}
        >
          Menu
        </li>
        <li
          className={`${
            menu === "mobile-app" ? "pb-1 border-b-secondary border-b-2" : ""
          } cursor-pointer `}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile-App
        </li>
        <li
          className={`${
            menu === "contact-us" ? "pb-1 border-b-secondary border-b-2" : ""
          } cursor-pointer`}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex gap-10 items-center">
        <img src={assets.search_icon} alt="Loading..." />
        <div className="relative">
          <img src={assets.basket_icon} alt="Loading..." />
          <div className="bg-tomato min-h-3 min-w-3 rounded-full absolute -top-2 -right-3 z-10"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent rounded-full border border-secondary px-5 py-2"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
