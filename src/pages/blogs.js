import { graphql } from "gatsby";
import React from "react";
import Container from "../components/ui/Container";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Section from "../components/ui/Section";

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <Header title="Guides" subTitle="All the blog/guides will show here" />
      <Section bg="lightGrey">
        <Container>
          <p>Test</p>
        </Container>
      </Section>
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query GuideIndexQuery {
    allDatoCmsArticle {
      edges {
        node {
          title
          categories {
            name
          }
          slug

          featuredMedia {
            fluid(
              maxWidth: 600
              maxHeight: 400
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
