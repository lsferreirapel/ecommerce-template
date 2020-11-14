/* React imports */
import React from "react";

/* APIs imports */
import { FiSearch, FiChevronsRight } from "react-icons/fi";

/* Sub Components */
import FilterSidebar from "./components/FilterSidebar";

/* Styles */
import { Container, ProductsHeader, Products } from "./styles";

/** Interface to set the ProductList properties * */
interface ProductListProps {
  data: {
    categories: string[];
    genders: string[];
  };
}

const ProductList = ({ data }: ProductListProps): JSX.Element => (
  <Container>
    <ProductsHeader>
      <div className="route">
        <span>
          <strong>Home</strong> / Novidades
        </span>
        <h2>Filtros</h2>
      </div>
      <div className="header-content">
        <div className="search">
          <div className="search-bar">
            <input type="search" />
            <button type="button">
              <FiSearch size={20} color="#C35074" />
            </button>
          </div>
          <span>
            <strong>6</strong>Produto(s)
          </span>
        </div>
        <form className="order-by">
          <label htmlFor="select-order-by">
            Ordenar por:
            <select name="select-order-by" id="select-order-by">
              <option value="Relêvancia">Relevância</option>
            </select>
          </label>
        </form>
        <ul className="page-selector">
          <li className="selected">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>
            <FiChevronsRight size={20} color="#C35074" />
          </li>
        </ul>
      </div>
    </ProductsHeader>
    <FilterSidebar data={data} />
    <Products />
  </Container>
);

export default ProductList;
