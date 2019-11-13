import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { color } from "styled-system";

const StyledLink = props => {
  return <Link color {...props} />;
};

StyledLink.propTypes = {};

export default StyledLink;
