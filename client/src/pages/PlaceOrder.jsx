import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order flex items-center justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-[600] mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street " />
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
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
            onClick={""}
            className="border-none text-white bg-tomato w-[max(15vw,200px)] py-3 rounded-[4px]"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
