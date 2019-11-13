import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { Box } from "rebass/styled-components";

import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

// Template for producing all the pages in the blog category

const BlogPagesTemplate = ({ data }) => {
  const {
    seoMetaTags,
    title,
    body,
    headerImage,
    subtitle,
    category
  } = data.datoCmsBlog;
  const image = headerImage || {};
  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <Header
        title={title}
        image={image}
        subTitle={subtitle}
        category={category.title}
      />
      <Section>
        <Container>
          <Box width={[1, 2 / 3, 2 / 3]} p={3}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Box>
          <Box as="aside" width={[1, 1 / 3, 1 / 3]} p={3} bg="lightGrey">
            Something here
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default BlogPagesTemplate;

export const query = graphql`
  query BlogPageQuery($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      title
      body
      subtitle
      category {
        title
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      headerImage {
        fluid(
          maxWidth: 2000
          maxHeight: 1400
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
