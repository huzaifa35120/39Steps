import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header.jsx";

/* ====== GALLERY IMAGES ====== */
/* 32 Wembley Avenue (16 imgs) */
import w1 from "./assets/32 Wembley Avenue/32Wemb1.jpg";
import w2 from "./assets/32 Wembley Avenue/32Wemb2.jpg";
import w3 from "./assets/32 Wembley Avenue/32Wemb3.jpg";
import w4 from "./assets/32 Wembley Avenue/32Wemb4.jpg";
import w5 from "./assets/32 Wembley Avenue/32Wemb5.jpg";
import w6 from "./assets/32 Wembley Avenue/32Wemb6.jpg";
import w7 from "./assets/32 Wembley Avenue/32Wemb7.jpg";
import w8 from "./assets/32 Wembley Avenue/32Wemb8.jpg";
import w9 from "./assets/32 Wembley Avenue/32Wemb9.jpg";
import w10 from "./assets/32 Wembley Avenue/32Wemb10.jpg";
import w11 from "./assets/32 Wembley Avenue/32Wemb11.jpg";
import w12 from "./assets/32 Wembley Avenue/32Wemb12.jpg";
import w13 from "./assets/32 Wembley Avenue/32Wemb13.jpg";
import w14 from "./assets/32 Wembley Avenue/32Wemb14.jpg";
import w15 from "./assets/32 Wembley Avenue/32Wemb15.jpg";
import w16 from "./assets/32 Wembley Avenue/32Wemb16.jpg";

/* 101 Melbourne Street (10 imgs) */
import m1 from "./assets/101 Melb Images/melbimage1.jpg";
import m2 from "./assets/101 Melb Images/melbimage2.jpg";
import m3 from "./assets/101 Melb Images/melbimage3.jpg";
import m4 from "./assets/101 Melb Images/melbimage4.jpg";
import m5 from "./assets/101 Melb Images/melbimage5.jpg";
import m6 from "./assets/101 Melb Images/melbimage6.jpg";
import m7 from "./assets/101 Melb Images/melbimage7.jpg";
import m8 from "./assets/101 Melb Images/melbimage8.jpg";
import m9 from "./assets/101 Melb Images/melbimage9.jpg";
import m10 from "./assets/101 Melb Images/melbimage10.jpg";

/* 105 Toongabbie Road (1 img) */
import t1 from "./assets/105 Toongabbie Road/toongabbie1.jpg";

