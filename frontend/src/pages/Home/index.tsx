/* React imports */
import React from "react";

/* Components imports */
import MainHeader from "../../components/MainHeader";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

/* Styles */
import { Container } from "../../styles/global";
import Main from "./styles";

/* Data | just to test */
import Data from "../../data";

const Home: React.FC = () => {
  return (
    <Container>
      <MainHeader data={Data} />
      <Main>
        <Banner />
        <ProductList data={Data} />
      </Main>
    </Container>
  );
};

export default Home;
