import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import wiseLifeLogo from "../assets/logo/wiselife-logo.png";
import "./Products.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <div className="wl-wrapper">
      {/* SAME HEADER */}
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

      {/* PRODUCT DETAILS */}
      <section className="wl-products">
        <div className="wl-products-inner pd-clean">

          {/* PRODUCT IMAGE */}
          <div className="pd-image-large">
            <img src={product.image} alt={product.name} />
          </div>

          {/* PRODUCT INFO */}
          <div className="pd-info-clean">
            <span className={`wl-badge ${product.category.toLowerCase()}`}>
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="pd-price-clean">{product.price}</div>

            <p className="pd-desc-clean">{product.description}</p>

            <button className="pd-order-clean">Order Now</button>

            {/* BACK LINK AT BOTTOM */}
           <button
  className="pd-back-fixed"
  onClick={() => navigate(-1)}
>
  ← Back to Products
</button>

          </div>

        </div>
      </section>
    </div>
  );
}
