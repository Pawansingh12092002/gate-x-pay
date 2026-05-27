"use client";
import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import CTA from '../CTA/CTA';
import ContactForm from '../ContactForm/ContactForm';
import styles from '../../css/BlogPage.module.css';

// Local assets image for blog cards (POS payment terminals)
const BLOG_IMAGE_URL = "/Rectangle 287.png";

const ALL_CATEGORIES = [
  "All Categories",
  "Digital & IT Services",
  "PAN Card Services",
  "Loan & Credit Services",
  "Banking Tie-Up Services",
  "Travel Services",
  "AEPS Services",
  "Micro ATM Services"
];

const INITIAL_BLOGS = [
  { id: 1, category: "Digital & IT Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 2, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 3, category: "Loan & Credit Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 4, category: "Banking Tie-Up Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  
  { id: 5, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 6, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 7, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 8, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  
  { id: 9, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 10, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 11, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 12, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  
  { id: 13, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 14, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 15, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 16, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  
  { id: 17, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 18, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 19, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" },
  { id: 20, category: "PAN Card Services", title: "The Future of Secure Digital Payments", date: "09 May 2026" }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('main'); // 'main' or 'csp'

  // Reset category and pagination on view toggle
  useEffect(() => {
    setSelectedCategory("All Categories");
    setCurrentPage(1);
  }, [view]);

  // Always scroll to top when page changes or mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Filter logic based on select dropdown
  const filteredBlogs = selectedCategory === "All Categories"
    ? INITIAL_BLOGS
    : INITIAL_BLOGS.filter(b => b.category === selectedCategory);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.blogPage}>
      {/* Dynamic Header */}
      <Header />

      {/* Main Blog Container */}
      <main className={styles.blogWrapper}>
        
        {/* BREADCRUMB & FILTER TOP BAR */}
        <div className={styles.topFilterBar}>
          <div className={styles.breadcrumb}>
            {view === 'main' ? (
              <>
                <span className={styles.orangeText}>Blog</span>
                <span className={styles.separator}>/</span>
                <button 
                  className={styles.breadcrumbInactiveBtn}
                  onClick={() => setView('csp')}
                  aria-label="Switch to CSP Categories Page"
                >
                  Categories
                </button>
                <span className={styles.separator}>/</span>
                <button 
                  className={styles.breadcrumbInactiveBtn}
                  onClick={() => setView('sub')}
                  aria-label="Switch to Sub-categories Page"
                >
                  Sub-categories (Digital & IT Services)
                </button>
              </>
            ) : view === 'csp' ? (
              <>
                <button 
                  className={styles.breadcrumbInactiveBtn}
                  onClick={() => setView('main')}
                  aria-label="Switch to Main Blog Page"
                >
                  Blog
                </button>
                <span className={styles.separator}>/</span>
                <span className={styles.orangeText}>Categories (CSP)</span>
                <span className={styles.separator}>/</span>
                <button 
                  className={styles.breadcrumbInactiveBtn}
                  onClick={() => setView('sub')}
                  aria-label="Switch to Sub-categories Page"
                >
                  Sub-categories (Digital & IT Services)
                </button>
              </>
            ) : (
              <>
                <button 
                  className={styles.breadcrumbInactiveBtn}
                  onClick={() => setView('main')}
                  aria-label="Switch to Main Blog Page"
                >
                  Blog
                </button>
                <span className={styles.separator}>/</span>
                <button 
                  className={styles.breadcrumbInactiveBtn}
                  onClick={() => setView('csp')}
                  aria-label="Switch to CSP Categories Page"
                >
                  Categories
                </button>
                <span className={styles.separator}>/</span>
                <span className={styles.orangeText}>Sub-categories (Digital & IT Services)</span>
              </>
            )}
          </div>

          <div className={styles.filterDropdownWrapper}>
            <select 
              value={selectedCategory} 
              onChange={handleCategoryChange} 
              className={styles.filterSelect}
              aria-label="Filter blogs by category"
            >
              {ALL_CATEGORIES.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat === "All Categories" ? (view === 'main' ? "Categories" : view === 'csp' ? "Categories (CSP)" : "Sub-categories (Digital & IT Services)") : cat}
                </option>
              ))}
            </select>
            <span className={styles.dropdownCaret}>▼</span>
          </div>
        </div>

        {/* BLOG GRID: Dito exact 4-columns layout matching screenshot */}
        <div className={styles.blogGrid}>
          {filteredBlogs.map((blog, index) => (
            <article key={blog.id} className={styles.blogCard}>
              
              {/* Image Box */}
              <div className={styles.cardImageWrapper}>
                <img 
                  src={(view === 'sub' && index === 0) ? "/20.png" : BLOG_IMAGE_URL} 
                  alt="POS Payment Terminal" 
                  className={styles.cardImage} 
                  loading="lazy"
                />
              </div>

              {/* Solid dark category banner directly under the image */}
              <div className={styles.categoryBanner}>
                {blog.category}
              </div>

              {/* Content Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardHeadline}>
                  {blog.title}
                </h3>
                <p className={styles.cardText}>
                  In today's digital economy, businesses are processing more online transactions than ever before.
                </p>
                
                {/* Footer section with Pillow Button & Date */}
                <div className={styles.cardFooter}>
                  <a href="/blog-details" style={{ textDecoration: 'none' }}>
                    <button className={styles.readMoreBtn}>
                      Read More
                    </button>
                  </a>
                  <span className={styles.cardDate}>
                    {blog.date}
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* PAGINATION PANEL */}
        <div className={styles.pagination}>
          <button 
            className={styles.pagArrow} 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            &lt;
          </button>
          
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`${styles.pagNum} ${currentPage === pageNum ? styles.activePage : ''}`}
            >
              {pageNum}
            </button>
          ))}

          <button 
            className={styles.pagArrow} 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
            disabled={currentPage === 5}
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>

      </main>

      {/* Dynamic CTA and Contact Form */}
      <CTA />
      <ContactForm />

    
    </div>
  );
};

export default BlogPage;
