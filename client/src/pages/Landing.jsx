import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="brand">
          <span className="brand-line"></span>
          <span>STUDENT PROJECTS</span>
        </div>

        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">Log In</Link>
          <Link to="/signup" className="signup-link">Sign Up</Link>
          <Link to="/admin" className="admin-link">Admin</Link>
        </div>
      </header>

      <main className="landing-hero">
        <div className="floating-icon icon-code">&lt;/&gt;</div>
        <div className="floating-icon icon-square">◇</div>
        <div className="floating-icon icon-command">⌘</div>
        <div className="floating-icon icon-star">✱</div>

        <section className="hero-content">
          <div className="hero-label">
            <span></span>
            <strong>STUDENT</strong>
            <span></span>
          </div>

          <h1 className="hero-title">
            <span>Project</span>{" "}
            <span className="title-accent">Catalog</span>
          </h1>

          <p className="hero-description">
            Discover, request and explore student projects across courses and technologies
          </p>

          <Link to="/login" className="get-started">
            Get Started
          </Link>
        </section>
      </main>
    </div>
  );
}