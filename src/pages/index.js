import React from "react";
import Layout from "../components/ui/Layout";
// import Header from "../components/ui/Header";
// import { graphql } from "gatsby";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

// import CaseStudyList from "../components/ui/CaseStudyList";

export default ({ data, pageContext }) => {
  return (
    <Layout>
      {/* <Header bg="none" title={title} subTitle={subtitle} /> */}

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
      </Section>
    </Layout>
  );
};

// export const query = graphql`
//   query IndexQuery {
//     datoCmsHomePage {
//       title
//     }
//   }
// `;
