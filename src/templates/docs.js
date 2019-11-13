import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import PropsTable from "../components/ui/PropsTable";
import Section from "../components/ui/Section";
import Layout from "../components/ui/Layout";

import DocMenu from "../components/ui/DocMenu";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export default class ComponentPage extends Component {
  render() {
    const { children, data } = this.props;

    return (
      <Layout>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Grid>
          <DocMenu data={data.allComponentMetadata} />
          <Section p={5}>
            {children}
            <h1>{data.componentMetadata.displayName}</h1>
            <p>{data.componentMetadata.docblock}</p>
            <h2 style={{ marginTop: "2rem" }}>Props:</h2>
            <PropsTable
              propMetaData={data.componentMetadata.childrenComponentProp}
            />
          </Section>
        </Grid>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query($name: String!) {
    allComponentMetadata {
      edges {
        node {
          id
          displayName
        }
      }
    }
    componentMetadata(displayName: { eq: $name }) {
      id
      displayName
      docblock
      doclets
      childrenComponentProp {
        name
        docblock
        required
        parentType {
          name
        }
        type {
          value
        }
        defaultValue {
          value
          computed
        }
      }
      composes
    }
  }
`;
