import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/constants";

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg sticky-top shadow-sm py-3"
        style={{ backgroundColor: "#192B37" }}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
            <i className="bi bi-shield-check me-2"></i>EndaSure
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#landingNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="landingNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <li className="nav-item">
                <a href="#features" className="nav-link text-white opacity-75">Features</a>
              </li>
              <li className="nav-item">
                <a href="#plans" className="nav-link text-white opacity-75">Plans</a>
              </li>
              <li className="nav-item">
                <a href="#how-it-works" className="nav-link text-white opacity-75">How It Works</a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link text-white opacity-75">Testimonials</a>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to={ROUTES.LOGIN} className="btn btn-outline-light btn-sm px-3">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={ROUTES.REGISTER}
                  className="btn btn-sm px-3 fw-semibold"
                  style={{ backgroundColor: "#FF5640", color: "#fff", border: "none" }}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #192B37 0%, #30404B 50%, #47555F 100%)",
          minHeight: "85vh",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"
          style={{
            background: "radial-gradient(circle at 70% 50%, rgba(255,86,64,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="container d-flex align-items-center" style={{ minHeight: "85vh" }}>
          <div className="row align-items-center w-100">
            <div className="col-lg-6 text-white py-5">
              <span
                className="badge rounded-pill px-3 py-2 mb-3 fw-normal"
                style={{ backgroundColor: "rgba(255,86,64,0.15)", color: "#FF5640" }}
              >
                <i className="bi bi-lightning-charge-fill me-1"></i>
                Trusted by 10,000+ Families
              </span>
              <h1 className="display-4 fw-bold mb-3 lh-sm">
                Health Insurance,{" "}
                <span style={{ color: "#FF5640" }}>Simplified.</span>
              </h1>
              <p className="lead mb-4 opacity-75" style={{ maxWidth: "500px" }}>
                Comprehensive health coverage for you and your family.
                Compare plans, manage policies, and file claims — all in one
                platform.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link
                  to={ROUTES.REGISTER}
                  className="btn btn-lg px-4 fw-semibold shadow"
                  style={{ backgroundColor: "#FF5640", color: "#fff", border: "none" }}
                >
                  Start Free Trial
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <a
                  href="#plans"
                  className="btn btn-lg btn-outline-light px-4"
                >
                  View Plans
                </a>
              </div>
              <div className="d-flex align-items-center gap-4 mt-4 pt-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color: "#2D9C5B" }}></i>
                  <small className="opacity-75">No hidden fees</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color: "#2D9C5B" }}></i>
                  <small className="opacity-75">Instant claims</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color: "#2D9C5B" }}></i>
                  <small className="opacity-75">24/7 support</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="card border-0 shadow-lg p-4 mx-auto"
                style={{
                  maxWidth: "420px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="text-center mb-3">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{ width: "56px", height: "56px", backgroundColor: "rgba(255,86,64,0.1)" }}
                  >
                    <i className="bi bi-heart-pulse-fill fs-4" style={{ color: "#FF5640" }}></i>
                  </div>
                  <h5 className="fw-bold mb-1" style={{ color: "#192B37" }}>Quick Quote</h5>
                  <p className="text-muted small mb-0">Get an estimate in 30 seconds</p>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-muted">Coverage Type</label>
                  <select className="form-select" disabled>
                    <option>Individual</option>
                    <option>Family Pool</option>
                    <option>Senior Citizen</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-muted">Sum Insured</label>
                  <select className="form-select" disabled>
                    <option>₹5,00,000</option>
                    <option>₹10,00,000</option>
                    <option>₹25,00,000</option>
                  </select>
                </div>
                <Link
                  to={ROUTES.REGISTER}
                  className="btn w-100 py-2 fw-semibold"
                  style={{ backgroundColor: "#FF5640", color: "#fff" }}
                >
                  Get My Quote <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <p className="text-center text-muted mt-2 mb-0" style={{ fontSize: "0.75rem" }}>
                  Plans starting from ₹399/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4" style={{ backgroundColor: "#fff", borderBottom: "1px solid #E8EAEB" }}>
        <div className="container">
          <div className="row text-center">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "₹50Cr+", label: "Claims Settled" },
              { value: "98%", label: "Claim Approval" },
              { value: "24/7", label: "Support Available" },
            ].map((s, i) => (
              <div key={i} className="col-6 col-md-3 py-2">
                <h3 className="fw-bold mb-0" style={{ color: "#192B37" }}>{s.value}</h3>
                <small className="text-muted">{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5" style={{ backgroundColor: "#F7F8F9" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2" style={{ backgroundColor: "rgba(255,86,64,0.1)", color: "#FF5640" }}>
              Why EndaSure
            </span>
            <h2 className="display-6 fw-bold" style={{ color: "#192B37" }}>
              Everything You Need in One Place
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "560px" }}>
              From browsing plans to filing claims, EndaSure handles the complete insurance lifecycle.
            </p>
          </div>
          <div className="row g-4">
            {[
              { icon: "bi-search-heart", title: "Browse Plans", desc: "Compare health insurance products with transparent pricing and coverage details.", color: "#5899C4" },
              { icon: "bi-shield-check", title: "Policy Management", desc: "View, renew, or cancel policies with a single click. Download health cards instantly.", color: "#2D9C5B" },
              { icon: "bi-file-earmark-medical", title: "Easy Claims", desc: "Submit claims online with medical disclosure forms and track status in real-time.", color: "#FF5640" },
              { icon: "bi-people-fill", title: "Family Coverage", desc: "Pool coverage for your entire family with flexible sum-insured allocation per member.", color: "#8684BF" },
              { icon: "bi-credit-card-2-front", title: "Secure Payments", desc: "Pay premiums securely via Razorpay with automatic verification and receipts.", color: "#CF820E" },
              { icon: "bi-bell-fill", title: "Smart Notifications", desc: "Real-time alerts for policy renewals, claim updates, and important reminders.", color: "#30A661" },
            ].map((f, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div
                  className="card border-0 h-100 p-4 shadow-sm"
                  style={{ borderRadius: "12px", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(25,43,55,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"; }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: "48px", height: "48px", backgroundColor: `${f.color}15` }}
                  >
                    <i className={`bi ${f.icon} fs-4`} style={{ color: f.color }}></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#192B37" }}>{f.title}</h5>
                  <p className="text-muted mb-0 small">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2" style={{ backgroundColor: "rgba(255,86,64,0.1)", color: "#FF5640" }}>
              Coverage Options
            </span>
            <h2 className="display-6 fw-bold" style={{ color: "#192B37" }}>Choose Your Plan</h2>
            <p className="text-muted">Flexible plans designed for every stage of life.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { name: "Individual", price: "399", si: "5 Lakh", features: ["Single person coverage", "Cashless hospitalization", "Pre & post care", "Annual health check-up"], popular: false },
              { name: "Family Pool", price: "899", si: "15 Lakh", features: ["Cover entire family", "Shared sum insured", "Maternity benefits", "No-claim bonus"], popular: true },
              { name: "Senior Citizen", price: "1,299", si: "10 Lakh", features: ["Ages 60–80 covered", "Pre-existing from day 1", "Domiciliary treatment", "Ambulance cover"], popular: false },
            ].map((p, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div
                  className={`card border-0 h-100 shadow-sm position-relative overflow-hidden`}
                  style={{
                    borderRadius: "16px",
                    border: p.popular ? "2px solid #FF5640" : "1px solid #E8EAEB",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {p.popular && (
                    <div
                      className="position-absolute top-0 end-0 px-3 py-1 small fw-semibold"
                      style={{ backgroundColor: "#FF5640", color: "#fff", borderRadius: "0 14px 0 12px" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-1" style={{ color: "#192B37" }}>{p.name}</h5>
                    <p className="text-muted small mb-3">Up to ₹{p.si} coverage</p>
                    <div className="mb-4">
                      <span className="display-6 fw-bold" style={{ color: "#192B37" }}>₹{p.price}</span>
                      <span className="text-muted">/month</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {p.features.map((f, j) => (
                        <li key={j} className="d-flex align-items-center gap-2 mb-2">
                          <i className="bi bi-check-circle-fill small" style={{ color: "#2D9C5B" }}></i>
                          <span className="small" style={{ color: "#47555F" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={ROUTES.REGISTER}
                      className="btn w-100 py-2 fw-semibold"
                      style={
                        p.popular
                          ? { backgroundColor: "#FF5640", color: "#fff" }
                          : { backgroundColor: "#192B37", color: "#fff" }
                      }
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-5" style={{ backgroundColor: "#F7F8F9" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2" style={{ backgroundColor: "rgba(255,86,64,0.1)", color: "#FF5640" }}>
              Simple Process
            </span>
            <h2 className="display-6 fw-bold" style={{ color: "#192B37" }}>How It Works</h2>
          </div>
          <div className="row g-4">
            {[
              { step: "01", icon: "bi-person-plus", title: "Create Account", desc: "Sign up in seconds with just your email and basic details." },
              { step: "02", icon: "bi-search", title: "Compare Plans", desc: "Browse products, compare coverage options and find the right fit." },
              { step: "03", icon: "bi-clipboard2-pulse", title: "Medical Disclosure", desc: "Fill a quick health questionnaire for underwriting review." },
              { step: "04", icon: "bi-shield-fill-check", title: "Get Covered", desc: "Pay securely, get your policy issued and health card instantly." },
            ].map((s, i) => (
              <div key={i} className="col-md-6 col-lg-3 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: "64px", height: "64px", backgroundColor: "#192B37" }}
                >
                  <i className={`bi ${s.icon} fs-4 text-white`}></i>
                </div>
                <div className="badge rounded-pill px-2 mb-2 d-block mx-auto" style={{ backgroundColor: "#FF5640", color: "#fff", width: "fit-content" }}>
                  Step {s.step}
                </div>
                <h5 className="fw-bold" style={{ color: "#192B37" }}>{s.title}</h5>
                <p className="text-muted small">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2" style={{ backgroundColor: "rgba(255,86,64,0.1)", color: "#FF5640" }}>
              Testimonials
            </span>
            <h2 className="display-6 fw-bold" style={{ color: "#192B37" }}>What Our Customers Say</h2>
          </div>
          <div className="row g-4">
            {[
              { name: "Priya Sharma", role: "Family Plan Member", text: "EndaSure made it so easy to manage our family's health coverage. The claims process was seamless — approved within 24 hours!" },
              { name: "Rajesh Kumar", role: "Individual Plan", text: "I love the transparency. No hidden charges, clear pricing, and the dashboard gives me full visibility into my policy and benefits." },
              { name: "Anita Desai", role: "Senior Citizen Plan", text: "Finding health insurance at 65 was daunting, but EndaSure's senior citizen plan covered pre-existing conditions from day one." },
            ].map((t, i) => (
              <div key={i} className="col-md-4">
                <div className="card border-0 h-100 p-4 shadow-sm" style={{ borderRadius: "12px" }}>
                  <div className="d-flex mb-2">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="bi bi-star-fill me-1" style={{ color: "#EB9410", fontSize: "0.85rem" }}></i>
                    ))}
                  </div>
                  <p className="text-muted small flex-grow-1">"{t.text}"</p>
                  <div className="d-flex align-items-center gap-3 mt-3 pt-3 border-top">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                      style={{ width: "40px", height: "40px", backgroundColor: "#192B37", color: "#fff", fontSize: "0.85rem" }}
                    >
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold small" style={{ color: "#192B37" }}>{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5"
        style={{ background: "linear-gradient(135deg, #192B37, #30404B)" }}
      >
        <div className="container py-4 text-center text-white">
          <h2 className="display-6 fw-bold mb-3">Ready to Secure Your Health?</h2>
          <p className="lead opacity-75 mb-4 mx-auto" style={{ maxWidth: "500px" }}>
            Join thousands of families who trust EndaSure for comprehensive health coverage.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link
              to={ROUTES.REGISTER}
              className="btn btn-lg px-5 fw-semibold shadow"
              style={{ backgroundColor: "#FF5640", color: "#fff", border: "none" }}
            >
              Create Free Account
            </Link>
            <Link to={ROUTES.LOGIN} className="btn btn-lg btn-outline-light px-4">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#192B37", color: "rgba(255,255,255,0.7)" }}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="text-white fw-bold mb-3">
                <i className="bi bi-shield-check me-2"></i>EndaSure
              </h5>
              <p className="small mb-3" style={{ maxWidth: "300px" }}>
                Enterprise Health Insurance Management Platform by Endava Health Solutions.
              </p>
              <div className="d-flex gap-3">
                {["bi-twitter-x", "bi-linkedin", "bi-facebook", "bi-instagram"].map((ic, i) => (
                  <a key={i} href="#" className="text-white opacity-50" style={{ fontSize: "1.1rem" }}>
                    <i className={`bi ${ic}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <h6 className="text-white fw-semibold mb-3">Product</h6>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#features" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.6)" }}>Features</a></li>
                <li className="mb-2"><a href="#plans" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.6)" }}>Plans</a></li>
                <li className="mb-2"><a href="#how-it-works" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.6)" }}>How It Works</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h6 className="text-white fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled small">
                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.6)" }}>About Us</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.6)" }}>Careers</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.6)" }}>Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-white fw-semibold mb-3">Stay Updated</h6>
              <p className="small" style={{ color: "rgba(255,255,255,0.6)" }}>Get the latest plans and health tips.</p>
              <div className="input-group">
                <input type="email" className="form-control form-control-sm border-0" placeholder="Enter your email" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff" }} />
                <button className="btn btn-sm px-3" style={{ backgroundColor: "#FF5640", color: "#fff" }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <small style={{ color: "rgba(255,255,255,0.4)" }}>© 2026 EndaSure. All rights reserved.</small>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none small" style={{ color: "rgba(255,255,255,0.4)" }}>Privacy Policy</a>
              <a href="#" className="text-decoration-none small" style={{ color: "rgba(255,255,255,0.4)" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
