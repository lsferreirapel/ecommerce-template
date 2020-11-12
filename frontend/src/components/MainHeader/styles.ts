import styled from "styled-components";

export const Info = styled.div`
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

export const Content = styled.div`
  /* Position */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Size */
  max-width: 850px;
  height: 91px;

  /* Margin and Padding */
  margin: 15px auto;

  /** Header Logo **/
  img {
    /* Size */
    width: 180px;
    height: 100%;
  }

  /* Just to test */
  .search {
    /* Position */
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Size */
    width: 340px;
    min-width: 210px;
    height: 35px;

    input {
      /* Size */
      width: 100%;
      height: 100%;

      /* Border */
      border: solid 1px var(--color-gray-light);
      border-right: none;

      /* Margin and Padding */
      padding: 0 15px;

      /* Font */
      font-size: 15px;
      color: var(--color-gray-medium);
    }

    button {
      /* Position */
      display: flex;
      justify-content: center;
      align-items: center;

      /* Size */
      width: 40px;
      height: 35px;

      /* Colors */
      background-color: var(--color-primary-light);

      /* Effects */
      cursor: pointer;
    }
  }

  /* Just to test */
  .buttons {
    /* Position */
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Size */
    min-width: 170px;
    height: 25px;

    button {
      /* Position */
      display: flex;
      justify-content: center;
      align-items: center;

      /* Font */
      font-size: 13px;
      font-weight: 600;
      color: var(--color-gray-medium);

      /* Effects */
      cursor: pointer;
    }

    .login {
      /* Position */
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* Size */
      width: 70px;
    }
  }
`;
export const Navigation = styled.div``;
