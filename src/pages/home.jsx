import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import "./home.css";

/* HERO BACKGROUND IMAGES */
const heroImages = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920",
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920",
];

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

export default function Home() {
  const [product, setProduct] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  /* Product carousel */
  useEffect(() => {
    const timer = setInterval(() => {
      setProduct((p) => (p + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* Hero background carousel */
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((h) => (h + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="wl-wrapper">
      {/* HERO */}
      <section className="hero">
        {/* BACKGROUND IMAGES */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`hero-bg-slide ${i === heroIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-tagline">
              <span className="tagline-white">WE </span>
              <span className="tagline-accent">INNOVATE </span>
              <span className="tagline-accent">SOLUTIONS </span>
              <br />
              <span className="tagline-white">FOR </span>
              <span className="tagline-white">EASE </span>
              <span className="tagline-white">OF </span>
              <span className="tagline-white">LIFE</span>
            </p>
            <ArrowDown className="hero-scroll" />
          </div>

          {/* RIGHT STATS */}
          <div className={`hero-right animate-stats-${heroIndex}`}>
            <div className="stat-card">
              <h3>9+</h3>
              <p>Years of Industry Experience</p>
            </div>
            <div className="stat-card">
              <h3>2000+</h3>
              <p>Rooftop Solar Installations</p>
            </div>
            <div className="stat-card">
              <h3>Authorized</h3>
              <p>PURE Energy Distributor</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
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
    </div>
  );
}

