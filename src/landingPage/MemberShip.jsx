import { useEffect, useState } from "react";
import banner from "../assets/panars/Member Benifits.webp";
import LoadingSpinner from "./components/LoadingSpinner";
import axios from "axios";
import { route } from "../App";
import PackageSlider from "./components/PackageSlider";
const MemberShip = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios
      .get(`${route}education/packages`)
      .then((res) => setPackages(res.data.data));
  }, []);
  return (
    <div>
      <div className="bannerBg py-8">
        <div className="container mx-auto ">
          <img src={banner} alt="banner" className="rounded-2xl my-4" />
        </div>
      </div>

      <div className="mainHeading">
        <h1>الباقات</h1>
      </div>
      <div className="">
        {packages?.length ? (
          <PackageSlider packages={packages} />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default MemberShip;
