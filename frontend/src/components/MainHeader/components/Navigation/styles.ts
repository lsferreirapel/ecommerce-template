import styled from "styled-components";

export const Container = styled.div`
  /* Position */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Size */
  width: 100%;
  height: 60px;

  /* Border */
  border: 1px solid var(--color-gray-light);
  border-left: none;
  border-right: none;

  /* Margin and Padding */
  padding: 0 180px;

  /* Colors */
  /* background-color: #f0f0f0; */
`;

export const Categories = styled.ul`
  /* Position */
  display: flex;
  justify-content: space-around;
  align-items: center;

  /* Size */
  width: 100%;
  height: 100%;
`;

export const Category = styled.li`
  /* Size */
  min-width: 110px;
  height: 60px;

  a {
    /* Position */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Size */
    width: 100%;
    height: 100%;

    /*  Font */
    font-size: 20px;
    font-weight: 500;

    /* Effect */
    transition: color 0.2s ease;
    cursor: pointer;

    :hover {
      /* Border */
      border-top: 3px solid transparent;
      border-bottom: 3px solid var(--color-primary-medium);

      /* Font */
      color: var(--color-primary-medium);
    }
  }
`;
