import { assets } from "../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div
      className="app-download m-auto mt-[100px] text-[max(3vw,20px)] text-center mb-[100px]"
      id="app-download"
    >
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-plateforms flex justify-center gap-[max(2vw,10px)] mt-[40px]">
        <img className="w-[max(30vw,120px)]ff" src={assets.play_store} alt="" />
        <img className="w-[max(30vw,120px)]ff" src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
