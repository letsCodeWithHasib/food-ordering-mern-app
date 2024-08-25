import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="cart my-[100px]">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div>
                  <div className="cart-items-title cart-items-item my-[10px] text-black">
                    <img className="w-[50px]" src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cursor-pointer"
                    >
                      X
                    </p>
                  </div>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom flex-col-reverse md:flex-row  mt-[80px] flex justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="border-none text-white bg-tomato w-[max(15vw,200px)] py-3 rounded-[4px]"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode justify-start flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code enter it here
            </p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input
                className="bg-transparent border-none outline-none pl-[10px]"
                type="text"
                placeholder="promo code"
              />
              <button className="w-[max(10vw,150px)] py-3 px-[5px] border-none bg-black text-white rounded-[4px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
