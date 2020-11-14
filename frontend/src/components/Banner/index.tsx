/* React import */
import React from "react";

/* Styles Import */
import Container from "./styles";

/* Assets Import */
import BannerImg from "../../assets/images/banner.jpg";

const Banner: React.FC = () => (
  <Container>
    <img src={BannerImg} alt="Banner" />
  </Container>
);

export default Banner;
