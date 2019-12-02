import React from "react";
import PropTypes from "prop-types";

import { Heading } from "rebass/styled-components";

/** A simple h1 component which uses rebase's Heding component as a base. This heading is responsive and accepts styled system props for overrides */
const H1 = props => <Heading as="h1" {...props} />;

H1.propTypes = {
  /** Sets the line height from Styled System templates in theme defaults */
  lineHeight: PropTypes.array,
  /** Sets the Bottom margin height from Styled System templates in theme defaults */
  mb: PropTypes.array,
  /** Sets the font from Styled System templates in theme defaults */
  fontSize: PropTypes.array
};
H1.defaultProps = {
  lineHeight: [6, 7],
  mb: [2],
  fontSize: [6, 7]
};

/** A simple h2 component which uses rebase's Heding component as a base. This heading is responsive and accepts styled system props for overrides */
const H2 = props => <Heading as="h2" {...props} />;

H2.propTypes = {
  /** Sets the line height from Styled System templates in theme defaults */
  lineHeight: PropTypes.array,
  /** Sets the Bottom margin height from Styled System templates in theme defaults */
  mb: PropTypes.array,
  /** Sets the font from Styled System templates in theme defaults */
  fontSize: PropTypes.array
};

H2.defaultProps = {
  lineHeight: [4],
  mb: [3],
  fontSize: [4]
};

/** A simple h3 component which uses rebase's Heding component as a base. This heading is responsive and accepts styled system props for overrides */
const H3 = props => <Heading as="h3" {...props} />;
H3.propTypes = {
  /** Sets the line height from Styled System templates in theme defaults */
  lineHeight: PropTypes.array,
  /** Sets the Bottom margin height from Styled System templates in theme defaults */
  mb: PropTypes.array,
  /** Sets the font from Styled System templates in theme defaults */
  fontSize: PropTypes.array
};

H3.defaultProps = {
  lineHeight: [4],
  mb: [3],
  fontSize: [4]
};

/** A simple h4 component which uses rebase's Heding component as a base. This heading is responsive and accepts styled system props for overrides */
const H4 = props => <Heading as="h4" {...props} />;

H4.propTypes = {
  /** Sets the line height from Styled System templates in theme defaults */
  lineHeight: PropTypes.array,
  /** Sets the Bottom margin height from Styled System templates in theme defaults */
  mb: PropTypes.array,
  /** Sets the font from Styled System templates in theme defaults */
  fontSize: PropTypes.array
};
H4.defaultProps = {
  lineHeight: [3],
  mb: [2],
  fontSize: [3]
};

export { H1, H2, H3, H4 };
