/* React imports */
import React from "react";

/* APIs import */
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";

/* Styles */
import { Container, Search, AccessButtons } from "./styles";

/* Assets */
import DefaultLogo from "../../../../assets/images/logos/srt-emily-logo.png"; // Default Logo

/** Interface to setup the Content properties * */
interface ContentProps {
  headerLogo?: string;
}

const Content = ({ headerLogo = DefaultLogo }: ContentProps): JSX.Element => (
  <Container>
    <img src={headerLogo} alt="Logo" />
    <Search>
      <input type="search" placeholder="O que você procura?" />
      <button type="button">
        <FiSearch size={20} color="#FFFFFF" />
      </button>
    </Search>
    <AccessButtons>
      <button type="button" className="login">
        <FiUser size={24} color="#5B5B5F" />
        Entrar
      </button>
      <button type="button">
        <FiShoppingBag size={24} color="#CC757A" />
      </button>
      <button type="button">
        <FiHeart size={24} color="#5B5B5F" />
      </button>
    </AccessButtons>
  </Container>
);

// Set default value to headerLogo prop
Content.defaultProps = {
  headerLogo: DefaultLogo,
};

export default Content;
