import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-[1px] border-[#a9a9a9] border-t-0">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className="flex bg-transparent py-2 px-[10px] items-center rounded-l-md gap-3 border-[1px] border-[#a9a9a9] border-r-0"
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex bg-transparent py-2 px-[10px] items-center rounded-l-md gap-3 border-[1px] border-[#a9a9a9] border-r-0"
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex bg-transparent py-2 px-[10px] items-center rounded-l-md gap-3 border-[1px] border-[#a9a9a9] border-r-0"
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
