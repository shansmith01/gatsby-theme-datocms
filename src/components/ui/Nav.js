import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { space, layout, variant } from "styled-system";
import { useSpring, animated } from "react-spring";
import { Link } from "gatsby";
import { Flex } from "rebass/styled-components";
import Logo from "./Logo";
import CloseButton from "./CloseButton";

const MenuItems = styled.ul`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  text-align: right;
  ${space};
  ${layout}
`;

const MenuItem = styled.li`
  padding: 0 0.5rem;
  /* a {
    color: ${props => props.theme.colors.navLink};
  } */
  ${layout}
`;

MenuItem.defaultProps = {
  display: ["block", "inline-block"]
};

const ToggleLink = styled.a`
  ${space};
  ${layout};
`;

const MobNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: #333;
  height: 100vh;
  width: 100vw;
  padding: 4rem 2rem;
`;

/** Our main navigation component */
const Nav = ({ bg }) => {
  const data = useStaticQuery(graphql`
    query navQuery {
      sitePlugin(name: { eq: "gatsby-theme-datocms" }) {
        pluginOptions {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  const dynamicMenuLinks = data.sitePlugin.pluginOptions.menuLinks.map(link => (
    <MenuItem key={link.name}>
      <Link to={link.link}>{link.name}</Link>
    </MenuItem>
  ));

  const MobMenu = ({ style, toggle }) => (
    <animated.div style={{ position: "relative", zIndex: 1, ...style }}>
      <MobNav>
        <CloseButton onClick={toggle} text="white">
          Close
        </CloseButton>
        <Link to="/">
          <Logo />
        </Link>
        {dynamicMenuLinks}
      </MobNav>
    </animated.div>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  const mobAnimation = useSpring({
    transform: toggleMenu
      ? "translate3D(0,0,0) scale(1)"
      : "translate3D(0,100%,0) scale(0)"
  });

  return (
    <>
      {toggleMenu && (
        <MobMenu style={mobAnimation} toggle={() => setToggleMenu(false)} />
      )}
      <Flex
        as="nav"
        variant="nav"
        px={2}
        py={3}
        sx={{ position: "relative" }}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Link to="/">
          <Logo />
        </Link>

        <MenuItems p={2} display={["none", "block"]}>
          {dynamicMenuLinks}
        </MenuItems>
        <ToggleLink
          onClick={() => setToggleMenu(!toggleMenu)}
          p={1}
          mr={3}
          mt={"-10px"}
          display={["block", "none"]}
        >
          <Flex flexDirection="column-reverse">
            <span>Menu</span>
            <svg
              height="32px"
              id="Layer_1"
              // style="enable-background:new 0 0 32 32;"
              style={{ marginLeft: "5px" }}
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
            >
              <path
                style={{ fill: "#fff" }}
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
              />
            </svg>
          </Flex>
        </ToggleLink>
      </Flex>
    </>
  );
};

export default Nav;
