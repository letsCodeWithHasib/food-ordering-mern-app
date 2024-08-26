import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { setToken, token } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    console.log("da", data);
    if (currentState === "Login") {
      try {
        const response = await axios.post("/api/auth/login", data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
        } else {
          console.log(response.data.message);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post("/api/auth/register", data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
        } else {
          console.log(response.data.message);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login-popus absolute h-full w-full z-[1] bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] animate-fadeIn text-[14px] rounded"
      >
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="font-semibold text-lg">{currentState}</h2>
          <img
            className="w-[16px] cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currentState === "Sign Up" && (
            <input
              className="outline-none border-[1px] border-[#c9c9c9] rounded-[4px] p-[10px]"
              type="text"
              placeholder="Your name"
              required
              name="name"
              onChange={onChangeHandler}
            />
          )}
          <input
            className="outline-none border-[1px] border-[#c9c9c9] rounded-[4px] p-[10px]"
            type="email"
            placeholder="Your email"
            required
            name="email"
            onChange={onChangeHandler}
          />
          <input
            className="outline-none border-[1px] border-[#c9c9c9] rounded-[4px] p-[10px]"
            type="password"
            placeholder="Your password"
            required
            name="password"
            onChange={onChangeHandler}
          />
        </div>
        <button className="border-none p-[10px] rounded-[4px] text-white bg-[tomato]">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition  flex items-start gap-2 mt-[-15px]">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span
              className="text-tomato font-[500]"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
