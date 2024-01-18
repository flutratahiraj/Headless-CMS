// Layout.js
import React, { useEffect } from "react";
import Navbar from "./navbar";
import "../styles/global.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer style={{ backgroundColor: "blue", color: "white" }} />
    </div>
  );
}
