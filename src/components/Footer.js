import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import "../styles/global.css";
// import Search from "./search";

// const Footer = () => (
// export default function Footer() {
const Footer = ({ data }) => {
  // <StaticQuery
  //   query={graphql`
  //     query SearchIndexQuery {
  //       siteSearchIndex {
  //         index
  //       }
  //     }
  //   `}
  //   render={(data) => (
  //     <Footer>
  //       <nav style={{ height: "100px" }}>
  //         <div style={{ whiteSpace: "nowrap" }}>
  //           <Link to="/omMig">Om mig</Link>
  //           <Link to="/kontakt">Kontakta mig</Link>
  //         </div>
  //         <div>
  //           <Search searchIndex={data.siteSearchIndex.index} />
  //         </div>
  //       </nav>
  //     </Footer>
  //   )}
  // />
  return (
    <>
      <nav style={{ height: "100px" }}>
        <div style={{ whiteSpace: "nowrap" }}>
          <Link to="/omMig">Om mig</Link>
          <Link to="/kontakt">Kontakta mig</Link>
        </div>
        <div>{/* <Search searchIndex={data.siteSearchIndex.index} /> */}</div>
      </nav>
    </>
  );
};
// );
// export const query = graphql`
//   query MyQuery {
//     siteSearchIndex {
//       index
//     }
//   }
// `;

export default Footer;
