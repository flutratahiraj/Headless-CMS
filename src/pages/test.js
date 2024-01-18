/*Min CoffeeSida*/
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import CategoryList from "../components/CategoryList";

const Test = ({ data }) => {
  return (
    <Layout>
      <main className="full-height-container">
        <h1>Kaffefilosofi: Utforska Livet, Träning och Kaffekonsumtion</h1>
        {/* Inkludera CategoryList-komponenten här */}
        <CategoryList data={data} />
        <ul>
          {data.allContentfulKaffefilosofi.edges.map(({ node }) => (
            <li key={node.slug}>
              <h2>
                <span className="coffee-icon">&#9749;</span>
                <Link to={`/blogs/${node.slug}`}>{node.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyBlogQuery {
    allContentfulKaffefilosofi {
      edges {
        node {
          title
          slug
          category
        }
      }
    }
    allContentfulKaffefilosofi {
      nodes {
        category
      }
    }
  }
`;

export default Test;
