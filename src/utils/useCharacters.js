import { useStaticQuery, graphql } from "gatsby";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function useCharacters() {
  const data = useStaticQuery(graphql`
    {
      allCharacter {
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
  characters.forEach((character) => {
    Object.keys(character).forEach((key) => {
      if (key !== "alias") {
        if (!character[key]) {
          character[key] = "Unknow";
        }
      }
    });
  });

  // const filteredCharacters = characters.filter((character) => character.name !== "Unknow");
  shuffleArray(characters);

  return {
    characters,
  };
}

export default useCharacters;
