import { useState } from "react";
import { useData } from "../context/CartContext";

const FilterComponent = ({
  filterValue,
  onFilterChange,
  onApplyFilters,
  onFilterNameChange,
  brandValue,
}) => {
  const { products } = useData();
  const brands = Array.from(new Set(products.map((prod) => prod.brand)));
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  const handlePriceChange = (e) => {
    const value = e.target.value;
    onFilterChange(value);
  };

  const applyFilters = () => {
    onFilterNameChange(selectedBrands);
    onApplyFilters();
  };
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 fw-bold py-2">
      <div
        className="row p-2 mb-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#AllFilters"
        aria-expanded="false"
        aria-controls="AllFilters"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="col-10">Filtros</div>
        <div className="col-2  d-flex justify-content-center">
          <i className={`fa-solid fa-angles-${open ? "up" : "down"}`}></i>
        </div>
      </div>
      <div
        id="AllFilters"
        className="row px-3 py-2 collapse"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseBrands"
        aria-expanded="false"
        aria-controls="collapseBrands"
      >
        <div className="col-10">Por Marca</div>
        <div className="col-2">
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </div>
      <div className="collapse py-1" id="collapseBrands">
        {brands.map((item, index) => (
          <div className="form-check" key={index}>
            <label className="form-check-label" htmlFor={`brand-${index}`}>
              {item}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id={`brand-${index}`}
              checked={selectedBrands.includes(item)}
              onChange={() => toggleBrand(item)}
            />
          </div>
        ))}
      </div>
      <div
        id="AllFilters"
        className="row px-3 py-2 collapse"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsePrice"
        aria-expanded="false"
        aria-controls="collapsePrice"
      >
        <div className="col-10">Por Precio</div>
        <div className="col-2">
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </div>
      <div className="collapse py-1" id="collapsePrice">
        <label htmlFor="priceRange">$ {filterValue}</label>

        <input
          type="range"
          className="form-range"
          min="1000"
          max="100000"
          step="100"
          id="priceRange"
          onChange={handlePriceChange}
        />
      </div>
      <div className="row pb-3 mt-3">
        <button className="btn btn-danger" onClick={applyFilters}>
          APLICAR FILTROS
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
