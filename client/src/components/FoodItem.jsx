import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cursor-pointer transition duration-custom ease-in-out  mt-8 shadwo-[#00000015] w-[100%] m-auto rounded-2xl shadow-lg animate-fadeIn">
      <div className="relative">
        <img
          className="w-[100%] rounded-t-2xl"
          src={`http://localhost:3000/images/${image}`}
          alt="asd"
        />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-4 cursor-pointer right-4"
            onClick={() => addToCart(id)}
            src={assets.add_icon_green}
            alt=""
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-[10px] p-[8px] rounded-2xl bg-white">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(id)}
              alt=""
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mt-3">
          <p className="text-[20px] font-[500]">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767]  leading-5 text-[15px] ">{description}</p>
        <p className="text-tomato text-[22px] text-[500] mt-[10px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
