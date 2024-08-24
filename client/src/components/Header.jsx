import React from "react";

const Header = () => {
  return (
    <div className="h-headerHeight mx-auto mt-8 bg-headerImage rounded-xl bg-no-repeat bg-contain relative">
      <div className="flex flex-col items-start gap-[1.5vw] max-w-[50%] absolute bottom-[10%] left-[6vw]">
        <h2 className="font-semibold text-white text-[max(4.5vw,22px)] animate-fadeIn ">
          Order your favourite food here
        </h2>
        <h3 className="text-white text-[1vw]">
          Choose from a diverse featuring a delectable array of dishes crafted
          with the finest ingredients and culinary expertise. Our mission is to
          satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </h3>
        <button className="text-ternary py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
Header;
