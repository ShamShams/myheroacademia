import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../ui/variables";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  border-radius: 2px;
`;

const Image = styled.img`
  height: 135px;
  width: 135px;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const Name = styled.p`
  color: ${colors.yellow};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 1.2;
  margin-bottom: 1px;
`;

const Label = styled.span`
  color: ${colors.yellowSecondary};
  font-size: 13px;
  font-weight: bold;
`;

const Text = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 0;
`;

const Alias = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Card = ({ id, name, alias, occupation, affiliation, images, quirk }) => {
  const image = images[images.length - 1];

  return (
    <Container>
      <Image src={image} alt="Character" />
      <TextContainer>
        <Name>{name}</Name>
        <Alias>{alias}</Alias>
        <Text>
          <Label>id :{"  "}</Label>
          {id}
        </Text>
        <Text>
          <Label>Quirk :{"  "}</Label>
          {quirk}
        </Text>
        <Text>
          <Label>Occupation :{"  "}</Label>
          {occupation}
        </Text>
        <Text>
          <Label>Affiliation :{"  "}</Label>
          {affiliation}
        </Text>
      </TextContainer>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  alias: PropTypes.string,
  occupation: PropTypes.string,
  affiliation: PropTypes.string,
  images: PropTypes.array,
  quirk: PropTypes.string,
};

export default Card;
