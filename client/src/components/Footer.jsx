import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div
      className="text-[#d9d9d9] bg-[#323232] flex items-center flex-col gap-5 py-5 px-[8vw] pt-[80px]"
      id="footer"
    >
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia architecto, cupiditate nobis quidem aperiam ducimus!
          </p>
          <div className="footer-social-icons flex gap-5">
            <img className="w-full" src={assets.facebook_icon} alt="" />
            <img className="w-full" src={assets.twitter_icon} alt="" />
            <img className="w-full" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className="">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-233-344-3494</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full bg-slate-700 " />
      <p className="footer-copyright">
        Copyright 2024 &copy; Tomato.com - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
