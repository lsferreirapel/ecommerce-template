import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--color-gray-light);

  padding-bottom: 4px;
  margin: 15px 0;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500; /* Medium */
  color: var(--color-primary);
`;
