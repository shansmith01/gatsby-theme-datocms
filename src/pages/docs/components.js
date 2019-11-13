import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Section from "../../components/ui/Section";
import Layout from "../../components/ui/Layout";

import DocMenu from "../../components/ui/DocMenu";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const Content = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Grid>
        <DocMenu data={data.allComponentMetadata} />
        <Section p={5}>
          <h1>What are components</h1>
          <p>
            Components are the building blocks of a website. They can be small
            and simple and just show a heading or they can be complex and have
            business logic.
          </p>
          <p>
            Everything in Gatsby/React is a component. A page is a component and
            a page will contain components.
          </p>
          <p>
            The great things about props is&nbsp;that they can be recycled. If
            we were going to make another website&nbsp;at TAG we can reuse all
            of these components making web development&nbsp;a lot faster
          </p>
          <p>Eg a page will look something like this</p>
          <p>
            <em>&lt;Layout&gt; //Make the page match the standard layout</em>
          </p>
          <p>
            <em>
              &nbsp; &lt;Header title="Hello World" image="an/image/source"
              /&gt; // Props dictate the info displayed by the component
            </em>
          </p>
          <p>
            <em>&nbsp; &lt;Footer &gt; //shows the footer</em>
          </p>
          <p>
            <em>&lt;/Layout&gt;</em>
          </p>
          <p>
            The below library shows all components used on the the base website,
            and the types of props that are accepted.
          </p>
          <p>&nbsp;</p>
        </Section>
      </Grid>
    </Layout>
  );
};

export default Content;

export const pageQuery = graphql`
  query {
    allComponentMetadata {
      edges {
        node {
          id
          displayName
        }
      }
    }
  }
`;
