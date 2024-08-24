import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import FoodItem from "./FoodItem.jsx";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-[max(2vw,24px)]">
        Top Dishes near you
      </h2>
      <div className="grid grid-cols-auto  gap-x-[50px] gap-y-[30px]">
        {food_list.map((item, index) => (
          <FoodItem
            description={item.description}
            name={item.name}
            id={index}
            key={index}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
