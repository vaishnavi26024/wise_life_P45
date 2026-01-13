import { useState } from "react";
import { products } from "../data";
import "./Products.css";
import wiseLifeLogo from "../assets/logo/wiselife-logo.png";
import { useNavigate } from "react-router-dom";

// 👉 IMPORT YOUR VIDEO HERE
import bgVideo from "../assets/video/green-energy.mp4";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="wl-wrapper">
      {/* HEADER */}
      <header className="wl-header">
        <div className="wl-header-inner">
          <div className="wl-brand">
            <img src={wiseLifeLogo} alt="Wise Life Logo" />
            <div className="wl-brand-text">
              <span className="company-name">WISE LIFE</span>
              <span className="company-moto">
                Powering Clean Energy & Sustainable Mobility
              </span>
            </div>
          </div>

          <div className="wl-header-contact">
            <a href="mailto:info@wiselifee.com">info@wiselifee.com</a>
            <span className="divider">|</span>
            <a href="tel:+917796711722">+91 77967 11722</a>
          </div>
        </div>
      </header>

      {/* CONTROLS */}
      <section className="wl-controls">
        <div className="wl-controls-inner">
          <h1>Our Products</h1>

          <div className="wl-filters">
            {["All", "Solar", "EV"].map((cat) => (
              <button
                key={cat}
                className={`pill ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="wl-search">
            <input
              type="text"
              placeholder="Search solar, EV, chargers, inverters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID WITH BACKGROUND VIDEO */}
      <section className="wl-products">
        {/* BACKGROUND VIDEO */}
        <video
          className="wl-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* PRODUCTS CONTENT */}
        <div className="wl-products-inner">
          {filteredProducts.map((item) => (
            <div className="wl-product-row" key={item.id}>
              {/* IMAGE */}
              <div className="wl-product-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* INFO */}
              <div className="wl-product-info">
                <span className={`wl-badge ${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
                <h2>{item.name}</h2>
              </div>

              {/* ACTION */}
              <div className="wl-product-action">
                <div className="price">{item.price}</div>
                <button onClick={() => navigate(`/product/${item.id}`)}>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
