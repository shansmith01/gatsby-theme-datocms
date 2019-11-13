import React from "react";
import Section from "./Section";
import { Link } from "gatsby";

const DocMenu = ({ data }) => {
  return (
    <Section bg="LightGrey" style={{ position: "sticky" }}>
      <h4> Website Docs</h4>
      <hr />
      <ul>
        <li>
          <Link to="/docs/">Overview</Link>
        </li>
        <li>
          <Link to="/docs/content">Content Management</Link>
        </li>
        <li>
          <Link to="/docs/search/">Site search</Link>
        </li>
        <li>
          <Link to="/docs/developers">Developers</Link>
        </li>
      </ul>
      <hr />
      <h4>Components</h4>
      <ul>
        <li>
          <Link to="/docs/components">What is a component?</Link>
        </li>
        {data.edges.map(({ node: doc }) => (
          <li key={doc.id}>
            <Link to={`/docs/${doc.displayName}/`}>{doc.displayName}</Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default DocMenu;
