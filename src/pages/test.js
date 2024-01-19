/*Min CoffeeSida*/

/*anledning till varför den heter test.js är pga att den skulle bli
 en-test miljö att jobba med men tid rann iväg och det fick stå kvar.*/

/*Renderar alla mina bloginlägg om kaffe från contentful Listar dom.
Sedan kan man också filtrera genom kategorier och så kommer man till en annan
sida som visar upp dom berorda inläggen för den kategorin. (den sidan och mallen
heter category-post.js) blog-post.js är mallen för ETT blogg-inlägg.
Dessa har lite annorlunda stilsättning för att variera lite.  */

/*Kategoriserings komponenten kommer ifrån CategoryList.js*/
/*Hemlet används för sökoptimering, detta kan utvecklas*/
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import CategoryList from "../components/CategoryList";
import { Helmet } from "react-helmet";

const Test = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>
          Kaffefilosofi: Utforska Livet, Träning och Kaffekonsumtion
        </title>
        {/* <title>{data.allContentfulKaffefilosofi.edges[0].node.title}</title> */}
        <meta
          name="description"
          content="Här kan du utforska tankar om livet, träning och
           kaffekonsumtion. Upptäck våra senaste blogginlägg och få inspiration för din kaffekultur."
        />
      </Helmet>
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
