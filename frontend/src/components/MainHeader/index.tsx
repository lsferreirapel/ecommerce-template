/* React imports */
import React from "react";

/* Sub componets */
import InformationAlert from "./components/InformationAlert";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

/* Styles */
import Container from "./styles";

/* Assets */
import InfoImage from "../../assets/images/header-info.png"; // Just to test

/** Interface to setup the MainHeader properties * */
interface HeaderProps {
  data: {
    categories: string[];
  };
}

const MainHeader = ({ data }: HeaderProps): JSX.Element => (
  <Container>
    <InformationAlert backRGBColor="#000000" informationImg={InfoImage} />
    <Content />
    <Navigation categories={data.categories} />
  </Container>
);

export default MainHeader;
