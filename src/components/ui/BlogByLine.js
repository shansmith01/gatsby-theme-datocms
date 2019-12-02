import React from "react";
import PropTypes from "prop-types";
import { Text } from "rebass/styled-components";
import format from "date-fns/format";

/** Component for adding a by line with date and name to a blog post */
const BlogByLine = ({ date, name, ...props }) => {
  return (
    <Text mt={3} {...props}>
      {format(new Date(date), "dd LLLL, yyyy")} &#183; {""}
      <strong>{name}</strong>
    </Text>
  );
};

BlogByLine.propTypes = {
  /** Accepts a date format  */
  date: PropTypes.string,
  /** Authors First Name and Last Name  */
  name: PropTypes.string
};

export default BlogByLine;
