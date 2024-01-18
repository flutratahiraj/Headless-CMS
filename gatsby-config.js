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
        accessToken: "REACT_APP_ACCESS_TOKEN",
        spaceId: "REACT_APP_SPACE_ID",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
  ],
};
