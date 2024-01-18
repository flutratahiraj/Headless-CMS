import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";

const Blog = ({ data }) => {
  return (
    <Layout>
      <main className="container">
        <h1 style={{ fontSize: "1em", alignItems: "center" }}>
          {data.blog.title}
        </h1>
        <div className="container2">
          <p>{documentToReactComponents(JSON.parse(data.blog.content.raw))}</p>
          <img src={data.blog.image.file.url} alt="bild" width="400" />
        </div>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    blog: contentfulKaffefilosofi(slug: { eq: $slug }) {
      slug
      title
      image {
        file {
          url
        }
      }
      content {
        raw
      }
    }
  }
`;
export default Blog;
