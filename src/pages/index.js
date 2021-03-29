import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { shuffleArray } from "../functions";
import { Card, Layout, SEO } from "../components";
import { CardList, Container } from "../ui";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allCharacter(limit: 20, filter: { occupation: { eq: "Student" } }) {
        nodes {
          id
          name
          alias
          affiliation
          occupation
          images
          quirk
        }
      }
    }
  `);

  const characters = data.allCharacter.nodes;
  shuffleArray(characters);

  return (
    <Layout>
      <SEO />
      <Container>
        <CardList>
          {characters.map((character) => {
            Object.keys(character).forEach((key) => {
              if (!character[key]) {
                character[key] = "Unknow";
              }
            });
            return <Card key={character.id} {...character} />;
          })}
        </CardList>
      </Container>
    </Layout>
  );
};

export default IndexPage;
