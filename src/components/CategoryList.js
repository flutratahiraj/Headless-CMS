import React from "react";
import { navigate, graphql } from "gatsby";

const CategoryList = ({ data }) => {
  const categories = Array.from(
    new Set(data.allContentfulKaffefilosofi.nodes.map((post) => post.category))
  );

  return (
    <div>
      <h2>Välj en kategori:</h2>
      <select onChange={(e) => navigate(`/category/${e.target.value}/`)}>
        <option value="" disabled selected>
          Välj en kategori
        </option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulKaffefilosofi {
      nodes {
        category
      }
    }
  }
`;

export default CategoryList;
export const Head = () => <title>Category List</title>;
