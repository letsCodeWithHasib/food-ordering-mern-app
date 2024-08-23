import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const List = () => {
  const [list, setList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const response = await axios.get("/api/v1/food");
        if (response.data.message) {
          toast.success(response.data.message, toastConfig);
          setList(response.data.data);
        } else {
          toast.error(response.data.message, toastConfig);
        }
      } catch (error) {
        toast.error(error.message, toastConfig);
      }
    };
    fetchFoodList();
    console.log("rendered");
  }, [isDeleted]);

  const removeFoodItem = async (foodId) => {
    setIsDeleted(!isDeleted);
    try {
      const response = await axios.delete("/api/v1/food", {
        data: { id: foodId },
      });
      if (response.data.message) {
        toast.success(response.data.message, toastConfig);
      } else {
        toast.error(response.data.message, toastConfig);
      }
    } catch (error) {
      toast.error(error.message, toastConfig);
    }
  };

  return (
    <div className="px-[10%] pt-top add flex-col w-screen">
      <ToastContainer />
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`http://localhost:3000/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}$</p>
              <p
                className="cursor-pointer"
                onClick={() => removeFoodItem(item._id)}
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
