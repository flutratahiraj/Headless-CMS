/*Min StartSida*/
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  const projects = data.allContentfulKaffefilosofi.edges;
  return (
    <Layout>
      <Helmet>
        <title>{data.contentfulStartsida.rubrik}</title>
        <meta
          name="description"
          content={data.contentfulStartsida.presentationstext}
        />
      </Helmet>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          paddingLeft: "100px",
          paddingRight: "100px",
          marginBottom: "90px",
        }}
      >
        <h1>{data.contentfulStartsida.rubrik}</h1>
        <p>{data.contentfulStartsida.presentationstext}</p>
        <img
          src={data.contentfulStartsida.image.file.url}
          alt="bild"
          width="200"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        />

        {/* Ignorera för just nu!!! */}
        <ul>
          {projects.map((node) => (
            <div key={node.slug} className="border rounded p-4 mb-4">
              {console.log(node.title)}
              <h1>
                <Link to={node.slug}>{node.title}</Link>
              </h1>

              <h3>{node.title}</h3>

              {node.image && node.image.file && node.image.file.url && (
                <img
                  src={node.image.file.url}
                  alt={node.image.description || node.image.title || ""}
                  style={{ maxWidth: "50%" }}
                />
              )}
              <div>
                <p>{node.description}</p>
                <h1>{/* <Link to={blog.slug}>Läs mer</Link> */}</h1>
              </div>
              {/* <div>
                {documentToReactComponents(JSON.parse(blog.content.raw))}
              </div> */}
            </div>
          ))}
        </ul>

        <h1>{/* <Link to={node.slug}>Läsmer</Link> */}</h1>
        {/* <img src={data.contentfulStartsida.image.file.url} alt="" />S */}
        {/* staticimage- element. importera den.  */}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyBlogQueryAndIndexPageQuery {
    contentfulStartsida {
      rubrik
      presentationstext
      image {
        file {
          url
        }
      }
    }

    allContentfulKaffefilosofi {
      edges {
        node {
          title
          slug
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
    }
  }
`;

export default IndexPage;
