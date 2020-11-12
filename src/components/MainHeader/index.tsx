/* React import */
import React from "react";

/* My imports */
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";

/* Sub componets import */

/* Styles Import */
import { Container } from "../../styles/global";
import { Info, Content, Navigation } from "./styles";

/* Assets Import */
import InfoImage from "../../assets/images/header-info.png"; // Just to test
import HeaderLogo from "../../assets/images/logos/srt-emily-logo.png"; // Just to test

const MainHeader: React.FC = () => (
  <Container>
    <Info color="#000000">
      <img src={InfoImage} alt="Header Information" />
    </Info>
    <Content>
      <img src={HeaderLogo} alt="Logo" />
      <form className="search">
        <input type="text" placeholder="O que você procura?" />
        <button type="button">
          <FiSearch size={20} color="#FFFFFF" />
        </button>
      </form>
      {/* <Search /> */}
      <div className="buttons">
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
        {/* <AccessLogin /> */}
        {/* <AccessMiniCart /> */}
        {/* <AccessFavoriteItems /> */}
      </div>
    </Content>
    <Navigation />
  </Container>
);

export default MainHeader;
