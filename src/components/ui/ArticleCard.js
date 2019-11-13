import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Card, Heading, Text, Box } from "rebass/styled-components";

/** A component for showing article cards- This can be used in blogs and category index pages/ It has a default image if no image is specified */
const ArticleCard = props => {
  const { slug, title, image, subTitle, category, test } = props;
  const data = useStaticQuery(graphql`
    query ArticleCardQuery {
      file(relativePath: { eq: "headerImageDefault.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Card {...props}>
      <Link to={slug}>
        <Img
          fluid={image.fluid || data.file.childImageSharp.fluid}
          alt={image.alt || title}
        />
        <Box p={3}>
          <Text
            color="primaryDarkest"
            fontSize="2"
            fontFamily="subheading"
            sx={{ textTransform: "uppercase" }}
          >
            {category || ""}
          </Text>

          <Heading as="h2" mb={2} variant="bigHeading" lineHeight="1.3">
            {title}
          </Heading>
          <Text as="p" color="darkGrey">
            {subTitle || ""}
          </Text>
        </Box>
      </Link>
    </Card>
  );
};

ArticleCard.propTypes = {
  /** Slug from DatoCMS */
  slug: PropTypes.string.isRequired,
  /** Title from DatoCMS */
  title: PropTypes.string.isRequired,
  /** Optional image from DatoCMS - looks like data.file.childImageSharp.fluid */
  image: PropTypes.object.isRequired
};

ArticleCard.defaultProps = {
  image: {}
};

export default ArticleCard;
