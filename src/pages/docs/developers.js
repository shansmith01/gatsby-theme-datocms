import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Section from "../../components/ui/Section";
import Layout from "../../components/ui/Layout";

import DocMenu from "../../components/ui/DocMenu";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const Developers = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Grid>
        <DocMenu data={data.allComponentMetadata} />

        <Section p={5}>
          <h1>Developers</h1>
          <h2>Overview</h2>
          <p>
            This website is developed with a static website and app generator
            called <a href="https://gatsbyjs.org">Gatsby</a>. Gatsby is based
            on&nbsp;React which is developed by the team at Facebook.
          </p>
          <p>
            <strong>Static Website Generator?</strong>
          </p>
          <p>
            Basically traditional websites send a request from the&nbsp;user's
            browser to a server where the website is compiled and then send back
            to the user's browser. A static website pre complies the website and
            shows the user a premade website from a CDN. The result is a massive
            time saving on the user side.
          </p>
          <p>
            Gatsby is unique in that once the static site is shown to the user,
            it turns into a react app and can do everything a "normal" database
            driven site can do.
          </p>
          <h2>Required knowledge</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>JSX</li>
            <li>GraphQL (for API work)&nbsp;</li>
          </ul>
          <h2>Infrastructure</h2>
          <ul>
            <li>Github for repository&nbsp;hosting</li>
            <li>
              <a href="https://www.netlify.com/">Netlify</a>
              &nbsp;for continuous&nbsp;development and "hosting"
            </li>

            <li>Google Tag Manager/Google Analytics</li>
          </ul>
          <h2>Development workflow</h2>
          <ol>
            <li>
              Developer clones our GitHub&nbsp;repository <em>*Add in </em>
              link
              <em> and make private</em>
            </li>
            <li>
              Developer runs and NPM install and runs gatsby build, which
              provides as a local dev environment with hot reloading
            </li>
            <li>
              Changes to the website are made on a branch of the GitHub
              repository.
            </li>
            <li>
              On pull request, Netlify, which is integrated with GitHub, will
              create a test build on a development URL
            </li>
            <li>
              Assuming the build completes and the website has physically tested
              okay, the branch can be merged and the actual website will be
              built and published.
            </li>
          </ol>
          <h2>Dependencies</h2>
          <p>
            There are a bunch of Gatsby based plugins to expend functionality
            which are pretty self-explanatory. In addition,&nbsp;these libraries
            are used
          </p>
          <ul>
            <li>
              <a href="https://www.styled-components.com/">
                Styled Components
                <strong> -&nbsp;</strong>
              </a>
              For component-based CSS&nbsp;
            </li>
            <li>
              <a href="https://www.styled-components.com/">Google maps react</a>{" "}
              - For map display on hostel pages
            </li>
            <li>React player - For video display</li>
            <li>
              React oembed&nbsp;container - For adding in
              embedded&nbsp;Pinterest, Instagram etc
            </li>
          </ul>

          <h2 id="hosting">Hosting</h2>
          <p>
            This website is a a little bit different in that. There is not a
            traditional server running. Instead our website is a static website
            and when we make changes, either when the code or content has been
            changed, the site is rebuilt. This build process creates all of the
            webpages and then puts them on a CDN rather than a traditional
            server. Because the wesbite is highly distributed, it's unlikely
            that all CDN's in the world could go down resulting in high uptimes
          </p>
          <h3>What can go wrong?</h3>
          <p>
            Not much on the server side. But here is a list of problems,
            outcomes and solutions
          </p>
          <ul>
            <li>
              Codeing error: 99% of the time the build fails, result is that the
              most recent version of the site is not over written and continues
              to run normally. Solution is to check build logs and fix code.
            </li>
            <li>
              DatoCMS build fails: Likely cause is that data got deleted or was
              not correctly filled out. Result is as above. Solution is to check
              build logs and fix code.
            </li>
          </ul>
          <h3>Site down?</h3>
          <p>
            In the event that our wesbite is down, the first thing is to check
            the <a href="https://www.netlifystatus.com/">Netlify status page</a>
            . If the issue is a CDN issue then it's likely not just us and the
            issue will be resvoled shortly.
          </p>
          <p>
            Otherwise,{" "}
            <a href="https://www.netlify.com/support/">
              Contact support via the form
            </a>
          </p>
          <p>
            Aside from Netlify, other failure points include. Cloudflare or DNS
            provider and our registrar{" "}
          </p>
        </Section>
      </Grid>
    </Layout>
  );
};

export default Developers;

export const pageQuery = graphql`
  query {
    allComponentMetadata {
      edges {
        node {
          id
          displayName
        }
      }
    }
  }
`;
