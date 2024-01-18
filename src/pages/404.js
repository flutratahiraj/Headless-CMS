import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const linkStyles = {
  color: "#1a0dab",
  textDecoration: "underline",
};

const NotFoundPage = () => {
  const isSwedish = true; // true = Swedish, false = English

  //English
  const englishTexts = {
    heading: "Oh no! This page is like my coffee - not found ☕",
    paragraph:
      "Oops! Looks like this page is as elusive as finding the perfect blend of coffee. We're sorry for the confusion.",
    link: (
      <>
        Feel free to explore some other pages or head back to the{" "}
        <Link to="/" style={linkStyles}>
          home page
        </Link>
        .
      </>
    ),
  };

  //Swedish
  const swedishTexts = {
    heading: "Åh nej! Den här sidan är som mitt kaffe - hittas inte ☕",
    paragraph:
      "Hoppsan! Det verkar som att den här sidan är lika svår att hitta som den perfekta kaffeblandningen. Vi ber om ursäkt för förvirringen.",
    link: (
      <>
        Utforska gärna några andra sidor eller gå tillbaka till{" "}
        <Link to="/" style={linkStyles}>
          startsidan
        </Link>
        .
      </>
    ),
  };

  const texts = isSwedish ? swedishTexts : englishTexts;

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>{texts.heading}</h1>
      <p style={paragraphStyles}>{texts.paragraph}</p>
      <p style={paragraphStyles}>{texts.link}</p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
