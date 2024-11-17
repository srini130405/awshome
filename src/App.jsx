import React from "react";
import "./App.css"; // Assuming the styles are placed in a separate CSS file
import Card1 from "./Card1";
const Navbar = () => (
  <nav>
    <a href="#" className="logo">DevPlatform</a>
    <div className="nav-links">
      <a href="#">Support</a>
      <a href="#">Product</a>
      <a href="#">Company</a>
      <a href="#">Account</a>
    </div>
    <a href="#" className="buy-button">Buy Template</a>
  </nav>
  
);

const CodeWindow = () => (
  <div className="code-window">
    <div className="window-controls">
      <div className="control red"></div>
      <div className="control yellow"></div>
      <div className="control green"></div>
    </div>
    <code>
     
    </code>
  </div>
);

const FeatureSection = () => (
  <section className="features-section">
    <span className="step-number">01 · GET STARTED</span>
    <div className="feature-content">
      <div className="feature-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z" />
        </svg>
      </div>
      <h2 className="feature-title">
        Works perfectly with your
        <div className="blue-text">semantics.</div>
      </h2>
      <p className="feature-description">
        Stand out online with a professional website, online store, or portfolio. With our templates, you can turn any idea into a reality.
      </p>
    </div>
  </section>
);

const HeroSection = () => (
  <section className="hero-section">
    <h1>The site you want.<br />Without the <span className="highlight">dev time</span>.</h1>
    <CodeWindow />
  </section>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="grid-background"></div>
      <main>
        <HeroSection />
        <FeatureSection />
        <Card1/>
      </main>
    </div>
  );
};

export default App;
