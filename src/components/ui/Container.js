import React from "react";
import { Flex } from "rebass/styled-components";

/** A simple container component for use inside a section. Uses rebass flex component */
const Container = props => {
  return (
    <Flex
      px={2}
      flexWrap="wrap"
      {...props}
      maxWidth="maxWidth"
      mx="auto"
      py={4}
    />
  );
};

export default Container;
