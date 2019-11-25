require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://yourdoman.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const path = require("path");

module.exports = themeOptions => {
  const {
    siteUrl,
    title,
    description,
    author,
    image
  } = themeOptions.siteMetadata;
  const datacms = themeOptions.datocms || {};

  datacms.apiToken = datacms.apiToken || "";
  datacms.previewMode = datacms.previewMode || false;

  return {
    siteMetadata: {
      siteUrl: siteUrl || "",
      title: title || "",
      description: description || "",
      author: author || "",
      image: image || ""
    },
    plugins: [
      "gatsby-transformer-react-docgen",
      "gatsby-plugin-styled-components",

      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/Images/`,
          ignore: [`**/\.*`] // ignore files starting with a dot
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `components`,
          path: `${__dirname}/src/components/`,
          ignore: [`**/\.*`] // ignore files starting with a dot
        }
      },
      // "gatsby-plugin-sitemap" - disabled due to bug preventing createPagesStatefully,
      "gatsby-transformer-sharp",
      {
        resolve: `gatsby-source-datocms`,
        options: {
          // You can find your read-only API token under the Settings > API tokens
          // section of your administrative area:
          apiToken: datacms.apiToken,

          // If you are working on development/staging environment, you might want to
          // preview the latest version of records instead of the published one:
          previewMode: datacms.previewMode,

          // Disable automatic reloading of content when some change occurs on DatoCMS:
          disableLiveReload: false,

          // Custom API base URL
          apiUrl: "https://site-api.datocms.com",

          // Setup locale fallbacks
          // In this example, if some field value is missing in Italian, fall back to English
          localeFallbacks: {
            it: ["en"]
          }
        }
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          resolveEnv: () => NETLIFY_ENV,
          env: {
            production: {
              sitemap: `${siteUrl}/sitemap.xml`,
              policy: [{ userAgent: "*" }]
            },
            "branch-deploy": {
              policy: [{ userAgent: "*", disallow: ["/"] }],
              sitemap: null,
              host: null
            },
            "deploy-preview": {
              policy: [{ userAgent: "*", disallow: ["/"] }],
              sitemap: null,
              host: null
            }
          }
        }
      },
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: [
            `/about/privacy-policy/`,
            "/about/cookie-policy/",
            "/about/terms-and-conditions/",
            "/docs/",
            "/docs/*"
          ]
        }
      },
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: title,
          short_name: `C21Finance`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#BEA`,
          display: `standalone`
          // icon: `${__dirname}/src/Images/icon.png`
        }
      },
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: path.join(__dirname, "src", "pages")
        }
      },
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: path.join(__dirname, "src", "docs")
          // process.env.NODE_ENV === `development`
          //   ? path.join(__dirname, "src", "docs")
          //   : ""
        }
      },

      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
          // replace with the name of your theme
          modules: ["gatsby-theme-datocms"]
        }
      },

      {
        resolve: "gatsby-plugin-react-helmet-canonical-urls",
        options: {
          siteUrl
        }
      }
    ]
  };
};
