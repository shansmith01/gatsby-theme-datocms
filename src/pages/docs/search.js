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

const Search = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Grid>
        <DocMenu data={data.allComponentMetadata} />

        <Section>
          <h1>Site Search</h1>
          <p>
            Site search on the website is provided by Algolia. This solution was
            chosen due to the fact that the site uses serverless technology and
            need to rely on some external library for indexing and searching
            data.
          </p>
          <p>
            Algolia also provides data on searches to we can figure out demand
            for content that does and does not exist
          </p>
          <p>Access to algolia is via the webmaster@nomadsworld.com address</p>
        </Section>
      </Grid>
    </Layout>
  );
};

export default Search;

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
