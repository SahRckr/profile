const { themes } = require("prism-react-renderer");

const description = "Sahil Satishkumar's blog on software engineering, books and other things.";

module.exports = {
  title: "Sahil Satishkumar (@sahrckr)",
  tagline: "Software Engineering, and other things",
  url: "https://sahilsatishkumar.dev",
  baseUrl: "/",
  favicon: "/img/header.ico",
  organizationName: "SahRckr",
  projectName: "profile",
  scripts: [
    {
      src: "//gc.zgo.at/count.js",
      "data-goatcounter": "https://sahil.goatcounter.com/count",
      async: true,
    },
  ],
  themeConfig: {
    metadata: [
      { name: "description", content: description },
      { name: "author", content: "Sahil Satishkumar" },
      { property: "og:site_name", content: "Sahil Satishkumar" },
    ],
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    prism: {
      defaultLanguage: "javascript",
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    navbar: {
      title: "Hi, I'm Sahil",
      logo: {
        alt: "header-image",
        src: "/img/favicon.svg",
      },
      items: [
        { to: "blog", label: "Blog", position: "right" },
        { to: "books", label: "Books", position: "right" },
      ],
    },
    footer: {
      style: "light",
      copyright: `May the source be with you`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          feedOptions: {
            type: "all",
            description,
            copyright: `Copyright © ${new Date().getFullYear()} Sahil Satishkumar`,
          },
        },
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
