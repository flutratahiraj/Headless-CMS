/*Min SÖK Sida*/
/*Här försökte jag på nytt att fixa fökfunktionen till min webbsida*/
/*Nya problem som dök upp:
Den finns inte i grapthql längre. Varför vet jag inte men du satt med mig och såg att jag hade det vid ett tillfälle. Har kört installationer, följt dokumentering och Jonathans video. Vet inte varför det inte funkar.
*/
/*Längst ner skriver jag till min gamla kod. Då jag tänkte att sökrutan skulle vara nere i footern.
Och fick det att funka innan den spottade ut ett konstigt.json fil och kraschade.
*/

import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Search from "../components/search";

const Sok = () => {
  return (
    <Layout>
      <div>
        <h1>Hej!</h1>
        {/* <Search searchIndex={data.siteSearchIndex.index} /> */}
        <Search />
      </div>
    </Layout>
  );
};
// export const query = graphql`
//   query MyQuery {
//     siteSearchIndex {
//       index
//     }
//
// `;
export default Sok;

/*GAMLA FOOTER DÄR sökfunktionen funkade en kort stund!
//import React from "react";
//import { StaticQuery, graphql, Link } from "gatsby";
//import "../styles/global.css";
//import Search from "./search";

// const Footer = () => (

  // <StaticQuery
  //   query={graphql`
  //     query SearchIndexQuery {
  //       siteSearchIndex {
  //         index
  //       }
  //     }
  //   `}
  //   render={(data) => (
  //
  //       <nav style={{ height: "100px" }}>
  //         <div style={{ whiteSpace: "nowrap" }}>
  //           <Link to="/omMig">Om mig</Link>
  //           <Link to="/kontakt">Kontakta mig</Link>
  //         </div>
  //         <div>
  //           <Search searchIndex={data.siteSearchIndex.index} />
  //         </div>
  //       </nav>
  //
  //   )}
  // />
  //export default Footer;
*/
