import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Mainlayout = () => {
  return (
    <div>
      <header className="">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="">
        <Outlet /> {/* Nested routes render here */}
      </main>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayout;
