import { Link } from "react-router-dom";
import landingPage from "../assets/landing.webp";
import one from "../assets/products/goldLogos/1.svg";
import two from "../assets/products/goldLogos/2.svg";
import three from "../assets/products/goldLogos/3.svg";
import four from "../assets/products/goldLogos/4.svg";
import five from "../assets/products/goldLogos/5.svg";
import six from "../assets/products/goldLogos/6.svg";
import Success from "./components/Success";
const Home = () => {
  const products = [one, two, three, four, five, six];
  return (
    <>
      <div className="mainBg">
        <div className=" lg:grid lg:grid-cols-2 items-center justify-center py-24 container mx-auto">
          <img
            src={landingPage}
            className="max-h-[400px] mx-auto lg:mr-auto order-1"
            alt="landing page image"
          />
          <div className="text-center lg:text-right my-8 lg:my-0">
            <h1 className="text-3xl mb-6">
              معا <span className="text-gold">للتميز</span> انطلق من{" "}
              <span className="text-gold">الصفر</span> الى الاحتراف
            </h1>
            <p className="w-3/4 mx-auto lg:mx-0">
              تعلم ونمِّي مهاراتك، نحن هنا لندعمك في رحلتك نحو التميز من الصفر .
            </p>
            <Link
              to="/login"
              className="px-8 py-2 mx-auto lg:mx-0 text-xl text-gold border border-gold rounded-xl my-8 block w-fit"
            >
              ابدء الأن
            </Link>
          </div>
        </div>
      </div>

      <div className="subMain py-4">
        <div>
          <div className="mainHeading">
            <h1>المنتجات</h1>
          </div>
          <div className="mx-auto container">
            <p className=" text-xl text-lightGray text-center px-12">
              احصل على الوصول إلى الأدوات التي يمكن أن تساعدك على تقليل الديون ،
              وإصلاح وبناء الائتمان الخاص بك ، وإدارة ميزانياتك ، وتوفير المال ،
              وتحسين عاداتك المالية ، واحترف الاسواق المالية.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-2 my-12">
              {products.map((product, index) => (
                <div
                  key={index}
                  className=" col-span-1 w-full flex justify-center items-center rounded-2xl bg-[#362D17] aspect-square"
                >
                  <img
                    src={product}
                    className="max-w-[75%] max-h-[75%]"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Success />
    </>
  );
};

export default Home;
