import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ArticleCard from "../components/ui/ArticleCard";

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <Header title="Guides" subTitle="All the blog/guides will show here" />
      <Section bg="lightGrey">
        <Container>
          {data.allDatoCmsBlog.edges.map(({ node }) => {
            const image = node.featuredMedia || {};

            return (
              <ArticleCard
                width={300}
                slug={`/blog/${node.slug}`}
                title={node.title}
                category={node.category.title}
                image={image}
              />
            );
          }) || null}
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