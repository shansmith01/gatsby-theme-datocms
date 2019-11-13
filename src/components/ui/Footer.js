import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Box, Text, Heading } from "rebass/styled-components";
import styled from "styled-components";
import Section from "./Section";
import Container from "./Container";

const MenuList = styled.ul`
  margin: 1rem 0;
  padding: 0;
  list-style-type: none;
  a {
    color: ${props => props.theme.colors.white};
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          title
        }
      }
      allDatoCmsPage {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  var date = new Date();
  var year = date.getFullYear();

  return (
    <Section as="footer" bg="footer" color="white">
      <Container>
        <Box width={[1 / 2, 1 / 4]} p={3}>
          <Heading as="h3">Quick links</Heading>
          <Text fontSize={[2, 2, 3]} color="primary">
            <MenuList>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            </MenuList>
          </Text>
        </Box>

        <Box width={[1 / 2, 1 / 4]} p={3}>
          <Heading as="h3">About</Heading>
          <Text fontSize={[2, 2, 3]} color="primary">
            <MenuList>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              {data.allDatoCmsPage.edges.map(({ node }, index) => (
                <li key={index}>
                  <Link to={`${node.slug}`}>{node.title}</Link>
                </li>
              ))}
            </MenuList>
          </Text>
        </Box>
        <Box
          width={1}
          p={4}
          m={3}
          textAlign="center"
          sx={{ borderTop: "1px solid grey" }}
        >
          <p>
            {" "}
            &copy; {data.site.siteMetadata.title} {year}
          </p>
        </Box>
      </Container>
    </Section>
  );
};

export default Footer;
