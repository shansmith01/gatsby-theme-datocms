import React from "react";
import { Box } from "rebass/styled-components";

/** A simple Section component for use as a section. Uses rebass box */
const Section = props => {
  return <Box px={2} as="section" {...props} />;
};

export default Section;
