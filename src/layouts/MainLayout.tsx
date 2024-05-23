import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;