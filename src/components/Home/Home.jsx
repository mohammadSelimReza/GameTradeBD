import choseImg from "../../img/why_chose.jpg";
import chooseBg from "../../img/chooseusbd.jpg";
import choose from "../../img/choose us.jpg";
import Banner from "./Banner/Banner";
const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* about me */}
      <div className="about_us">
        <div>
          <div className="relative">
            <div className="banner">
              <img className="w-full h-[596px]" src={choseImg} alt="" />
            </div>
            <div className="absolute text-white text-center top-1/4 left-1/4">
              <h1 className="text-5xl font-bold w-1/2">About GameTradeBD</h1>
              <h4 className="w-1/2 text-xl my-10">
                GameTradeBD is a first Bangladeshi platform that allows users to
                sell and buy games while providing buyer and seller protection.
              </h4>
              <h4 className="w-1/2 text-xl">
                Looking to buy or sell games in Bangladesh? Look no further than
                GameTradeBD! Our platform provides a safe and secure way to
                trade games, with protections in place for both buyers and
                sellers. Join our community today and start buying and selling
                with confidence.
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* choose_us */}
      <div className="choose_us">
        <div>
          <div className="relative">
            <div className="banner">
              <img className="w-full h-[596px]" src={chooseBg} alt="" />
            </div>
            <div className="absolute text-white top-1/4 left-1/4">
              <div className="flex flex-row">
                <div className="">
                  <img src={choose} alt="" />
                </div>
                <div className="mx-40">
                  <h1 className="text-5xl font-bold mb-4">Why Choose Us?</h1>
                  <ol className="text-xl">
                    <li>1. Easily gets Buyer Protection if Buyer wants</li>
                    <li className="my-4">
                      2. Easily gets Seller Protection if Seller wants
                    </li>
                    <li>
                      3. Pays money with Bkash / Nagad / Rocket/ Stripe /
                      SSLcommerz
                    </li>
                    <li className="my-4">
                      4. Gets refund easily if buyer does not get product
                      properly{" "}
                    </li>
                    <li>
                      5. Instant support through Whatsapp/Facebook/Discord
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
