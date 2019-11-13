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

const Content = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Grid>
        <DocMenu data={data.allComponentMetadata} />

        <Section p={5}>
          <h1>Content Management</h1>
          <p>
            This wesbite uses a concept called headless CMS for content
            management. Basically, the CMS and front end are no longer connected
            to each other, freeing the developer and designer from constraints
            the come with traditional platforms like WordPress&nbsp;or Joomla.
          </p>
          <p>
            Our chosen cms is <a href="https://www.datocms.com/">Dato CMS</a>.
            We build content models in dato&nbsp;(e.g a groups page) fill in the
            form and content is then supplied to an API&nbsp;which then goes on
            to be used by the front end.
          </p>
          <p>
            A bonus of this system&nbsp;is that our content can be
            reused&nbsp;anywhere. For example, we may choose to make a native
            app one day. The app can just use the content from Dato. This saves
            us money because we only need to manage one piece of content.
          </p>
        </Section>
      </Grid>
    </Layout>
  );
};

export default Content;

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
