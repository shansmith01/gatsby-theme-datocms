import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyles";
import { Box } from "rebass/styled-components";

import Footer from "./Footer";

// Theme and CSS
import defaultTheme from "../theme/default";
import Seo from "../ui/Seo";

const Layout = ({ children, hideFooter }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <>
          <Seo />

          <Box
            as="main"
            sx={{
              borderTopWidth: "4px",
              borderTopStyle: "default",
              borderTopColor: "primary"
            }}
          >
            {children}
          </Box>
          {!hideFooter && <Footer />}
        </>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
