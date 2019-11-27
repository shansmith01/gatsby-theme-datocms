import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { Box, Heading, Text, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/ui/Layout";
import Nav from "../components/ui/Nav";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { typography, color } from "styled-system";
import format from "date-fns/format";

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
    body,
    headerImage,
    category,
    meta,
    author
  } = data.datoCmsBlog;

  return (
    <Layout>
      <Nav />
      <HelmetDatoCms seo={seoMetaTags} />

      <Section mb={5}>
        <Box mx="auto" maxWidth="maxWidth">
          <Flex m={-4}>
            <Box as="article" width={[1, 2 / 3, 2 / 3]} p={4}>
              <Box my={3}>
                <BlogHomeLink to="/blog">&#8592; Blog Home</BlogHomeLink>
              </Box>
              <Heading as="h1" fontSize={7} mb={3}>
                {title}
              </Heading>
              <Text mb={4}>
                {format(new Date(meta.createdAt), "dd LLLL, yyyy")} &#183; {""}
                <strong>{author.name}</strong>
              </Text>
              <Img
                fluid={headerImage.fluid}
                alt={headerImage.alt}
                style={{ maxWidth: "526px" }}
              />
              <Box mt={3} dangerouslySetInnerHTML={{ __html: body }} />
            </Box>
            <Box
              as="aside"
              textAlign="right"
              width={[1, 1 / 3, 1 / 3]}
              mt={5}
              p={4}
            >
              <Heading
                as="h3"
                py={3}
                fontSize={5}
                sx={{
                  borderTop: "5px solid",
                  borderTopColor: "grey"
                }}
              >
                More Articles
              </Heading>
              {data.allDatoCmsBlog.edges.map(({ node }) => (
                <Link to={`/blog/${node.slug}`}>
                  <Box mb={4}>
                    <Heading
                      textAlign="right"
                      fontSize={3}
                      lineHeight={3}
                      mb={2}
                      sx={{ width: "100%" }}
                    >
                      {node.title}
                    </Heading>
                    <Text fontSize={2}>
                      {format(new Date(node.meta.createdAt), "dd LLLL yyyy")}
                    </Text>
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
    datoCmsBlog(slug: { eq: $slug }) {
      title
      body
      meta {
        createdAt
      }
      author {
        name
      }
      category {
        title
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      headerImage {
        fluid(
          maxWidth: 526
          maxHeight: 526
          imgixParams: { fm: "jpg", auto: "compress", w: "526" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    allDatoCmsBlog {
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
