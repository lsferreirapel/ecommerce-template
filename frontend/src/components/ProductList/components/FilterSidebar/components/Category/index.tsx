/* React imports */
import React from "react";

/* Sub components */
import FilterHeader from "../FilterHeader";
import Gender from "./components/Gender";

/* Styles */
import { Container, Genders } from "./styles";

/** Interface to set the Category properties * */
interface CategoryProps {
  genders: string[];
  categories: string[];
}

const Category = ({ genders, categories }: CategoryProps): JSX.Element => (
  <Container>
    <FilterHeader Name="CATEGORIA" />
    <Genders>
      {genders.map((gender) => (
        <Gender key={gender} name={gender} categories={categories} />
      ))}
    </Genders>
  </Container>
);

export default Category;
