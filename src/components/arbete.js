import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Arbete = ({ data }) => {
  console.log({ data });
  const nodes = data.allContentfulArbete.nodes;

  // };

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
      {console.log(data.allContentfulArbete)}
      {nodes.map((node, index) => (
        <div style={styles.thumbnail} key={index}>
          <h1 style={styles.title}>{node.title}</h1>
          <div style={styles.content}>
            <p style={styles.text}>{node.info.info}</p>
            <GatsbyImage
              image={getImage(node.imageStar)}
              style={styles.image.getsbyImageData}
              alt={node.title}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Arbete;
