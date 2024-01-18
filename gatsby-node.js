const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Define a template for blog post
  const blogPost = path.resolve("./src/templates/blog-post.js");
  const categoryPost = path.resolve("./src/templates/category-post.js");
  // Definierar sökvägen där jag har sidan som ska filtrera efter kategori
  const projectPost = path.resolve("./src/templates/project-post.js");
  const OmMigPost = path.resolve("./src/pages/omMig.js");

  const result = await graphql(`
  {
        allContentfulKaffefilosofi {
          nodes {
            title
            slug
            category
          }
        }
      }`
  );

  const resultProject = await graphql(`
  {
    allContentfulProjektoversiktssida {
          nodes {
            title
            slug
          }
        }
      }`
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful blog posts`,
      result.errors
    );
    return;
  }

  if (resultProject.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful project posts`,
      resultProject.errors
    );
    return;
  }

  const blogs = result.data.allContentfulKaffefilosofi.nodes;
  if (blogs.length > 0) {
    blogs.forEach((blog) => {
      createPage({
        path: `/blogs/${blog.slug}/`,
        component: blogPost,
        context: {
          slug: blog.slug,
        },
      });
    });
  }

  const category = result.data.allContentfulKaffefilosofi.nodes;
  if (category.length > 0) {
    category.forEach((blog) => {
      createPage({
        path: `/category/${blog.category}/`,
        component: categoryPost,
        context: {
          category: blog.category,
        },
      });
    });
  }

  const projects = resultProject.data.allContentfulProjektoversiktssida.nodes;
  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        path: `/labbar/${project.slug}/`,
        component: projectPost,
        context: {
          slug: project.slug,
        },
      });
    });
  }

};
