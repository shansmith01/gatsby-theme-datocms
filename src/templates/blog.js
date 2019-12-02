import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { Box, Heading, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/ui/Layout";
import { H1, H4 } from "../components/styles/Typography";
import Nav from "../components/ui/Nav";
import Section from "../components/ui/Section";
import { typography, color } from "styled-system";
import BlogByLine from "../components/ui/BlogByLine";

const BlogHomeLink = styled(Link)`
  ${color};
  ${typography};
  margin-bottom: 5rem;
`;

BlogHomeLink.defaultProps = {
  color: "primary",
  fontSize: 2
};

// Template for producing all the pages in the blog category

const BlogPagesTemplate = ({ data }) => {
  const {
    seoMetaTags,
    title,
    content,
    featuredMedia,
    meta,
    author,
    date
  } = data.datoCmsArticle;

  console.log(featuredMedia);

  return (
    <Layout>
      <Nav />
      <HelmetDatoCms seo={seoMetaTags} />

      <Section my={[2, 4]}>
        <Box mx="auto" maxWidth="maxWidth">
          <Flex m={[0, -4]} flexWrap="wrap">
            <Box as="article" flex="1 1 70%" p={[3, 4]}>
              <Box my={[2]}>
                <BlogHomeLink to="/blog">&#8592; Blog Home</BlogHomeLink>
              </Box>
              <H1
                dangerouslySetInnerHTML={{
                  __html: title
                }}
              />
              <BlogByLine
                mb="2.5rem"
                date={date ? date : meta.createdAt}
                name={author.name}
              />
              {featuredMedia && (
                <Img
                  fluid={featuredMedia.fluid}
                  alt={featuredMedia.alt}
                  style={{ maxWidth: "526px" }}
                />
              )}

              <Box mt="2.5rem" dangerouslySetInnerHTML={{ __html: content }} />
            </Box>
            <Box
              as="aside"
              textAlign="right"
              // width={[1, 1 / 3, 1 / 3]}
              flex="1 1 300px"
              mt={4}
              p={[3, 4]}
            >
              <Heading
                as="h3"
                py={4}
                fontSize={5}
                sx={{
                  borderTop: "5px solid",
                  borderTopColor: "grey"
                }}
              >
                More Articles
              </Heading>
              {data.allDatoCmsArticle.edges.map(({ node }) => (
                <Link to={`/blog/${node.slug}`}>
                  <Box mb="2.5rem">
                    <H4
                      dangerouslySetInnerHTML={{
                        __html: node.title
                      }}
                    />
                    <BlogByLine date={node.meta.createdAt} fontSize={2} />
                  </Box>
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>
      </Section>
    </Layout>
  );
};

export default BlogPagesTemplate;

export const query = graphql`
  query BlogPageQuery($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      title
      content
      date
      meta {
        createdAt
      }
      author {
        name
      }
      categories {
        name
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      featuredMedia {
        fluid(
          maxWidth: 526
          maxHeight: 526
          imgixParams: { fm: "jpg", auto: "compress", w: "526" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    allDatoCmsArticle(limit: 5) {
      edges {
        node {
          title
          slug
          meta {
            createdAt
          }
        }
      }
    }
  }
`;
