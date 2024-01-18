// KontaktMig.js
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const KontaktMig = ({ data }) => {
  const contact = data.allContentfulKontakt.edges;
  const imageData = getImage(contact[0].node.image);

  return (
    <Layout>
      <main
        className="container"
        style={{ minHeight: "100vh", position: "relative" }}
      >
        {contact.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.name}</h3>
            <p>Email: {node.email}</p>
            <p>Telefonnummer: {node.telnr}</p>
            <ul>
              {node.socialmedia.map((sNode, index) => (
                <li key={index}>
                  <a href={sNode} target="_blank">
                    {sNode}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      {/* Rendera bilden längst ner på sidan, utanför main */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <GatsbyImage
          image={imageData}
          alt={contact[0].node.name}
          style={{ width: "29px", height: "29px" }}
        />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulKontakt(filter: { name: { eq: "Flutra" } }) {
      edges {
        node {
          image {
            gatsbyImageData(width: 29, height: 29, layout: FIXED)
          }
          email
          socialmedia
          telnr
          name
          id
        }
      }
    }
  }
`;

export default KontaktMig;
