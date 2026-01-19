import { useState } from "react";
import { products } from "../data";
import "./Products.css";
import { useNavigate } from "react-router-dom";

// 👉 IMPORT YOUR VIDEO HERE
import bgVideo from "../assets/video/green-energy.mp4";

export default function Products() {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    return matchCategory;
  });

  return (
    <div className="wl-wrapper">
      {/* PRODUCTS GRID WITH BACKGROUND VIDEO */}
      <section className="wl-products">
        <h1>Our Products</h1>

        {/* CATEGORY FILTERS */}
        <div className="wl-product-filters">
          <button onClick={() => setCategory("All")}>All</button>
          <button onClick={() => setCategory("Solar")}>Solar</button>
          <button onClick={() => setCategory("EV")}>EV</button>
        </div>

         /* BACKGROUND VIDEO */ 
        { <video
          className="wl-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" /> 
        </video>}

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
