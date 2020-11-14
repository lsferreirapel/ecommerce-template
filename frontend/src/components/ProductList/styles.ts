import styled from "styled-components";

export const Container = styled.div`
  /* Size */
  width: 1250px;
  min-width: 800px;

  /* Margin and Padding */
  margin: 0 auto;
  margin-top: 80px;
`;

export const ProductsHeader = styled.div`
  /* Position */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .route {
    /* Position */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    /* Size */
    width: 175px;

    /* Margin and Padding */
    margin-right: 50px;

    span {
      /* Font */
      font-size: 10px;

      strong {
        font-weight: 800; /* Bold */
      }
    }
    h2 {
      /* Font */
      font-size: 25px;
    }
  }

  .header-content {
    /* Position */
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search {
      /* Position */
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* Size */
      max-width: 700px;
      height: 35px;

      .search-bar {
        /* Position */
        display: flex;
        justify-content: space-between;
        align-items: center;

        /* Border */
        border: 1px solid gray;

        /* Size */
        width: 500px;
        min-width: 250px;
        height: 100%;

        /* Margin and Padding */
        margin-right: 25px;

        input {
          /* Position */
          display: flex;
          align-items: center;
          flex: 1;

          /* Size */
          width: 450px;
          min-width: 200px;
          height: 100%;

          /* Margin and Padding */
          padding: 0 20px;
        }
        button {
          /* Position */
          display: flex;
          justify-content: center;
          align-items: center;

          /* Size */
          width: 35px;
          height: 35px;
        }
      }

      span {
        /* Position */
        display: flex;
        align-items: center;
        justify-content: space-between;

        /* Size */
        width: 100px;

        /* Font */
        font-size: 16px;
        font-weight: 500; /* Medium */

        strong {
          /* Font */
          font-weight: 800; /* Bold */
          color: var(--color-primary);
        }
      }
    }

    .order-by {
      label {
        /* Position */
        display: flex;
        justify-content: space-between;

        /* Size */
        width: 185px;
        height: 20px;

        /* Font */
        font-size: 14px;
      }
    }

    .page-selector {
      /* Position */
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* Size */
      width: 100px;

      li {
        /* Position */
        display: flex;
        align-items: center;

        /* Font */
        font-size: 16px;
        color: black;
      }
      .selected {
        /* Font */
        font-weight: 600;
        color: var(--color-primary);
      }
    }
  }
`;

export const FilterSidebar = styled.div``;

export const Products = styled.div``;
