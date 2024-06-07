import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProduct } from "./CardProduct";
import { useData } from "../context/CartContext";
import FilterComponent from "./FilterComponent";

export const CardList = () => {
  const { products } = useData();
  const [filterValue, setFilterValue] = useState(1000);
  const [filterBrandName, setFilterBrandName] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    price: 1000,
    brand: [],
  });
  const handleFilterChange = (value) => {
    setFilterValue(value);
  };
  const handleBrandChange = (brands) => {
    setFilterBrandName(brands);
  };
  const applyFilters = () => {
    setAppliedFilters({
      price: filterValue,
      brand: filterBrandName,
    });
  };

  const filteredProducts = products.filter(
    (prod) =>
      prod.price >= appliedFilters.price &&
      (appliedFilters.brand.length === 0 ||
        appliedFilters.brand.includes(prod.brand)) &&
      prod.stock > 0
  );

  return (
    <div className="container-fluid px-2">
      <div className="row my-3 d-flex justify-content-start ">
        <FilterComponent
          filterValue={filterValue}
          brandValue={filterBrandName}
          onFilterNameChange={handleBrandChange}
          onFilterChange={handleFilterChange}
          onApplyFilters={applyFilters}
        />
        {filteredProducts.map((prod, index) => {
          return <CardProduct key={index} prod={prod} />;
        })}
      </div>
    </div>
  );
};
