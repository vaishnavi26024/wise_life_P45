import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Home from './home';
import HomeProductSection from './HomeProductSection';
import About from '../components/About';
import Products from './Products';
import Business from './Business';
import Contact from './Contact';
import Footer from '../components/common/Footer';

import './LandingPage.css';

const sections = ['home', 'home-products', 'about', 'products', 'business', 'contact', 'footer'];

const LandingPage = () => {
  // const [isAboutSectionActive, setIsAboutSectionActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);
  const initialLoadRef = useRef(true);
  const justUnlockedAbout = useRef(false);

  const sectionRefs = {
    home: useRef(null),
    'home-products': useRef(null),
    about: useRef(null),
    products: useRef(null),
    business: useRef(null),
    contact: useRef(null),
    footer: useRef(null),
    aboutWrapper: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    if (sectionRefs[sectionName] && sectionRefs[sectionName].current) {
      isScrollingRef.current = true;
      sectionRefs[sectionName].current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    if (initialLoadRef.current && location.hash === '') {
      navigate('#home', { replace: true });
    }
    const hash = location.hash.replace('#', '');
    if (hash && sections.includes(hash)) {
      setTimeout(() => scrollToSection(hash), 100);
    }
    initialLoadRef.current = false;
  }, [location.hash, navigate]);


  /* ----------------------------------------------------
     SCROLL HANDLER FOR "ABOUT" SECTION (STICKY)
  ----------------------------------------------------- */
  // 0 or 1 (Page 1 or Page 2)
  const [aboutPage, setAboutPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRefs.aboutWrapper.current) return;

      const rect = sectionRefs.aboutWrapper.current.getBoundingClientRect();
      const offsetTop = rect.top;       // Distance from top of viewport
      const height = rect.height;       // Total height (250vh)
      const windowHeight = window.innerHeight;

      // START: When section hits top (0).
      // END:   When bottom of section hits bottom of screen (or similar).

      // Calculate progress: 0 at start, 1 at end of scroll
      // We want the interaction to happen while it's "sticky".
      // Sticky is active roughly from top=0 until bottom=windowHeight.
      // Since height = 250vh and sticky is 100vh, we track the scrolling.

      // A simple logic: 
      // If (top < 0) we are scrolling INSIDE the wrapper.
      // If we are significantly past the start, switch to Page 2.

      if (offsetTop <= 0 && offsetTop > -(height - windowHeight)) {
        // Inside the sticky zone
        // Let's say we switch after scrolling 30% of the viewport height into it
        const scrollDistance = Math.abs(offsetTop);
        // Switch point: scroll 50vh down
        if (scrollDistance > windowHeight * 0.5) {
          setAboutPage(1);
        } else {
          setAboutPage(0);
        }
      } else if (offsetTop > 0) {
        // Above the section
        setAboutPage(0);
      } else {
        // Passed the section
        setAboutPage(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-wrapper">
      <section id="home" ref={sectionRefs.home}>
        <Home />
      </section>
      <section id="home-products" ref={sectionRefs['home-products']}>
        <HomeProductSection />
      </section>

     
          <section id="about" ref={sectionRefs.about}>
            <About externalPage={aboutPage} />
          </section>
      <section id="products" ref={sectionRefs.products}>
        <Products />
      </section>
      <section id="business" ref={sectionRefs.business}>
        <Business />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <Contact showFooter={false} />
      </section>
      <section id="footer" ref={sectionRefs.footer}>
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
