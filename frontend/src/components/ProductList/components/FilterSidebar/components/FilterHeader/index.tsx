import React from "react";
import { FiMinus } from "react-icons/fi";
import { Header, Title } from "./styles";

interface FilterHeaderProps {
  Name: string;
}

const FilterHeader = ({
  Name = "CATEGORY",
}: FilterHeaderProps): JSX.Element => (
  <Header>
    <Title>{Name}</Title>
    <FiMinus size={12} color="#C35074" />
  </Header>
);

export default FilterHeader;
