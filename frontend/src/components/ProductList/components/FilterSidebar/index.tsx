/* React imports */
import React from "react";

/* APIs imports */
import { FiMinus } from "react-icons/fi";
import FilterHeader from "./components/FilterHeader";

/* Sub-Components */
import Category from "./components/Category";

/* Styles */
import { Container } from "./styles";

/** Interface to set the FilterSidebar properties * */
interface FilterSidebarProps {
  data: {
    categories: string[];
    genders: string[];
  };
}

const FilterSidebar = ({ data }: FilterSidebarProps): JSX.Element => (
  <Container>
    <Category genders={data.genders} categories={data.categories} />
  </Container>
);

export default FilterSidebar;
