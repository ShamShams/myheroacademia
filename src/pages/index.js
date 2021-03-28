import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, SEO } from "../components";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allCharacter(limit: 5, filter: { occupation: { eq: "Student" } }) {
        nodes {
          id
          name
          occupation
          alias
          images
          quirk
        }
      }
    }
  `);
  console.log(data.allCharacter.nodes);

  return (
    <Layout>
      <SEO />
    </Layout>
  );
};

export default IndexPage;
