import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import Arbete from "../components/arbete";
import Utbildning from "../components/utbildning";
import {
  mainContainer,
  section,
  title,
  presentation,
  workGallery,
  gridContainer,
  gridItem,
} from "../styles/arbete.module.css";

const OmMig = ({ data }) => {
  console.log({ data });
  const aboutmeList = data.allContentfulOmMig.edges;

  return (
    <Layout>
      <main className={mainContainer}>
        {aboutmeList.map(({ node }) => (
          <div key={node.title} className={section}>
            <h1 className={title}>{node.title}</h1>
            <p className={presentation}>
              {documentToReactComponents(
                JSON.parse(node.presentationstext.raw)
              )}
            </p>

            {node.arbetslivserfarenhet &&
              node.arbetslivserfarenhet.length > 0 && (
                <div className={gridContainer}>
                  <div className={gridItem}>
                    <h2 className={title}>Erfarenhet</h2>
                    <div className={workGallery}>
                      {node.arbetslivserfarenhet.map((arbete, arbeteIndex) => (
                        <Arbete key={arbeteIndex} data={data} />
                      ))}
                    </div>
                  </div>

                  {node.utbildning && node.utbildning.length > 0 && (
                    <div className={gridItem}>
                      <h2 className={title}>Utbildning</h2>
                      <div className={workGallery}>
                        <Utbildning data={data} />
                      </div>
                    </div>
                  )}
                </div>
              )}
          </div>
        ))}
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulOmMig {
      edges {
        node {
          title
          utbildning
          arbetslivserfarenhet
          presentationstext {
            raw
          }
        }
      }
    }
    allContentfulUtbildning {
      nodes {
        title
        info {
          info
        }
        plats
        img {
          gatsbyImageData
        }
      }
    }
    allContentfulArbete {
      nodes {
        title
        info {
          info
        }
        imageStar {
          gatsbyImageData
        }
      }
    }
  }
`;

export default OmMig;
