import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const StyledImage = styled(Img)`
  grid-row: 1 / -1;
  border-radius: ${props => (props.rounded ? "50%" : "")};
  border: 1px solid ${props => props.theme.colors.primaryLight};
`;

/** A simple avatar component. If no image defaults to Jules */
const Avatar = ({ rounded, image }) => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      file(relativePath: { eq: "julius-capilitan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <StyledImage
      rounded={rounded}
      fluid={image || data.file.childImageSharp.fluid}
    />
  );
};

Avatar.propTypes = {
  /** Makes avatar rounded */
  rounded: PropTypes.bool,
  /** Add a dynamic image. If no image it defaults to jules */
  image: PropTypes.object
};

export default Avatar;
