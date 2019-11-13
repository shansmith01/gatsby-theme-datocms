import React from "react";
import PropTypes from "prop-types";
import { Box } from "reflexbox/styled-components";

/** Simple component for displaying testimonials */
const Testimonial = ({ name, text }) => {
  return (
    <Box textAlign="right" flex="1 1 300px" mr={4} mb={3}>
      <Box bg="lightGrey" p={3} mb={1}>
        {text}
      </Box>
      <Box p={1}>{name}</Box>
    </Box>
  );
};

Testimonial.propTypes = {
  /** Name of the person making the testimonial */
  name: PropTypes.string,
  /** Content */
  text: PropTypes.string
};

export default Testimonial;
