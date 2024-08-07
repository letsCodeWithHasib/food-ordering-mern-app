import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img className="w-[max(80px,10%)]" src={assets.logo} alt="" />
      <img className="w-[40px]" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
