import styled from "styled-components";
import { screenSizes } from "./variables";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  max-width: ${(props) => (props.large ? "1140px" : "1000px")};
  @media screen and (max-width: ${screenSizes.lg}) {
    max-width: 920px;
  }
  @media screen and (max-width: ${screenSizes.md}) {
    max-width: 700px;
  }
  @media screen and (max-width: ${screenSizes.sm}) {
    max-width: 540px;
  }
`;

export default Container;
