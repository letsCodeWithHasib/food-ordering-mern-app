import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-fourth">Explore Our Menu</h1>
      <p className="max-w-[60%]">
        Choose from a diverse featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise.
      </p>
      <div className="scroll flex gap-8 items-center justify-between text-center overflow-x-scroll my-5">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
          >
            <img
              className={`w-[7.5vw] min-w-5 cursor-pointer rounded-full two ${
                category === item.menu_name
                  ? "border-tomato border-[5px] p-[2px]"
                  : ""
              }`}
              src={item.menu_image}
              alt=""
            />
            <p className="mt-3 text-ternary cursor-pointer text-[max(1.4vw,16px)]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="h-[2px] mt-3 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
