import { Outlet } from "react-router";
import Footer from "../components/Footer";
import LandingHeader from "../components/LandingHeader";

const LandingPageLayout = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingPageLayout;
