import React, { useState } from "react";
import { allProducts } from "../../staticData/allProducts";
import { RiMotorbikeFill } from "react-icons/ri";

const AllProducts = () => {
  const [priceRange, setPriceRange] = useState([]);
  const [availability, setAvailability] = useState("");
  const [customMinPrice, setCustomMinPrice] = useState("");
  const [customMaxPrice, setCustomMaxPrice] = useState("");

  const handlePriceFilter = (range) => {
    setPriceRange((prevRange) =>
      prevRange.includes(range)
        ? prevRange.filter((item) => item !== range)
        : [...prevRange, range]
    );
  };

  const handleAvailabilityFilter = (status) => {
    setAvailability(status === availability ? "" : status);
  };

  const handleCustomPriceFilter = () => {
    const min = parseFloat(customMinPrice) || 0;
    const max = parseFloat(customMaxPrice) || Infinity;
    setPriceRange([`${min}-${max}`]);
  };

  const filteredProducts = allProducts.map((category) => ({
    ...category,
    bikes: category.bikes.filter(
      (bike) =>
        (priceRange.length === 0 ||
          priceRange.some((range) => {
            if (range.includes("-")) {
              const [min, max] = range.split("-").map(Number);
              return bike.MSRP >= min && bike.MSRP <= max;
            }
            return false;
          })) &&
        (availability === "" || bike.availability === availability)
    ),
  }));

  return (
    <div className="all-products-container">
      <div className="wrapper">
        {/* Filters Section */}
        <aside className="filters">
          <h3 className="filter-title">
            Filters
            <span className="filter-icon">
              <RiMotorbikeFill />
            </span>
          </h3>
          <hr />

          {/* Price Range Filter */}
          <div className="filter-section">
            <h4 className="sub-title">Price</h4>
            <div className="filter-list">
              {[
                { range: "1000-5000", label: "$1000.00 - $5000.00" },
                { range: "5000-10000", label: "$5000.00 - $10,000.00" },
                { range: "10000-20000", label: "$10,000.00 - $20,000.00" },
                { range: "20000-30000", label: "$20,000.00 - $30,000.00" },
              ].map(({ range, label }) => (
                <div key={range} className="filter-item">
                  <input
                    type="checkbox"
                    id={range}
                    onChange={() => handlePriceFilter(range)}
                    checked={priceRange.includes(range)}
                  />
                  <label htmlFor={range}>{label}</label>
                </div>
              ))}
            </div>
            <div className="custom-price">
              <input
                type="number"
                placeholder="Min"
                value={customMinPrice}
                onChange={(e) => setCustomMinPrice(e.target.value)}
                className="price-input"
              />
              <input
                type="number"
                placeholder="Max"
                value={customMaxPrice}
                onChange={(e) => setCustomMaxPrice(e.target.value)}
                className="price-input"
              />
              <button
                onClick={handleCustomPriceFilter}
                className="price-button"
              >
                Go
              </button>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="filter-section">
            <h4 className="sub-title">Availability</h4>
            <div className="filter-list">
              {["in stock", "preorder"].map((status) => (
                <div
                  key={status}
                  className="filter-item"
                  onClick={() => handleAvailabilityFilter(status)}
                >
                  <input
                    type="radio"
                    id={status}
                    name="availability"
                    checked={availability === status}
                    onChange={() => handleAvailabilityFilter(status)}
                  />
                  <label htmlFor={status}>
                    {status === "in stock" ? "In Stock" : "Preorder"}
                  </label>
                </div>
              ))}
              <div className="filter-item" onClick={() => setAvailability("")}>
                <input
                  type="radio"
                  id="all"
                  name="availability"
                  checked={availability === ""}
                  onChange={() => setAvailability("")}
                />
                <label htmlFor="all">All</label>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Section */}
        <div className="products">
          <h1 className="title">All Bike Products</h1>
          {filteredProducts.map((category) => (
            <div key={category.type} className="category">
              <h2 className="category-title">{category.type} Bikes</h2>
              <div className="product-grid">
                {category.bikes.map((bike) => (
                  <div key={bike.id} className="product-card">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="product-image"
                    />
                    <h3 className="bike-name">{bike.name}</h3>
                    <p>
                      <strong className="highlight">MSRP:</strong> $
                      {bike.MSRP.toLocaleString()}
                    </p>
                    <p>
                      <strong className="highlight">Engine:</strong>{" "}
                      {bike.Engine}
                    </p>
                    <p>
                      <strong className="highlight">Horsepower:</strong>{" "}
                      {bike.Horsepower}
                    </p>
                    <p>
                      <strong className="highlight">Torque:</strong>{" "}
                      {bike.Torque}
                    </p>
                    <p>
                      <strong className="highlight">Weight:</strong>{" "}
                      {bike.Weight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
