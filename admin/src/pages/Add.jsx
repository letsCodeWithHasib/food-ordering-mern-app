import { assets } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const { name, description, price, category } = data;
    if (!name || !description || !price || !category || !image) {
      alert("All fields are required");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("image", image);
      const response = await axios.post("/api/v1/food", formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] color-[#6d6d6d] text-[16px]">
      <ToastContainer />
      <form className="flex-col gap-[20px]" onSubmit={onHandleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-[120px] rounded-md"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="error"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="add-product-name  w-[max(40%,280px)]  flex-col">
          <p>Product Name</p>
          <input
            className="p-[10px] border-2 "
            type="text"
            name="name"
            placeholder="Type here"
            onChange={onChangeHandler}
            value={data.name}
            required
          />
        </div>
        <div className="add-product-description w-[max(40%,280px)]  flex-col">
          <p>Product Description</p>
          <textarea
            className="p-[10px] border-2 "
            name="description"
            required
            rows={6}
            placeholder="Write content here"
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>

        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              className="max-w-[120px] p-[10px] border-2 "
              name="category"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              className="max-w-[120px] p-[10px] border-2 "
              type="number"
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
              value={data.price}
              required
            />
          </div>
        </div>
        <button
          className="max-w-[120px] p-[10px] bg-black text-white cursor-pointer rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
