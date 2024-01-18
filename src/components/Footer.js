import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Footer() {
  return (
    <>
      <nav style={{ height: "100px" }}>
        <div style={{ whiteSpace: "nowrap" }}>
          <Link to="/omMig">Om mig</Link>
          <Link to="/kontakt">Kontakta mig</Link>
        </div>
      </nav>
    </>
  );
}
