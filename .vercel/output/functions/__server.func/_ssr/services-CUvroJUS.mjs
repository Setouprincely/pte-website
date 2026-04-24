import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, W as WhatsAppButton } from "./SiteLayout-RAykrG_X.mjs";
import { C as ChevronRight, F as FileText, T as Target, A as ArrowRight, B as BookOpen, G as GraduationCap, U as Users, a as TrendingUp, Z as Zap, b as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const featured = [{
  icon: FileText,
  label: "01",
  title: "PTE Past Questions & Practice Materials",
  desc: "Access the most current bank of real PTE questions, updated weekly. Practice with the same content that appears in the actual exam and build true exam confidence.",
  tag: "Most Popular",
  highlight: true
}, {
  icon: Target,
  label: "02",
  title: "Mock Tests & Real Exam Simulation",
  desc: "Full-length, scored mock tests that mirror the real PTE interface, timing and difficulty. Arrive at exam day knowing exactly what to expect.",
  tag: "Highly Recommended",
  highlight: true
}];
const services = [{
  icon: BookOpen,
  label: "03",
  title: "Study Guides & Exam Strategies",
  desc: "Proven templates and techniques for every section. Learn how top scorers consistently achieve 79+."
}, {
  icon: GraduationCap,
  label: "04",
  title: "One-on-One Coaching",
  desc: "Personalized sessions with certified PTE experts delivering targeted feedback on all four skills."
}, {
  icon: Users,
  label: "05",
  title: "Group Classes",
  desc: "High-energy live classes with peers working toward the same goal — affordable, structured, effective."
}, {
  icon: TrendingUp,
  label: "06",
  title: "Score Improvement Plans",
  desc: "We analyze your existing scorecard and build a precision plan to boost your lowest-scoring sections."
}, {
  icon: Zap,
  label: "07",
  title: "Express Preparation Programs",
  desc: "Need 79+ in two weeks? Our intensive express track is engineered for ambitious deadlines."
}, {
  icon: CircleCheck,
  label: "08",
  title: "Score Guarantee Pathway",
  desc: "Long-term coaching with a clear roadmap, weekly progress reviews, and accountability to your target score."
}];
const stats = [{
  value: "94%",
  label: "Students Achieve Target Score"
}, {
  value: "12K+",
  label: "Questions in Our Bank"
}, {
  value: "8,000+",
  label: "Students Coached"
}, {
  value: "4.9★",
  label: "Average Rating"
}];
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy: #0a0f1e;
    --navy-mid: #111829;
    --navy-light: #1a2540;
    --gold: #c9a84c;
    --gold-light: #e5c87a;
    --gold-pale: rgba(201,168,76,0.12);
    --gold-line: rgba(201,168,76,0.35);
    --white: #f8f6f1;
    --muted: rgba(248,246,241,0.55);
    --border: rgba(248,246,241,0.08);
  }

  .es-services * { box-sizing: border-box; }
  .es-services { font-family: 'DM Sans', sans-serif; background: var(--navy); color: var(--white); overflow-x: hidden; }

  /* hero */
  .es-hero {
    position: relative;
    min-height: 88vh;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 0 6vw 7rem;
    overflow: hidden;
  }
  .es-hero-bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 70% 30%, rgba(201,168,76,0.07) 0%, transparent 60%),
      radial-gradient(ellipse 50% 80% at 10% 80%, rgba(201,168,76,0.05) 0%, transparent 55%),
      linear-gradient(170deg, #0d1326 0%, #0a0f1e 100%);
  }
  .es-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse 70% 60% at 60% 40%, black 20%, transparent 80%);
  }
  .es-hero-label {
    font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); font-weight: 500;
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 2rem;
  }
  .es-hero-label::before {
    content: ''; display: block; width: 2.5rem; height: 1px; background: var(--gold);
  }
  .es-hero-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.2rem, 7vw, 7rem);
    font-weight: 700; line-height: 0.95;
    letter-spacing: -0.02em;
    margin: 0 0 2rem;
    max-width: 14ch;
  }
  .es-hero-heading em {
    font-style: italic; color: var(--gold-light);
  }
  .es-hero-sub {
    font-size: 1.05rem; color: var(--muted); max-width: 44ch;
    line-height: 1.7; font-weight: 300; margin-bottom: 2.5rem;
  }
  .es-hero-cta {
    display: inline-flex; align-items: center; gap: 0.6rem;
    font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--gold); font-weight: 500;
    border-bottom: 1px solid var(--gold-line); padding-bottom: 0.25rem;
    text-decoration: none; transition: gap 0.2s, color 0.2s;
  }
  .es-hero-cta:hover { gap: 1rem; color: var(--gold-light); }

  /* stats bar */
  .es-stats {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 2.5rem 6vw;
    display: grid; grid-template-columns: repeat(4, 1fr);
    position: relative; z-index: 2;
    background: rgba(10,15,30,0.8);
    backdrop-filter: blur(12px);
  }
  .es-stats-item {
    padding: 0 2rem;
    border-right: 1px solid var(--border);
  }
  .es-stats-item:first-child { padding-left: 0; }
  .es-stats-item:last-child { border-right: none; }
  .es-stats-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; font-weight: 700; color: var(--gold-light);
    line-height: 1;
  }
  .es-stats-label {
    font-size: 0.75rem; color: var(--muted); margin-top: 0.35rem;
    letter-spacing: 0.05em; font-weight: 400;
  }

  /* section */
  .es-section { padding: 7rem 6vw; }
  .es-section-header { margin-bottom: 4rem; }
  .es-section-tag {
    font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); font-weight: 500;
    display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;
  }
  .es-section-tag::before {
    content: ''; display: block; width: 2rem; height: 1px; background: var(--gold);
  }
  .es-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 4vw, 4rem);
    font-weight: 700; line-height: 1.1; letter-spacing: -0.015em;
    margin: 0;
  }
  .es-section-title em { font-style: italic; color: var(--gold-light); }

  /* featured cards */
  .es-featured-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1.5px; margin-bottom: 1.5px;
    background: var(--border);
  }
  .es-featured-card {
    background: var(--navy-mid);
    padding: 3.5rem;
    position: relative; overflow: hidden;
    transition: background 0.3s;
  }
  .es-featured-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .es-featured-card:hover { background: var(--navy-light); }
  .es-featured-card:hover::before { opacity: 1; }

  .es-card-tag {
    display: inline-block;
    font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); border: 1px solid var(--gold-line);
    padding: 0.3rem 0.75rem; border-radius: 2px;
    margin-bottom: 2rem; font-weight: 500;
  }
  .es-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem; font-weight: 400; color: rgba(201,168,76,0.08);
    line-height: 1; position: absolute; top: 1.5rem; right: 2rem;
    pointer-events: none; user-select: none;
  }
  .es-card-icon-wrap {
    width: 3rem; height: 3rem;
    border: 1px solid var(--gold-line);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.5rem;
    transition: background 0.2s, border-color 0.2s;
  }
  .es-featured-card:hover .es-card-icon-wrap {
    background: var(--gold-pale); border-color: var(--gold);
  }
  .es-card-icon { width: 1.25rem; height: 1.25rem; color: var(--gold); }
  .es-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem; font-weight: 700; line-height: 1.2;
    margin: 0 0 1rem;
  }
  .es-card-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.75; font-weight: 300; }
  .es-card-link {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--gold); font-weight: 500; margin-top: 2rem;
    border-bottom: 1px solid var(--gold-line); padding-bottom: 0.2rem;
    text-decoration: none; transition: gap 0.2s;
  }
  .es-card-link:hover { gap: 0.75rem; }

  /* secondary grid */
  .es-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1.5px; background: var(--border);
  }
  .es-grid-card {
    background: var(--navy-mid);
    padding: 2.5rem 2.5rem 3rem;
    position: relative; overflow: hidden;
    transition: background 0.25s;
  }
  .es-grid-card:hover { background: var(--navy-light); }
  .es-grid-card .es-card-num { font-size: 3.5rem; top: 1rem; right: 1.5rem; }

  /* divider */
  .es-divider {
    display: flex; align-items: center; gap: 1.5rem;
    margin: 0 6vw;
  }
  .es-divider-line { flex: 1; height: 1px; background: var(--border); }
  .es-divider-text {
    font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--muted); white-space: nowrap;
  }

  /* CTA */
  .es-cta {
    margin: 6rem 6vw;
    background: var(--navy-light);
    border: 1px solid var(--border);
    padding: 6rem 5vw;
    position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr auto;
    align-items: center; gap: 3rem;
  }
  .es-cta::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 100% 50%, rgba(201,168,76,0.06), transparent 60%);
    pointer-events: none;
  }
  .es-cta-label {
    font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); font-weight: 500;
    display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;
  }
  .es-cta-label::before { content: ''; display: block; width: 2rem; height: 1px; background: var(--gold); }
  .es-cta-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 3.5vw, 3.4rem); font-weight: 700; line-height: 1.1;
    margin: 0 0 1rem;
  }
  .es-cta-sub { font-size: 0.9rem; color: var(--muted); max-width: 48ch; line-height: 1.7; font-weight: 300; }
  .es-cta-right { display: flex; flex-direction: column; align-items: flex-end; gap: 1rem; flex-shrink: 0; }
  .es-cta-note { font-size: 0.72rem; color: var(--muted); text-align: right; max-width: 22ch; line-height: 1.6; }

  /* WA button override */
  .es-wa-btn {
    display: inline-flex; align-items: center; gap: 0.6rem;
    background: var(--gold); color: var(--navy);
    font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase;
    font-weight: 600; padding: 1rem 2rem; border: none; cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    font-family: 'DM Sans', sans-serif;
    text-decoration: none;
  }
  .es-wa-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

  /* animation */
  @keyframes es-fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .es-animate { animation: es-fade-up 0.65s ease both; }
  .es-delay-1 { animation-delay: 0.1s; }
  .es-delay-2 { animation-delay: 0.2s; }
  .es-delay-3 { animation-delay: 0.3s; }
  .es-delay-4 { animation-delay: 0.4s; }

  /* responsive */
  @media (max-width: 900px) {
    .es-featured-grid { grid-template-columns: 1fr; }
    .es-grid { grid-template-columns: 1fr 1fr; }
    .es-stats { grid-template-columns: 1fr 1fr; row-gap: 2rem; }
    .es-stats-item:nth-child(2) { border-right: none; }
    .es-cta { grid-template-columns: 1fr; }
    .es-cta-right { align-items: flex-start; }
    .es-cta-note { text-align: left; }
  }
  @media (max-width: 600px) {
    .es-grid { grid-template-columns: 1fr; }
    .es-stats { grid-template-columns: 1fr 1fr; }
    .es-hero-heading { font-size: 3rem; }
  }
