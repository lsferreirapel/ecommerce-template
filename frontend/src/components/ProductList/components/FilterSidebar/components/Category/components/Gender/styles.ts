import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Selector = styled.div`
  span {
    margin-left: 5px;
  }
`;

export const Categories = styled.ul`
  display: flex;
  flex-direction: column;

  margin-left: 15px;
  margin-bottom: 2px;
`;

export const LiCategory = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;

  .selector {
  }

  span {
    margin-left: 5px;
  }
`;
