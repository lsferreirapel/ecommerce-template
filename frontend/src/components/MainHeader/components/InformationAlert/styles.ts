import styled from "styled-components";

export default styled.div`
  /* Position */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Size */
  width: 100%;
  height: 48px;

  /* Colors */
  background-color: ${(props) => props.color};
`;