`;
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
      __html: STYLES
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-services", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "es-hero", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-hero-bg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-hero-grid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "relative",
          zIndex: 2
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-hero-label es-animate", children: "EliteScore PTE · Academic Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "es-hero-heading es-animate es-delay-1", children: [
            "The Complete Path to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "79+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-hero-sub es-animate es-delay-2", children: "Eight precision-built programs. Whether you're starting from scratch or targeting a specific band, every service is designed around one outcome — your target score." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#services", className: "es-hero-cta es-animate es-delay-3", children: [
            "Explore Programs ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stats", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-stats-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stats-value", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stats-label", children: s.label })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "es-section", id: "services", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-section-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-section-tag", children: "Flagship Programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "es-section-title", children: [
            "Start Here.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Most Enrolled." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-featured-grid", children: featured.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-featured-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-card-num", children: s.label }),
          s.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-card-tag", children: s.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-card-icon-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "es-card-icon" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "es-card-title", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-card-desc", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "es-card-link", children: [
            "Learn More ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] })
        ] }, s.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-divider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-divider-line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-divider-text", children: "Additional Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-divider-line" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "es-section", style: {
        paddingTop: "4rem"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-grid", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-grid-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-card-num", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-card-icon-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "es-card-icon" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "es-card-title", style: {
          fontSize: "1.3rem"
        }, children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-card-desc", children: s.desc })
      ] }, s.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-cta", id: "contact", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-cta-label", children: "Expert Guidance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "es-cta-heading", children: "Not sure which program is right for you?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-cta-sub", children: "Our advisors assess your current level, target score, and available time — then recommend the exact program that gives you the highest probability of success." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-cta-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", message: "Hi, I'd like a recommendation for the right PTE program for me", className: "es-wa-btn", children: "Get a Free Recommendation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-cta-note", children: "Free consultation · No commitment · Responds within 2 hours" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ServicesPage as component
};
