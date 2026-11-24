import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <Code2 size={26} />
        <span>MyPortfolio<span className="logo-dot">.</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </nav>
  );
}

export default Navbar;