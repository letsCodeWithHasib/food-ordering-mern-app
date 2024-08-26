import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import FoodItem from "./FoodItem.jsx";
import axios from "axios";

const FoodDisplay = ({ category }) => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/food?category=${category}`)
      .then((response) => {
        console.log(response);
        setFoodList(response.data.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-[max(2vw,24px)]">
        Top Dishes near you
      </h2>
      <div className="grid grid-cols-auto  gap-x-[50px] gap-y-[30px]">
        {foodList.map((item, index) => (
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
