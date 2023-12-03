import { Link } from "react-router-dom";
import payment from "../assets/payment.png";
import { useContext } from "react";
import { AppContext } from "../App";
const Footer = () => {
  const media = [
    {
      label: "youtube",
      icon: "fa-brands fa-youtube",
      link: "https://www.youtube.com/channel/UCKlzTSsJBGg48ElLpUDT9rA",
    },
    {
      label: "facebook",
      icon: "fa-brands fa-facebook-f",
      link: "https://www.facebook.com/profile.php?id=100095054437735",
    },
    {
      label: "twitter",
      icon: "fa-brands fa-twitter",
      link: "https://twitter.com/Wealth_Makers_",
    },
    {
      label: "instagram",
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/wealth_makers_official/?igshid=Y2I2MzMwZWM3ZA",
    },
    {
      label: "tiktok",
      icon: "fa-brands fa-tiktok",
      link: "https://www.tiktok.com/@wealth_makers_official",
    },
  ];
  const lang = useContext(AppContext);
  return (
    <div className="bg-dark">
      <div className="border-t py-12 border-t-gray  ">
        <div className="container mx-auto lg:grid lg:grid-cols-5 ">
          <div className="col-span-2">
            <h4 className="text-2xl font-semibold my-6">تواصل معنا</h4>
            <div>
              <div className="flex gap-4 my-2">
                <div className="w-[40px] h-[40px] bg-gold rounded-full flex justify-center items-center">
                  <i className="fa-regular fa-envelope text-xl text-dark"></i>
                </div>
                <div>
                  <h6 className="text-lightgray text-sm m-0">
                    البريد الالكتروني
                  </h6>
                  <div>wealthmakers.helpcenter@gmail.com</div>
                </div>
              </div>
              <div className="flex gap-4 my-2">
                <div className="w-[40px] h-[40px] bg-gold rounded-full flex justify-center items-center">
                  <i className="fa-brands fa-whatsapp text-2xl text-dark"></i>
                </div>
                <div>
                 
                  <a
                    href="https://wa.me/message/IOYQFZS6IDWHC1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverGold"
                  >
                    {/* +49 1520 4845414 */}
                    <h6 className="text-lightgray text-sm m-0">واتس أب</h6>
                  </a>
                </div>
              </div>
              <div className="flex gap-4 my-2">
                <div className="w-[40px] h-[40px] bg-gold rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-location-dot text-xl text-dark"></i>
                </div>
                <div>
                  <h6 className="text-lightgray text-sm m-0">العنوان</h6>
                  <div>Konstanzenstrasse .64 90439 Nuremberg Germany</div>
                </div>
              </div>
            </div>
            <div className="flex my-6">
              {media.map((element) => (
                <a
                  href={element.link}
                  target="_blank"
                  rel="noreferrer"
                  key={element.label}
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-lg bg-gray mx-2  hover:text-gray hover:bg-[#ffffff] transition"
                >
                  <i className={`${element.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.5023372285364!2d11.0399905!3d49.437222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f56ee543dbfc7%3A0xf0aa75cabcc60947!2sKonstanzenstra%C3%9Fe%2064%2C%2090439%20N%C3%BCrnberg%2C%20Germany!5e0!3m2!1sen!2s!4v1692242514091!5m2!1sen!2s"
              className="rounded-xl w-full h-[200px] md:h-[250px] lg:h-[350px] "
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t-gold border-t py-3">
        <div className="container mx-auto  flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/108UDsPrCjCBLvy9WnQdQp3Qv3WAj95QM/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hoverGold"
            >
              سياسة الخصوصية
            </a>
            <a
              target="_blank"
              href="
            https://drive.google.com/file/d/16HD6pDIHZQBVQA0c12W4tNVJUZvBeY6x/view"
              rel="noopener noreferrer"
              className="hoverGold"
            >
              الشروط والاحكام
            </a>
            <Link to="/aboutus" className="hoverGold">
              من نحن
            </Link>
          </div>
          <div className="flex gap-3 items-center text-sm sm:text-base">
            جميع الحقوق محفوظة صناع الثروة 2023
            <span className="h-[20px] w-[20px] bg-gold text-dark font-semibold flex items-center justify-center rounded-full">
              C
            </span>
            <span className="text-gold">صناع الثروة 2023</span>
          </div>
          <div>
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
