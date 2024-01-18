import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";

const Project = ({ data }) => {
  return (
    <Layout>
      <main className="">
        <h1>{data.projektoversiktssida.title}</h1>
        <div class="divvv">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "evenly",
              marginTop: "15px",
              flexWrap: "wrap",
            }}
          >
            <p>{data.projektoversiktssida.beskrivning}</p>
            <img
              src={data.projektoversiktssida.screenshot.file.url}
              alt="bild"
              width="300"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "evenly",
                marginTop: "10px",
              }}
            >
              {data.projektoversiktssida.imgs &&
                data.projektoversiktssida.imgs.map((img, index) => (
                  <div key={index}>
                    {img.file && img.file.url && (
                      <img
                        src={img.file.url}
                        alt={img.title}
                        style={{ maxWidth: "80%" }}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>

          <p>{data.projektoversiktssida.linkToPublishPage}</p>
        </div>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    projektoversiktssida: contentfulProjektoversiktssida(slug: { eq: $slug }) {
      slug
      title
      beskrivning
      linkToPublishPage
      imgs {
        file {
          url
        }
      }
      screenshot {
        file {
          url
        }
      }
    }
  }
`;
export default Project;
