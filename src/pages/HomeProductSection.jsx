import { useEffect, useState } from "react";
import "./home.css"; // We can reuse the same css file if styles don't conflict
import "../styles.css"; // Or import the main stylesheet

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

export default function HomeProductSection() {
  const [product, setProduct] = useState(0);

  /* Product carousel */
  useEffect(() => {
    const timer = setInterval(() => {
      setProduct((p) => (p + 1) % products.length);
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
            <div className="product-overlay" />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
