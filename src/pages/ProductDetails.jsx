import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import "./Products.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  // NOTE: The main Navbar is already present in App.jsx layout.
  // We do not need a second header here.

  return (
    <div className="wl-wrapper pd-page">
      <div className="pd-container">

        {/* LEFT COLUMN: IMAGE */}
        <div className="pd-image-section">
          <div className="pd-image-card">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* RIGHT COLUMN: INFO */}
        <div className="pd-info-section">
          <div className="pd-info-card">
            <span className={`wl-badge ${product.category.toLowerCase()} pd-badge`}>
              {product.category}
            </span>

            <h1 className="pd-title">{product.name}</h1>
            <div className="pd-price">{product.price}</div>

            <p className="pd-description">
              {product.description}
            </p>

            <div className="pd-features">
              <h3>Key Features</h3>
              <ul>
                <li>High efficiency performance</li>
                <li>Eco-friendly materials</li>
                <li>24/7 Customer Support</li>
                <li>5-Year Warranty</li>
              </ul>
            </div>

            <div className="pd-actions">
              <button className="pd-btn-primary">Order Now</button>
              <button className="pd-btn-secondary" onClick={() => navigate('/products', { state: { scroll: false } })}>
                Go Back
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
