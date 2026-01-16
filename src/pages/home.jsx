import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import "./home.css";

/* HERO BACKGROUND IMAGES */
const heroImages = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920",
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920",
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  /* Hero background carousel */
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((h) => (h + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
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
            <span className="tagline-white"> WE  </span>
            <span className="tagline-accent"> INNOVATE  </span>
            <span className="tagline-accent"> SOLUTIONS  </span>
            <br />
            <span className="tagline-white"> FOR  </span>
            <span className="tagline-white"> EASE  </span>
            <span className="tagline-white"> OF  </span>
            <span className="tagline-white"> LIFE </span>
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
  );
}

