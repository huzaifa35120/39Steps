import React from "react";
import logo from "../assets/logo.png"; // <- your existing logo

export default function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavLinks = () => (
    <>
      <a href="#services" onClick={() => setOpen(false)}>Services</a>
      <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
      <a href="#process"  onClick={() => setOpen(false)}>Process</a>
      <a href="#about"    onClick={() => setOpen(false)}>About</a>
      <a href="#contact"  onClick={() => setOpen(false)}>Contact</a>
    </>
  );

  return (
    <header className="site-header">
      <div className="container nav">
        {/* ---- Logo ---- */}
        <a href="#top" className="logo" aria-label="39 Steps Home">
          <img
            src={logo}
            alt="39 Steps Logo"
            style={{ height: "40px", width: "auto", borderRadius: "6px" }}
          />
        </a>

        {/* ---- Desktop Nav ---- */}
        <nav className="desktop-nav">
          <NavLinks />
        </nav>

        {/* ---- Mobile Menu Toggle ---- */}
        <button
          aria-label="Toggle menu"
          className="mobile-toggle"
          onClick={() => setOpen((v) => !v)}
        >
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* ---- Mobile Dropdown ---- */}
        {open && (
          <nav className="mobile-nav">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
