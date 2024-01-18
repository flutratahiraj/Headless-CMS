import { graphql } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Layout from "../components/layout";

const CategoryPage = ({ data }) => {
  // const blogPosts = data.allContentfulBlog ? data.allContentfulBlog.nodes : [];
  const categoryData = data.allContentfulKaffefilosofi.nodes;

  return (
    <Layout>
      <main className="">
        <h1>Vald Kategori: {categoryData[0].category}</h1>

        {data.allContentfulKaffefilosofi.nodes.map(
          ({ id, slug, title, category, content, image }) => (
            <div key={id}>
              {/* <h1>
            <Link to={`/category/${slug}`}>{title}</Link>
          </h1> */}

              <div className="container2">
                <p>{documentToReactComponents(JSON.parse(content.raw))}</p>
                {image && image.file && image.file.url && (
                  <img src={image.file.url} alt="bild" width="400" />
                )}
              </div>
            </div>
          )
        )}
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($category: String!) {
    allContentfulKaffefilosofi(filter: { category: { eq: $category } }) {
      nodes {
        id
        slug
        title
        category
        content {
          raw
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

export default CategoryPage;
export const Head = () => <title>Home Page</title>;
