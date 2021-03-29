import * as React from "react";

import { Card, Layout, SEO } from "../components";
import { CardList, Container } from "../ui";
import useCharacters from "../utils/useCharacters";

const IndexPage = () => {
  const { characters } = useCharacters();

  return (
    <Layout>
      <SEO />
      <Container>
        <CardList>
          {characters.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </CardList>
      </Container>
    </Layout>
  );
};

export default IndexPage;
