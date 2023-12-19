const themes = require("prism-react-renderer");
const lightTheme = themes.github;

module.exports = {
  title: "Sahil Satishkumar (@sahrckr)",
  tagline: "Software Engineering, and other things",
  url: "https://sahilsatishkumar.dev",
  baseUrl: "/",
  favicon: "/img/header.ico",
  organizationName: "sahilsatishkumar", // Usually your GitHub org/user name.
  projectName: "profile", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      defaultLanguage: "javascript",
      lightTheme,
    },
    navbar: {
      title: "Hi, I'm Sahil",
      logo: {
        alt: "header-image",
        src: "/img/favicon.svg",
      },
      items: [
        { to: "hire-me", label: "Hire me ❗️", position: "right" },
        { to: "blog", label: "Blog", position: "right" },
        { to: "books", label: "Books", position: "right" },
        { to: "contact", label: "Contact", position: "right" },
      ],
    },
    footer: {
      style: "light",
      // links: [
      // 	{
      // 		title: "",
      // 		items: [
      // 			{
      // 				label: "Blog",
      // 				to: "blog",
      // 			},
      // 			{
      // 				label: "GitHub",
      // 				href: "https://github.com/sahrckr",
      // 			},
      // 			{
      // 				label: "Twitter",
      // 				href: "https://twitter.com/@sahrkcr",
      // 			},
      // 		],
      // 	},
      // ],
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
            copyright: `Copyright © ${new Date().getFullYear()} Sahil Satishkumar`,
          },
        },
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-176066372-1",
        anonymizeIP: false,
      },
    ],
  ],
};