export default function App() {
  // galleries
  const wembleyImages = [
    w1, w2, w3, w4, w5, w6, w7, w8,
    w9, w10, w11, w12, w13, w14, w15, w16
  ];
  const melbImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
  const toongabbieImages = [t1];

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (title, images, start = 0) => {
    setGalleryTitle(title);
    setGalleryImages(images);
    setActiveIndex(start);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);
  const nextImg = () => setActiveIndex((i) => (i + 1) % galleryImages.length);
  const prevImg = () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  return (
    <>
      <a id="top" href="#top" style={{display:"block", position:"absolute", top:0}} aria-hidden="true"></a>
      <Header />
      <div className="header-spacer" />
      <Hero />

      <main>
        <Services />
        <Projects
          onOpenWembley={() => openGallery("32 Wembley Avenue", wembleyImages, 0)}
          onOpenMelbourne={() => openGallery("101 Melbourne Street", melbImages, 0)}
          onOpenToongabbie={() => openGallery("105 Toongabbie Road", toongabbieImages, 0)}
          wembleyThumb={wembleyImages[0]}
          melbThumb={melbImages[0]}
          toongabbieThumb={toongabbieImages[0]}
        />
        <Features />
        <Process />
        <About /> {/* <-- now bigger and no quick facts / testimonials */}
        <Contact />
      </main>

      <Footer />

      {galleryOpen && (
        <div className="lightbox-overlay" onClick={closeGallery}>
          <div className="lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeGallery}>✕</button>
            <img
              src={galleryImages[activeIndex]}
              alt={galleryTitle}
              className="lightbox-img"
            />
            {galleryImages.length > 1 && (
              <>
                <button className="nav-btn prev" onClick={prevImg}>‹</button>
                <button className="nav-btn next" onClick={nextImg}>›</button>
              </>
            )}
            <div className="counter">
              {galleryTitle} • {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Sections ---------- */

function Hero(){
  return (
    <section className="hero">
      <div className="container wrap">
        <div className="fade-up">
          <div className="kicker">Sydney • Residential Construction</div>
          <h1 className="h1" style={{marginTop: 6}}>
            39 Steps. Built to last.
          </h1>
          <p className="p" style={{marginTop: 14}}>
            Custom homes, extensions and renovations with tight project control.
            Local crew, transparent pricing, premium finishes.
          </p>
          <div style={{display:"flex", gap:12, marginTop: 18}}>
            <a className="btn" href="#contact">Request a quote</a>
            <a className="btn ghost" href="#projects">See our builds</a>
          </div>
        </div>

        <div className="hero-visual card fade-up" style={{animationDelay:"0.15s"}} aria-hidden="true">
          <div className="hero-panel">
            <p className="hero-stat">Local</p>
            <p className="hero-label">Sydney builder</p>
          </div>
          <div className="hero-panel">
            <p className="hero-stat">On time</p>
            <p className="hero-label">Milestone tracking</p>
          </div>
          <div className="hero-panel">
            <p className="hero-stat">Premium</p>
            <p className="hero-label">Finishes & detailing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services(){
  const list = [
    { t: "Custom Homes", d: "Architect-focussed builds with detailed finishes." },
    { t: "Renovations", d: "Kitchens, bathrooms and whole-home upgrades." },
    { t: "Extensions", d: "Ground and first-floor additions that integrate cleanly." },
    { t: "Project Management", d: "Program, trades, WHS and reporting." },
    { t: "Insurance / Remedial", d: "Compliant rectification work." },
    { t: "Granny Flats / Secondary", d: "Smart, value-adding spaces." },
  ];
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">What we build</div>
          <h2 className="h2" style={{marginTop:6}}>Residential construction services</h2>
        </div>
        <div className="grid-3">
          {list.map((s,i)=>(
            <article className="card service fade-up" key={i} style={{animationDelay:`${i*0.04}s`}}>
              <div className="icon-block">
                <span className="icon-dot" />
              </div>
              <h3 className="card-title">{s.t}</h3>
              <p className="p" style={{marginTop:6}}>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ onOpenWembley, onOpenMelbourne, onOpenToongabbie, wembleyThumb, melbThumb, toongabbieThumb }){
  const projects = [
    { t:"32 Wembley Avenue", d:"New build • family home", thumb: wembleyThumb, onClick: onOpenWembley },
    { t:"101 Melbourne Street", d:"Urban renovation", thumb: melbThumb, onClick: onOpenMelbourne },
    { t:"105 Toongabbie Road", d:"First-floor addition", thumb: toongabbieThumb, onClick: onOpenToongabbie },
  ];
  return (
    <section id="projects" className="section" style={{paddingTop: 0}}>
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">Project showcase</div>
          <h2 className="h2" style={{marginTop:6}}>Recent work</h2>
        </div>
        <div className="grid-3">
          {projects.map((p,i)=>(
            <article
              className="card project fade-up project-card"
              key={i}
              onClick={p.onClick}
              style={{cursor:"pointer", animationDelay:`${i*0.06}s`}}
            >
              <div
                className="thumb"
                style={{
                  backgroundImage: `url(${p.thumb})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <div className="project-body">
                <h3 className="card-title">{p.t}</h3>
                <p className="p" style={{marginTop:4}}>{p.d}</p>
                <span className="project-link">View gallery →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features(){
  const feats = [
    { t:"Licensed & insured", d:"NSW licensed builder with HBCF cover."},
    { t:"Transparent budgets", d:"Itemised scopes, progress claims, no surprises."},
    { t:"Quality trades", d:"Trusted subcontractors we’ve worked with for years."},
    { t:"Communication", d:"One point of contact, weekly updates, site photos."},
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">Why clients pick us</div>
          <h2 className="h2" style={{marginTop:6}}>Built on clarity and craft</h2>
        </div>
        <div className="grid-2">
          {feats.map((f,i)=>(
            <article className="card feature fade-up" key={i} style={{animationDelay:`${i*0.05}s`}}>
              <div className="icon-block small">
                <span className="icon-dot" />
              </div>
              <h3 className="card-title">{f.t}</h3>
              <p className="p" style={{marginTop:6}}>{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process(){
  const steps = [
    { t:"1) Discover", d:"Site visit, goals, budget and constraints."},
    { t:"2) Plan", d:"Drawings, approvals, program, pricing."},
    { t:"3) Build", d:"Supervised construction and clean handover."},
  ];
  return (
    <section id="process" className="section process">
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">Process</div>
          <h2 className="h2" style={{marginTop:6}}>Three steps from idea to keys</h2>
        </div>
        <div className="grid-3">
          {steps.map((s,i)=>(
            <article className="card step fade-up" key={i} style={{animationDelay:`${i*0.05}s`}}>
              <div className="step-num">{i+1}</div>
              <h3 className="card-title">{s.t}</h3>
              <p className="p" style={{marginTop:6}}>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="card fade-up" style={{padding:32}}>
          <div className="kicker">About 39 Steps</div>
          <h2 className="h2" style={{marginTop:6}}>A builder that actually calls you back</h2>
          <p className="p" style={{marginTop:12, maxWidth: "52rem"}}>
            We run lean, well-managed residential jobs across Sydney. That means
            clear scopes, realistic schedules and a single decision-maker you can
            talk to at any time. We keep sites tidy, neighbours happy and
            communication open — so you always know what is happening next.
          </p>

          <div style={{display:"flex", gap:18, flexWrap:"wrap", marginTop:24}}>
            <div className="about-pill">
              Transparent communication
            </div>
            <div className="about-pill">
              Quality-first trades
            </div>
            <div className="about-pill">
              On-time handovers
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/xblpnrro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container grid-2">
        <div className="fade-up">
          <div className="kicker">Contact</div>
          <h2 className="h2" style={{ marginTop: 6 }}>Tell us about your project</h2>
          <p className="p" style={{ marginTop: 10 }}>
            Send us your suburb, rough scope and timeline. We’ll reply with a quick
            sanity-check and next steps.
          </p>

          <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: "8px" }}>
            <p className="p"><strong>Email:</strong> tbg.faizan@gmail.com</p>
            <p className="p"><strong>Phone:</strong> 0424 870 667</p>
          </div>
        </div>

        <form className="card fade-up" onSubmit={handleSubmit}>
          <label className="p">Name</label>
          <input
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            style={{ margin: "6px 0 12px" }}
            required
          />

          <label className="p">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={{ margin: "6px 0 12px" }}
            required
          />

          <label className="p">Message</label>
          <textarea
            className="input"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your project"
            style={{ margin: "6px 0 16px" }}
            required
          />

          <button className="btn" type="submit">Send message</button>
          <div className="p" style={{ marginTop: 8, fontSize: ".9rem" }}>
            We’ll get back to you shortly.
          </div>
        </form>
      </div>
    </section>
  );
}



function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12}}>
        <div>© {new Date().getFullYear()} 39 Steps. All rights reserved.</div>
        <div>Built in Sydney.</div>
      </div>
    </footer>
  )
}
