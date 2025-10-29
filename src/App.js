import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";

export default function App() {
  return (
    <>
      <a id="top" href="#top" style={{display:"block", position:"absolute", top:0}} aria-hidden="true"></a>
      <Header />
      <div className="header-spacer" />
      <Hero />

      <main>
        <Services />
        <Projects />
        <Features />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

/* ---------- Sections ---------- */

function Hero(){
  return (
    <section className="hero">
      <div className="container wrap">
        <div>
          <div className="kicker">Sydney • New builds • Renovations</div>
          <h1 className="h1" style={{marginTop: 6}}>
            Crafting high-quality homes, one step at a time.
          </h1>
          <p className="p" style={{marginTop: 14}}>
            39 Steps is a Sydney home construction company specialising in custom
            homes, renovations and extensions. From concept to handover, we manage
            the details so you can enjoy the result.
          </p>
          <div style={{display:"flex", gap:12, marginTop: 18}}>
            <a className="btn" href="#contact">Get a free quote</a>
            <a className="btn alt" href="#projects">View projects</a>
          </div>
        </div>

        <div className="hero-visual card" aria-hidden="true" />
      </div>
    </section>
  )
}

function Services(){
  const list = [
    { t:"Custom Home Building", d:"Turn-key delivery of architecturally designed new homes." },
    { t:"Renovations", d:"Kitchen, bathroom, and full-home transformations that respect your budget." },
    { t:"Extensions & First-Floor Additions", d:"Grow the space you love with minimal disruption." },
    { t:"Project & Site Management", d:"Program, trades, quality and safety—coordinated in one place." },
    { t:"Insurance & Remedial Works", d:"Fast, compliant rectification and make-safe services." },
    { t:"Granny Flats", d:"Smart, compact living that adds value to your property." },
  ];
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">What we do</div>
          <h2 className="h2" style={{marginTop:6}}>End-to-end residential construction</h2>
        </div>
        <div className="grid-3">
          {list.map((s,i)=>(
            <article className="card service" key={i}>
              <div className="icon">🏗️</div>
              <h3 style={{marginTop:10, fontWeight:800}}>{s.t}</h3>
              <p className="p" style={{marginTop:8}}>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects(){
  const projects = [
    { t:"Coastal Contemporary", d:"New build • 4 bed • open-plan living" },
    { t:"Heritage Revival", d:"Full renovation • federation cottage" },
    { t:"Skyline Addition", d:"First-floor addition • parents’ retreat" },
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
            <article className="card project" key={i}>
              <div className="thumb" />
              <h3 style={{fontWeight:800}}>{p.t}</h3>
              <p className="p" style={{marginTop:6}}>{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features(){
  const feats = [
    { t:"Licensed & insured", d:"Fully compliant with NSW regulations and HBCF insurance."},
    { t:"Transparent pricing", d:"Detailed scopes, itemised quotes and zero hidden extras."},
    { t:"Fixed lead-times", d:"Reliable schedules with clear milestones and weekly updates."},
    { t:"Quality trades", d:"Trusted subcontractors we’ve worked with for years."},
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">Why 39 Steps</div>
          <h2 className="h2" style={{marginTop:6}}>Built on clarity and craft</h2>
        </div>
        <div className="grid-2">
          {feats.map((f,i)=>(
            <article className="card feature" key={i}>
              <div className="icon">✅</div>
              <h3 style={{marginTop:10, fontWeight:800}}>{f.t}</h3>
              <p className="p" style={{marginTop:8}}>{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process(){
  const steps = [
    { t:"1) Discover", d:"Site visit, goals, budget and constraints. We align on scope and success measures."},
    { t:"2) Design & Plan", d:"Drawings, approvals, engineering and a clear build program."},
    { t:"3) Build & Handover", d:"Quality workmanship, clean site, progress updates and a stress-free handover."},
  ];
  return (
    <section id="process" className="section" style={{background:"#f0f6ff"}}>
      <div className="container">
        <div style={{marginBottom:18}}>
          <div className="kicker">The Integral Process</div>
          <h2 className="h2" style={{marginTop:6}}>Three steps from idea to keys</h2>
        </div>
        <div className="grid-3">
          {steps.map((s,i)=>(
            <article className="card step" key={i}>
              <div className="icon">🔷</div>
              <h3 style={{marginTop:10, fontWeight:800}}>{s.t}</h3>
              <p className="p" style={{marginTop:8}}>{s.d}</p>
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
      <div className="container grid-2">
        <div>
          <div className="kicker">About us</div>
          <h2 className="h2" style={{marginTop:6}}>A builder who listens</h2>
          <p className="p" style={{marginTop:10}}>
            We founded 39 Steps to bring craftsmanship and communication back to
            residential building. You’ll get one point of contact, weekly updates,
            and a tidy site. We treat your home like our own.
          </p>
          <ul className="p" style={{marginTop:10, paddingLeft:18}}>
            <li>• 10+ years combined residential experience</li>
            <li>• Fully licensed builder • Sydney, Australia</li>
            <li>• Transparent timelines & progress reporting</li>
          </ul>
        </div>
        <div className="card" style={{padding:22}}>
          <h3 style={{fontWeight:800}}>Quick facts</h3>
          <div className="p" style={{marginTop:8}}>
            ABN: 00 000 000 000<br/>
            Licence: NSW XXXX<br/>
            Email: hello@39steps.com.au<br/>
            Phone: (02) 0000 0000
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials(){
  const quotes = [
    { q:"Flawless communication and the finish exceeded expectations.", c:"Amelia • North Shore" },
    { q:"They stuck to the program and kept the site immaculate.", c:"James • Inner West" },
  ];
  return (
    <section className="section" style={{paddingTop:0}}>
      <div className="container grid-2">
        {quotes.map((t,i)=>(
          <blockquote key={i} className="card testimonial">
            <div className="quote">“{t.q}”</div>
            <div className="client">— {t.c}</div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="section contact">
      <div className="container grid-2">
        <div>
          <div className="kicker">Contact</div>
          <h2 className="h2" style={{marginTop:6}}>Tell us about your project</h2>
          <p className="p" style={{marginTop:10}}>
            Send us your suburb, rough scope and timeline. We’ll reply with a quick
            sanity-check and next steps.
          </p>
          <div style={{marginTop:16, display:"flex", gap:12}}>
            <a className="btn" href="mailto:hello@39steps.com.au?subject=Quote%20request%20-%2039%20Steps">Email us</a>
            <a className="btn alt" href="tel:+61200000000">Call (02) 0000 0000</a>
          </div>
        </div>
        <form className="card" onSubmit={(e)=>e.preventDefault()}>
          <label className="p">Name</label>
          <input className="input" placeholder="Your name" style={{margin:"6px 0 12px"}} />
          <label className="p">Email</label>
          <input type="email" className="input" placeholder="you@example.com" style={{margin:"6px 0 12px"}} />
          <label className="p">Message</label>
          <textarea className="input" rows="5" placeholder="Briefly describe your project" style={{margin:"6px 0 16px"}} />
          <button className="btn" type="submit">Send message</button>
          <div className="p" style={{marginTop:8, fontSize:".9rem"}}>Form is a demo—use the email/phone buttons to reach us.</div>
        </form>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12}}>
        <div>© {new Date().getFullYear()} 39 Steps. All rights reserved.</div>
        <div>Built with ❤️ in Sydney.</div>
      </div>
    </footer>
  )
}
