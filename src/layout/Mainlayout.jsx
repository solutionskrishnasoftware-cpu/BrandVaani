import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="relative overflow-visible">
      
      {/* Navbar */}
      <header className="relative overflow-visible z-[999]">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative z-[1] overflow-visible">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative overflow-visible">
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayout;
