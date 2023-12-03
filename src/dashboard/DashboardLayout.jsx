import { Navigate, Outlet, useLocation } from "react-router";
import DashHeader from "../components/DashHeader";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate state={{ from: location }} replace to="/login" />;
  }
  return (
    <>
      <DashHeader />
      <div className="flex">
        <div className="hidden lg:block w-[250px] border-l rounded-tl-3xl border-gray">
          <Sidebar />
        </div>
        <div className="bashboardBg dashboarOutLet w-full">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
