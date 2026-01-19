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
  const [isAboutSectionActive, setIsAboutSectionActive] = useState(false);
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


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'about') {
            if (justUnlockedAbout.current) {
              return; // Ignore intersection changes immediately after unlock
            }
            setIsAboutSectionActive(entry.isIntersecting);
          }

          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (!isScrollingRef.current) {
              if (!initialLoadRef.current || location.hash !== '') {
                navigate(`#${sectionId}`, { replace: true });
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [navigate, location.hash]);

  useEffect(() => {
    if (isAboutSectionActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isAboutSectionActive]);


  const handleAboutScrollEnd = () => {
    setIsAboutSectionActive(false);
    scrollToSection('products');
  };

  const handleAboutScrollStart = () => {
    setIsAboutSectionActive(false);
    scrollToSection('home-products');
  };

  const handleUnlockScroll = () => {
    setIsAboutSectionActive(false);
    justUnlockedAbout.current = true;
    setTimeout(() => {
      justUnlockedAbout.current = false;
    }, 100); // Debounce to allow user to scroll away
  };

  return (
    <div className="landing-wrapper">
      <section id="home" ref={sectionRefs.home}>
        <Home />
      </section>
      <section id="home-products" ref={sectionRefs['home-products']}>
        <HomeProductSection />
      </section>
      <section id="about" ref={sectionRefs.about}>
        <About
          onHorizontalScrollEnd={handleAboutScrollEnd}
          onHorizontalScrollStart={handleAboutScrollStart}
          onUnlockScroll={handleUnlockScroll}
          isAboutSectionActive={isAboutSectionActive}
        />
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
