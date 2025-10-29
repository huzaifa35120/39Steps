import React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  // Close the mobile menu when resizing to desktop
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
        {/* Logo */}
        <a href="#top" className="logo" aria-label="39 Steps Home">
          <span className="logo-mark">39</span>
          <span>Steps • Home Construction</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLinks />
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="mobile-toggle btn alt"
          onClick={() => setOpen(v => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <nav className="mobile-nav">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
