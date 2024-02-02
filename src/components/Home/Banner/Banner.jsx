// import "./Banner.css";
import bannerImg from "../../../img/banner_photo.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="relative">
        <div className="banner2">
          <img className="w-full h-[596px]" src={bannerImg} alt="" />
        </div>

        <div className="absolute text-white top-1/3 left-1/4">
          <h1 className="text-5xl font-bold">
            Best Place
            <br />
            To Trade Your Game
          </h1>
          <div className="my-10">
            <button className="btn bg-amber-600 text-white">
              Start Selling
            </button>
            <button className="mx-6 btn bg-amber-600 text-white ">
              Start Buying
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
