import React from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import { graphql } from "gatsby";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

// import CaseStudyList from "../components/ui/CaseStudyList";

export default ({ data, pageContext }) => {
  const { title, subtitle } = data.datoCmsHomePage;
  console.log(pageContext);

  return (
    <Layout>
      <Header bg="none" title={title} subTitle={subtitle} />

      <Section bg="lightGrey" py={4}>
        <Container>
          <p>
            The Glenvar Bale Direct System (BDS) is a bolt-on kit that creates
            an interface between a combine harvester and a baler, enabling
            broadacre farmers to carry out the harvesting and baling processes
            in a single operation, without the residue coming into contact with
            the ground. Broadacre farmers using BDS can:
          </p>
          <ul>
            <li>
              Save time, fuel and labour by running the harvesting and baling
              operations simultaneously
            </li>
            <li>Produce clean, uncontaminated bales as a marketable product</li>
            <li>
              Capture 98% of all weed seeds in the bale Reduce baler maintenance
            </li>
          </ul>
        </Container>
        {/* <Container p={3}> */}
        {/* <Box width={1}>
            <Heading
              as="h2"
              width={1}
              fontFamily="heading"
              fontWeight="500"
              sx={{ textTransform: "uppercase" }}
              fontSize={[5, 5]}
              mb={4}
            >
              Latest Articles
            </Heading>
          </Box>
          {data.allDatoCmsBlog.edges.map(({ node }) => {
            const image = node.headerImage || {};

            return (
              <ArticleCard
                width={300}
                slug={`/guide/${node.slug}`}
                title={node.title}
                subTitle={node.subtitle}
                category={node.category.title}
                image={image}
                m="0"
                mt={3}
                mr={[0, 3]}
              />
            );
          })}
        </Container>
        <Box margin="0 auto" textAlign="center">
          <Link to="/guides">
            <Button>View more articles</Button>
          </Link>
        </Box> */}
      </Section>
      {/* <CaseStudyList /> */}
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    datoCmsHomePage {
      title
    }

    allDatoCmsBlog(limit: 3) {
      edges {
        node {
          title
          # subtitle
          category {
            title
          }
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
`;
