/*Min ProjektSida*/
import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const IndexPage = ({ data }) => {
  // console.log('props', props);
  const projects = data.allContentfulProjektoversiktssida.edges;
  return (
    <Layout>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          <h1 style={{ textAlign: "center" }}>Projekt-Översikt</h1>
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            {projects.map(({ node }) => (
              <div
                key={node.title}
                style={{
                  border: "3px solid #5e4934",
                  padding: "20px",
                  maxWidth: "300px",
                }}
              >
                <h2 style={{ marginBottom: "10px" }}>
                  <Link to={`/labbar/${node.slug}`}>{node.title}</Link>
                </h2>
                <p style={{ marginBottom: "20px" }}>{node.beskrivning}</p>
                {node.screenshot &&
                  node.screenshot.file &&
                  node.screenshot.file.url && (
                    <img
                      src={node.screenshot.file.url}
                      alt={node.screenshot.title}
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  {node.imgs &&
                    node.imgs.map((img, index) => (
                      <div key={index}>
                        {img.file && img.file.url && (
                          <img
                            src={img.file.url}
                            alt={img.title}
                            style={{ maxWidth: "100%" }}
                          />
                        )}
                      </div>
                    ))}
                </div>
                <a
                  style={{ marginBottom: "20px" }}
                  href={node.linkToPublishPage}
                >
                  {node.linkToPublishPage}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allContentfulProjektoversiktssida {
      edges {
        node {
          beskrivning
          title
          slug
          linkToPublishPage
          imgs {
            file {
              url
            }
          }
          screenshot {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
