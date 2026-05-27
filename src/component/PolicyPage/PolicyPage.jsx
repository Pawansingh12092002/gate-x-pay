"use client";

import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import "../../css/PolicyPage.css";

const PolicyPage = ({ title, lastUpdated, sections, heroImage }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Matches navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="gxp-policy-layout">
      {/* Navbar Header */}
      <Header />

      {/* Hero Section */}
      <section className="gxp-policy-hero">
        <div className="gxp-policy-hero-bg">
          <div className="glow-circle blue" />
          <div className="glow-circle purple" />
        </div>
        <div className="gxp-policy-hero-content">
          <span className="gxp-policy-badge">Legal &amp; Compliance</span>
          <h1 className="gxp-policy-title">{title}</h1>
          {heroImage && <img src={heroImage} alt={title} className="gxp-policy-hero-image" />}
          <p className="gxp-policy-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Main Body Layout */}
      <main className="gxp-policy-container">
        <div className="gxp-policy-grid">
          
          {/* Sticky Sidebar Navigation (TOC) */}
          <aside className="gxp-policy-sidebar">
            <div className="gxp-policy-toc-card">
              <h3 className="gxp-policy-toc-title">Table of Contents</h3>
              <div className="gxp-policy-toc-line" />
              <nav className="gxp-policy-toc-nav">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`gxp-policy-toc-link ${
                      activeSection === section.id ? "active" : ""
                    }`}
                  >
                    <span className="dot" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Dynamic Content */}
          <article className="gxp-policy-content">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="gxp-policy-section-card"
              >
                <h2 className="gxp-policy-section-heading">{section.title}</h2>
                <div className="gxp-policy-section-body">
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph, index) => (
                      <p key={index} className="gxp-policy-paragraph">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="gxp-policy-paragraph">{section.content}</p>
                  )}
                </div>
              </section>
            ))}
          </article>

        </div>
      </main>

    
    </div>
  );
};

export default PolicyPage;
