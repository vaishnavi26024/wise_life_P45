import { useEffect, useState } from "react";
import "./homeProducts.css";

const products = [
  {
    name: "PURE HOME",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600",
  },
  {
    name: "PURE COMMERCIAL",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
  },
  {
    name: "PURE EV",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600",
  },
];

export default function HomeProducts() {
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProduct((prev) => (prev + 1) % products.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="products">
      <div className="products-heading">
        <h2>Product Portfolio</h2>
        <p>Authorized PURE Energy Solutions</p>
      </div>

      <div className="products-carousel">
        {products.map((p, i) => (
          <div
            key={i}
            className={`product-slide ${i === product ? "active" : ""}`}
            style={{ backgroundImage: `url(${p.image})` }}
          >
            <div className="product-overlay"></div>
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
