import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Section from "./Section";
import Container from "./Container";
import ArticleCard from "./ArticleCard";
import { Box, Heading } from "rebass/styled-components";

/**  A componet for displaying a list of case studies if case studies are enabled on the websites */
const CaseStudyList = props => {
  const data = useStaticQuery(graphql`
    query caseStudyQuery {
      file(relativePath: { eq: "headerImageDefault.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allDatoCmsCaseStudy(limit: 3) {
        edges {
          node {
            title
            subtitle
            slug
            headerImage {
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
  `);

  return (
    <Section>
      <Container>
        <Heading
          as="h2"
          width={1}
          fontFamily="heading"
          fontWeight="500"
          sx={{ textTransform: "uppercase" }}
          fontSize={[5, 5]}
          my={4}
        >
          Latest Case Studies
        </Heading>

        {data.allDatoCmsCaseStudy.edges.map(({ node }) => {
          const image = node.headerImage || {};

          return (
            <ArticleCard
              width={300}
              slug={`/guide/${node.slug}`}
              title={node.title}
              subTitle={node.subtitle}
              image={image}
              m="0"
              mt={3}
              mr={[0, 3]}
              key={node.slug}
            />
          );
        })}
      </Container>
    </Section>
  );
};

export default CaseStudyList;
