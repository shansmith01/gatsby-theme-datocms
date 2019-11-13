import React from "react";
import Layout from "../components/ui/Layout";
import Section from "../components/ui/Section";
import SEO from "../components/ui/Seo";
import Container from "../components/ui/Container";
import QuestionAnswer from "../components/ui/QuestionAnswer";
import { Box } from "rebass/styled-components";
import Header from "../components/ui/Header";

const FAQ = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Header bg="none" title="Frequently Asked Questions" />
      <SEO
        title="Frequently Asked questions about working with a psychologist"
        description="These are typical questions that clients have prior to startying working with a psychologist"
      />
      <Section>
        <Container>
          <Box>
            {data.allDatoCmsFaq.edges.map(({ node }) => (
              <QuestionAnswer
                question={node.question}
                answer={node.answer}
                key={node.id}
              />
            ))}
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default FAQ;

export const query = graphql`
  {
    allDatoCmsFaq {
      edges {
        node {
          id
          question
          answer
        }
      }
    }
  }
`;
