/* React imports */
import React, { useState } from "react";

/* APIs imports */
import { FiMinus, FiCircle, FiCheckCircle } from "react-icons/fi";

/* Styles */
import { Container, Title, Selector, Categories, LiCategory } from "./styles";

/** Interface to set the Gender properties * */
interface GenderProps {
  name: string;
  categories: string[];
}

const Gender = ({ name, categories }: GenderProps): JSX.Element => {
  const [closeTab, setCloseTab] = useState(true);
  const [checkbox, setCheckbox] = useState(false);

  // Function to open and close the gender tab on category filter
  function handleToggleGenderTab() {
    setCloseTab(!closeTab);

    // Toggle checkbox icon
    setCheckbox(!checkbox);
  }

  return (
    <Container>
      <Title onClick={handleToggleGenderTab}>
        <Selector>
          <button type="button">
            {checkbox ? (
              <FiCheckCircle size={12} color="#5B5B5F" />
            ) : (
              <FiCircle size={12} color="#5B5B5F" />
            )}
          </button>
          <span>{name}</span>
        </Selector>

        <button type="button">
          <FiMinus size={12} color="#C35074" />
        </button>
      </Title>

      <Categories>
        {!closeTab &&
          categories.map((category) => (
            <LiCategory key={category}>
              <Selector>
                <button type="button">
                  <FiCircle size={12} color="#5B5B5F" />
                </button>
                <span>{category}</span>
              </Selector>
            </LiCategory>
          ))}
      </Categories>
    </Container>
  );
};

export default Gender;
