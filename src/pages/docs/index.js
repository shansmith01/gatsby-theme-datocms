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

const index1 = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Grid>
        <DocMenu data={data.allComponentMetadata} />
        <Section p={5}>
          <h1>Jules Website docs</h1>

          <h2>Overview</h2>
          <p>
            The Century 21 and Flamingo websites are designed to be lightening
            fast using a modern development stack which uses technology in use
            by the like of Netflix, Facebook and Expedia. The result for user is
            a lighening fast experience with modern interactions.
          </p>
          <p>
            For content managers the website is managed by a headless CMS called
            Dato CMS. This simplifies content management comared to something
            like Joomla or Wordpress and reduces content management is simply
            filling out a form. THe display of the site is a seperate concern.
          </p>
          <p>
            From a developers point of view, the site uses modern development
            practices like repository management with git, continuous
            development and severless stack.
          </p>
        </Section>
      </Grid>
    </Layout>
  );
};

export default index1;

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
