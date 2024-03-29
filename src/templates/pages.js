import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { Box } from "rebass/styled-components";

import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";

import Container from "../components/ui/Container";

// Template for producing all the pages in the datoCMS page model
const LoanPagesTemplate = ({ data, location }) => {
  const { seoMetaTags, title, content } = data.datoCmsPage;
  // const image = headerImage || {};
  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <Header title={title} />
      <Section>
        <Container>
          <Box width={[1, 2 / 3, 2 / 3]} p={3}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Box>
          <Box as="aside" width={[1, 1 / 3, 1 / 3]} p={3}>
            Something here in the sidebar
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default LoanPagesTemplate;

export const query = graphql`
  query PageQuery($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      title
      subtitle
      content
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      # headerImage {
      #   fluid(
      #     maxWidth: 2000
      #     maxHeight: 1400
      #     imgixParams: { fm: "jpg", auto: "compress" }
      #   ) {
      #     ...GatsbyDatoCmsFluid
      #   }
      # }
    }
  }
`;
