import { Route, Routes } from "react-router";
import LandingPageLayout from "./landingPage/LandingPageLayout";
import Home from "./landingPage/Home";
import "./App.css";
import "./all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeaderShip from "./landingPage/LeaderShip";
import MemberShip from "./landingPage/MemberShip";
import AboutUs from "./landingPage/AboutUs";
import ProductLanding from "./landingPage/ProductLanding";
import GoogleTranslate from "./components/GoogleTranslate";
import { createContext, useEffect, useState } from "react";
import Login from "./landingPage/Login";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./landingPage/components/LoadingSpinner";
import Dashboard from "./dashboard/Dashboard";
import DashboardLayout from "./dashboard/DashboardLayout";
import Active from "./landingPage/Active";
import Store from "./dashboard/Store/Store";
import axios from "axios";
import Analytic from "./dashboard/Analytic";
import Profile from "./dashboard/Profile/Profile";
import Cart from "./dashboard/Cart";
import Courses from "./dashboard/Courses/Courses";
import Packages from "./dashboard/Packages";
import EducationCategories from "./dashboard/Courses/EducationCategories";
import SingelCourse from "./dashboard/Courses/SingelCourse";
import Lives from "./dashboard/Lives";
import ProductPage from "./dashboard/productPage/MainComponent";
import FreeStore from "./dashboard/Store/FreeStore";
import Resetepassword from "./landingPage/Resetpassword";
import Resetecode from "./landingPage/Resetecode";
import NewPassword from "./landingPage/NewPassword";
import Marketing from "./dashboard/markiting/Marketing";
import MarketingTree from "./dashboard/markiting/MarketingTree";

// *******production
// export const route = "https://api.wealthmakers-fx.com/api/v1/";
export const route = "https://apitest.wealthmakers-fx.com/api/v1/";

export const AppContext = createContext();

export default function App() {
  const token = localStorage.getItem("token");
  const [transOpen, setTransOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    axios
      .get(`${route}store/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCart(res.data.data);
      })
      .catch((err) => {
        if (
          err?.response?.data?.message ===
            "you are not login,please login first" ||
          err?.response?.data?.msg === "token expired"
        ) {
          localStorage.clear();
        }
      });
  }, [update]);

  return (
    <AppContext.Provider
      value={{
        transOpen,
        setTransOpen,
        loading,
        setLoading,
        cart,
        setCart,
        update,
        setUpdate,
      }}
    >
      <>
        {loading && (
          <div className="fixed w-full h-full top-0 right-0 bg-[#000] z-[10000] bg-opacity-75 flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}
        <div
          className={`fixed flex justify-center items-center bg-opacity-90 z-[1000] bg-[#000] w-full h-full top-0 right-0  ${
            transOpen ? "block" : "hidden"
          }`}
        >
          <div className="bg-[#fff] p-12 rounded-lg relative">
            <div
              onClick={() => setTransOpen(false)}
              className="h-10 w-10 border border-gray rounded-full text-gray flex items-center justify-center absolute top-4 right-4 cursor-pointer hover:bg-dark hover:text-[#fff] transition"
            >
              X
            </div>
            <GoogleTranslate />
          </div>
        </div>
        <Toaster />
        <Routes>
          <Route path="" element={<LandingPageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/leaderShip" element={<LeaderShip />} />
            <Route path="/memberShip" element={<MemberShip />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/productsLanding" element={<ProductLanding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/active" element={<Active />} />
            <Route path="/resetepassword" element={<Resetepassword />} />
            <Route path="/resetecode" element={<Resetecode />} />
            <Route path="/newpassword" element={<NewPassword />} />
          </Route>
          <Route path="" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketing" element={<Marketing myLog={true} />} />
            <Route path="/marketing/team" element={<MarketingTree />} />
            <Route path="/marketing/log/:id" element={<Marketing />} />
            <Route path="/store" element={<Store />} />
            <Route path="/freestore" element={<FreeStore />} />
            <Route path="/store/:id" element={<ProductPage />} />
            <Route path="/analytic" element={<Analytic />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/education" element={<EducationCategories />} />
            <Route path="/education/:catId" element={<Courses />} />
            <Route
              path="/education/:catId/course/:courseId"
              element={<SingelCourse />}
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/lives" element={<Lives />} />
          </Route>
        </Routes>
      </>
    </AppContext.Provider>
  );
}
