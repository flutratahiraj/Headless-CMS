/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `lekplatsGatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "OmMig",
        link: "/omMig",
      },
      {
        name: "Contact",
        link: "/kontakt",
      },
      /*  {
      name:'Category',
      link:'/category'
      }*/
    ],
  },

  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "LLfUL225ByvjBTLDM6iScsby5y9mQokeQerj9lgWJb4",
        spaceId: "2iaxjppo93wa",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",

    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fält att indexera
        fields: ["title", "beskrivning", "slug"],

        // Hur man löser varje fälts värde för en understödd nodtyp
        resolvers: {
          contentfulProjektoversiktssida: {
            title: (node) => node.title,
            beskrivning: (node) => node.beskrivning,
            slug: (node) => node.slug,
          },
        },
      },
    },
  ],
};
