/* React imports */
import React from "react";

/* Styles */
import { Container, Categories, Category } from "./styles";

/** Interface to setup the NavigationProps properties * */
interface NavigationProps {
  categories: string[];
}

const Navigation = ({ categories }: NavigationProps): JSX.Element => (
  <Container>
    <Categories>
      {categories.map((category) => (
        <Category key={category}>
          <a href="/" key={category}>
            {category}
          </a>
        </Category>
      ))}
    </Categories>
  </Container>
);

export default Navigation;
