import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { colors } from "../ui/variables";
import { Link } from "gatsby";

const Header = () => (
  <HeaderStyled>
    <Link to="/">
      <StaticImage
        src="../images/logo-myheroacademia.png"
        alt="Affiche My Hero Academia"
        placeholder="blurred"
        quality={100}
        width={250}
      />
    </Link>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  background-color: ${colors.yellow};
`;
