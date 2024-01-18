import React from "react";
// import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Arbete = ({ data }) => {
  const nodes = data.allContentfulUtbildning.nodes;
  // Inline CSS-stilar som en JavaScript-objekt
  const styles = {
    thumbnail: {
      maxWidth: "400px" /* Justera bredden efter behov */,
      margin: "20px",
      border: "1px solid #ccc",
      padding: "30px",
    },
    content: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    image: {
      maxWidth: "50%",
      height: "auto",
      display: "block",
    },
    text: {
      marginTop: "10px",
      fontSize: "14px",
    },
    title: {
      fontSize: "20px",
      marginBottom: "10px",
    },
  };

  return (
    <>
      {/* Loopa igenom varje nod och visa titel, bild och text */}
      {nodes.map((node, index) => (
        <div style={styles.thumbnail} key={index}>
          <h1 style={styles.title}>{node.title}</h1>
          <div style={styles.content}>
            <p style={styles.text}>{node.info.info}</p>
            <GatsbyImage
              image={getImage(node.img)}
              style={styles.image.getsbyImageData}
              // src={node.img.file.url}
              alt={node.title}
            />
          </div>
        </div>
      ))}
    </>
  );
};
// export const query = graphql`
//   query MyQuery {
//     allContentfulUtbildning {
//       nodes {
//         title
//         info {
//           info
//         }
//         img {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

export default Arbete;
