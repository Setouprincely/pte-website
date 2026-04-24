import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, W as WhatsAppButton } from "./SiteLayout-RAykrG_X.mjs";
import { S as ShieldCheck, b as CircleCheck, A as ArrowRight, i as Mic, j as Headphones, B as BookOpen, P as PenTool, F as FileText, T as Target, U as Users, Z as Zap, f as ArrowUpRight, C as ChevronRight, k as Trophy, l as ChartColumn, G as GraduationCap, E as Earth, m as Star, Q as Quote, d as Clock, g as Award } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/hero-student-kN9VSV3A.jpg";
const successImg = "/assets/success-DV9GauOt.jpg";
const stats = [{
  value: "500+",
  label: "Students Trained",
  sub: "Across 30+ countries"
}, {
  value: "90%",
  label: "Success Rate",
  sub: "First-attempt passes"
}, {
  value: "75+",
  label: "Average Score",
  sub: "Guaranteed improvement"
}, {
  value: "4.9★",
  label: "Student Rating",
  sub: "Verified reviews"
}];
const services = [{
  icon: FileText,
  tag: "Core",
  title: "Obtain Verfied Score Card",
  desc: "Get a valid and fully verified PTE score with our trusted support services. We guide you through the entire process, ensuring accuracy, authenticity, and fast results. Whether you need a desired score with or without the exams, we make the journey smooth and reliable so you can confidently achieve your study or migration goals.",
  number: "01"
}, {
  icon: Target,
  tag: "Assessment",
  title: "Modify Old Scores",
  desc: "Full-length simulations with AI-graded results replicating the exact exam interface and scoring algorithm.",
  number: "02"
}, {
  icon: Users,
  tag: "Premium",
  title: "Leak Questions",
  desc: "Personalized sessions with certified PTE experts who have scored 90+ themselves.",
  number: "03"
}, {
  icon: Zap,
  tag: "Intensive",
  title: "Book Exam",
  desc: "Structured 2-week sprint programmes for students with urgent visa or university deadlines.",
  number: "04"
}];
const skills = [{
  icon: Mic,
  label: "Speaking",
  color: "#C9A84C"
}, {
  icon: Headphones,
  label: "Listening",
  color: "#C9A84C"
}, {
  icon: BookOpen,
  label: "Reading",
  color: "#C9A84C"
}, {
  icon: PenTool,
  label: "Writing",
  color: "#C9A84C"
}];
const reasons = [{
  text: "Real exam-focused preparation",
  icon: ShieldCheck
}, {
  text: "Updated past questions weekly",
  icon: ChartColumn
}, {
  text: "Personalized study plans",
  icon: GraduationCap
}, {
  text: "Proven fast score improvement",
  icon: Trophy
}, {
  text: "Affordable, transparent pricing",
  icon: CircleCheck
}, {
  text: "WhatsApp support 7 days a week",
  icon: Earth
}];
const steps = [{
  n: "01",
  title: "Contact Us on WhatsApp",
  desc: "Send a message — our academic consultants reply within minutes with a free score assessment."
}, {
  n: "02",
  title: "Receive Your Study Plan",
  desc: "Get a bespoke roadmap calibrated to your current score, target, and deadline."
}, {
  n: "03",
  title: "Train & Succeed",
  desc: "Practice under real exam conditions, track your progress, and walk in with total confidence."
}];
const testimonials = [{
  name: "Priya S.",
  flag: "🇮🇳",
  country: "India",
  score: "58 → 82",
  weeks: "4 weeks",
  text: "The mock tests felt exactly like the real exam. My speaking score jumped 20 points. I'd tried two other courses before — nothing came close."
}, {
  name: "Daniel O.",
  flag: "🇳🇬",
  country: "Nigeria",
  score: "61 → 79+",
  weeks: "3 weeks",
  text: "Personalized coaching made all the difference. My coach identified exactly which question types were hurting my score. Worth every cent."
}, {
  name: "Mei L.",
  flag: "🇨🇳",
  country: "China",
  score: "52 → 79",
  weeks: "3 weeks",
  text: "I was stuck for months. Their writing templates and speaking flow techniques unlocked my score instantly. I cannot recommend them highly enough."
}];
const accreditations = ["Official PTE Academic Preparation Partner", "Pearson Certified Educators", "ISO 9001 Quality Assured", "5-Year Track Record"];
const countryFlags = ["🇦🇺", "🇨🇦", "🇬🇧", "🇺🇸", "🇮🇳", "🇳🇿", "🇸🇬", "🇦🇪"];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #0a0f1e;
          --navy-mid: #111827;
          --navy-light: #1a2540;
          --gold: #C9A84C;
          --gold-light: #E2C97E;
          --gold-pale: rgba(201,168,76,0.12);
          --cream: #F7F3EC;
          --cream-dark: #EDE8DF;
          --white: #ffffff;
          --muted: rgba(255,255,255,0.55);
          --rule: rgba(255,255,255,0.08);
          --font-serif: 'Cormorant Garamond', Georgia, serif;
          --font-sans: 'DM Sans', sans-serif;
        }

        .es-page * { box-sizing: border-box; }
        .es-page { font-family: var(--font-sans); }

        /* ── Announcement ── */
        .es-announce {
          background: var(--gold);
          color: var(--navy);
          text-align: center;
          padding: 10px 24px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .es-announce-pill {
          background: var(--navy);
          color: var(--gold);
          border-radius: 2px;
          padding: 4px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .es-announce-pill:hover { opacity: 0.85; }

        /* ── Hero ── */
        .es-hero {
          position: relative;
          background: var(--navy);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .es-hero-bg {
          position: absolute;
          inset: 0;
        }
        .es-hero-bg img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: grayscale(20%);
        }
        .es-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.82) 50%, rgba(10,15,30,0.45) 100%);
        }
        .es-hero-grid-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image:
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .es-hero-rule {
          position: absolute;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.2) 70%, transparent);
          right: 38%;
        }

        .es-hero-inner {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          padding: 120px 48px 80px;
          gap: 64px;
        }

        .es-hero-left { flex: 1; max-width: 680px; }

        .es-credential-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(201,168,76,0.35);
          background: rgba(201,168,76,0.08);
          padding: 7px 16px;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 36px;
          backdrop-filter: blur(4px);
        }
        .es-credential-badge svg { width: 12px; height: 12px; }

        .es-hero-headline {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 5.5vw, 5rem);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.01em;
          color: var(--white);
          margin: 0 0 28px;
        }
        .es-hero-headline em {
          font-style: italic;
          color: var(--gold);
          position: relative;
        }
        .es-hero-headline em::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), transparent);
          border-radius: 2px;
        }

        .es-hero-sub {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255,255,255,0.65);
          font-weight: 300;
          max-width: 520px;
          margin: 0 0 40px;
        }

        .es-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 44px;
        }
        .es-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
        }
        .es-trust-item svg { width: 14px; height: 14px; color: var(--gold); flex-shrink: 0; }

        .es-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        }
        .es-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--gold);
          color: var(--navy);
          padding: 15px 32px;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s;
          border: none;
          text-decoration: none;
        }
        .es-btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }

        .es-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 500;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 3px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .es-btn-ghost:hover { color: var(--gold); border-color: var(--gold); }
        .es-btn-ghost svg { width: 14px; height: 14px; }

        /* Right: Stat panel */
        .es-hero-panel {
          width: 360px;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border-radius: 2px;
        }
        @media (max-width: 1024px) { .es-hero-panel { display: none; } }

        .es-stat-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .es-stat-number {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--gold);
          width: 80px;
          flex-shrink: 0;
          line-height: 1;
        }
        .es-stat-label { font-size: 13px; font-weight: 600; color: var(--white); }
        .es-stat-sub { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 3px; }

        .es-panel-cta {
          padding: 20px 24px;
          background: rgba(201,168,76,0.1);
        }

        /* Credential bar */
        .es-credential-bar {
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(255,255,255,0.07);
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(8px);
        }
        .es-credential-bar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 14px 48px;
          display: flex;
          align-items: center;
          gap: 40px;
          overflow-x: auto;
        }
        .es-cred-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .es-cred-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* ── Mobile stats ── */
        .es-mobile-stats {
          background: var(--navy);
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media (min-width: 1025px) { .es-mobile-stats { display: none; } }
        .es-mobile-stat {
          padding: 28px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .es-mobile-stat:nth-child(2n) { border-right: none; }

        /* ── Section anatomy ── */
        .es-section { padding: 100px 0; }
        .es-section-inner { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .es-section-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .es-section-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--gold);
          opacity: 0.6;
        }
        .es-section-heading {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 4vw, 3.5rem);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: var(--navy);
          margin: 0;
        }
        .es-section-heading.light { color: var(--white); }

        /* ── Skills strip ── */
        .es-skills-strip {
          background: var(--gold);
          padding: 18px 0;
          overflow: hidden;
        }
        .es-skills-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;
        }
        .es-skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--navy);
          padding: 0 32px;
          border-right: 1px solid rgba(10,15,30,0.15);
          flex: 1;
          justify-content: center;
        }
        .es-skill-item:last-child { border-right: none; }
        .es-skill-item svg { width: 16px; height: 16px; }

        /* ── Programmes ── */
        .es-programmes { background: var(--white); }
        .es-programmes-header {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 64px;
        }
        @media (max-width: 768px) { .es-programmes-header { grid-template-columns: 1fr; } }

        .es-programmes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #E5E2DC;
        }
        @media (max-width: 900px) { .es-programmes-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 540px) { .es-programmes-grid { grid-template-columns: 1fr; } }

        .es-programme-card {
          padding: 40px 36px;
          border-right: 1px solid #E5E2DC;
          position: relative;
          overflow: hidden;
          transition: background 0.4s;
          cursor: pointer;
        }
        .es-programme-card:last-child { border-right: none; }
        .es-programme-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
        }
        .es-programme-card:hover { background: var(--navy); }
        .es-programme-card:hover::after { transform: scaleX(1); }

        .es-prog-num {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 600;
          color: rgba(10,15,30,0.08);
          line-height: 1;
          margin-bottom: 24px;
          transition: color 0.4s;
        }
        .es-programme-card:hover .es-prog-num { color: rgba(201,168,76,0.2); }

        .es-prog-tag {
          display: inline-block;
          border: 1px solid #DDD9D0;
          border-radius: 2px;
          padding: 3px 10px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 20px;
          transition: all 0.3s;
        }
        .es-programme-card:hover .es-prog-tag { border-color: rgba(201,168,76,0.3); color: var(--gold); }

        .es-prog-icon { margin-bottom: 20px; transition: color 0.3s; color: var(--navy); }
        .es-programme-card:hover .es-prog-icon { color: var(--gold); }
        .es-prog-icon svg { width: 28px; height: 28px; }

        .es-prog-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--navy);
          margin: 0 0 12px;
          transition: color 0.3s;
        }
        .es-programme-card:hover .es-prog-title { color: var(--white); }

        .es-prog-desc {
          font-size: 13.5px;
          line-height: 1.65;
          color: #7A7570;
          margin: 0 0 32px;
          transition: color 0.3s;
        }
        .es-programme-card:hover .es-prog-desc { color: rgba(255,255,255,0.55); }

        .es-prog-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--navy);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .es-programme-card:hover .es-prog-link { color: var(--gold); }
        .es-prog-link svg { width: 13px; height: 13px; }

        /* ── Why Us ── */
        .es-why { background: var(--cream); }
        .es-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 768px) { .es-why-grid { grid-template-columns: 1fr; gap: 48px; } }

        .es-why-image-wrap {
          position: relative;
        }
        .es-why-image-wrap img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 2px;
          display: block;
          filter: grayscale(15%);
        }
        .es-why-badge-1 {
          position: absolute;
          bottom: -28px;
          right: -28px;
          background: var(--navy);
          padding: 24px 28px;
          border-radius: 2px;
          box-shadow: 0 20px 60px rgba(10,15,30,0.3);
        }
        @media (max-width: 640px) { .es-why-badge-1 { display: none; } }
        .es-why-badge-2 {
          position: absolute;
          top: -20px;
          left: -20px;
          background: var(--white);
          border: 1px solid #E5E2DC;
          padding: 16px 20px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 40px rgba(10,15,30,0.1);
        }
        @media (max-width: 640px) { .es-why-badge-2 { display: none; } }
        .es-why-badge-icon {
          width: 40px; height: 40px;
          background: rgba(201,168,76,0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .es-why-badge-icon svg { width: 18px; height: 18px; color: var(--gold); }

        .es-reasons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 40px;
        }
        .es-reason-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--white);
          border: 1px solid #E5E2DC;
          border-radius: 2px;
          padding: 16px;
          transition: border-color 0.2s;
        }
        .es-reason-item:hover { border-color: var(--gold); }
        .es-reason-item svg { width: 15px; height: 15px; color: var(--gold); flex-shrink: 0; margin-top: 2px; }
        .es-reason-text { font-size: 13px; font-weight: 500; color: var(--navy); }

        /* ── Countries strip ── */
        .es-countries-strip {
          background: var(--navy-light);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0;
        }
        .es-countries-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .es-countries-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .es-countries-flags {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 22px;
          flex-wrap: wrap;
        }
        .es-countries-more {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
          font-weight: 500;
          margin-left: 4px;
        }

        /* ── Process ── */
        .es-process { background: var(--navy); position: relative; overflow: hidden; }
        .es-process::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .es-process-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 768px) { .es-process-grid { grid-template-columns: 1fr; gap: 48px; } }

        .es-steps {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          overflow: hidden;
        }
        .es-step {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          padding: 36px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.3s;
          cursor: default;
        }
        .es-step:last-child { border-bottom: none; }
        .es-step:hover { background: rgba(255,255,255,0.04); }

        .es-step-num {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 600;
          color: rgba(201,168,76,0.2);
          line-height: 1;
          flex-shrink: 0;
          width: 48px;
          transition: color 0.3s;
        }
        .es-step:hover .es-step-num { color: rgba(201,168,76,0.6); }

        .es-step-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--white);
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .es-step-desc { font-size: 13.5px; color: rgba(255,255,255,0.5); line-height: 1.65; margin: 0; }

        .es-step-arrow { margin-left: auto; flex-shrink: 0; margin-top: 4px; }
        .es-step-arrow svg { width: 18px; height: 18px; color: rgba(255,255,255,0.15); transition: color 0.3s; }
        .es-step:hover .es-step-arrow svg { color: var(--gold); }

        /* ── Testimonials ── */
        .es-testimonials { background: var(--white); }
        .es-testi-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: end;
          margin-bottom: 56px;
        }
        @media (max-width: 640px) { .es-testi-header { grid-template-columns: 1fr; } }

        .es-testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid #E5E2DC;
          border-radius: 2px;
          overflow: hidden;
        }
        @media (max-width: 768px) { .es-testi-grid { grid-template-columns: 1fr; } }

        .es-testi-card {
          padding: 40px 36px;
          border-right: 1px solid #E5E2DC;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background 0.3s;
          position: relative;
        }
        .es-testi-card:last-child { border-right: none; }
        .es-testi-card.featured {
          background: var(--navy);
          border-color: transparent;
        }

        .es-testi-quote-icon { margin-bottom: 24px; }
        .es-testi-quote-icon svg { width: 24px; height: 24px; color: var(--gold); }

        .es-testi-text {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          line-height: 1.65;
          color: #4A4540;
          flex: 1;
          font-style: italic;
        }
        .es-testi-card.featured .es-testi-text { color: rgba(255,255,255,0.7); }

        .es-testi-divider { height: 1px; background: #E5E2DC; margin: 28px 0; }
        .es-testi-card.featured .es-testi-divider { background: rgba(255,255,255,0.1); }

        .es-testi-footer { display: flex; align-items: center; justify-content: space-between; }
        .es-testi-name { font-size: 14px; font-weight: 600; color: var(--navy); }
        .es-testi-card.featured .es-testi-name { color: var(--white); }
        .es-testi-from { font-size: 11px; color: #999; margin-top: 3px; }
        .es-testi-card.featured .es-testi-from { color: rgba(255,255,255,0.4); }

        .es-score-badge {
          background: rgba(201,168,76,0.1);
          border-radius: 2px;
          padding: 10px 14px;
          text-align: right;
        }
        .es-score-badge.featured-badge { background: rgba(201,168,76,0.15); }
        .es-score-num {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }
        .es-score-weeks {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #BBB;
          margin-top: 4px;
        }
        .es-testi-card.featured .es-score-weeks { color: rgba(255,255,255,0.35); }

        /* ── Final CTA ── */
        .es-cta { background: var(--navy); position: relative; overflow: hidden; }
        .es-cta-accent-top {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 320px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
        }
        .es-cta-accent-bottom {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 200px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent);
        }
        .es-cta-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 48px;
          text-align: center;
        }
        .es-cta-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.2);
          background: rgba(201,168,76,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 40px;
        }
        .es-cta-icon svg { width: 28px; height: 28px; color: var(--gold); }

        .es-cta-heading {
          font-family: var(--font-serif);
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 600;
          color: var(--white);
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin: 0 0 24px;
        }
        .es-cta-heading em { font-style: italic; color: var(--gold); }

        .es-cta-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          font-weight: 300;
          max-width: 520px;
          margin: 0 auto 48px;
        }

        .es-cta-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .es-cta-proof-item { display: flex; align-items: center; gap: 8px; }
        .es-cta-proof-item svg { width: 14px; height: 14px; color: rgba(201,168,76,0.5); }
        .es-cta-proof-sep { width: 1px; height: 16px; background: rgba(255,255,255,0.1); }

        .es-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .es-cta-fine {
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }

        /* Utility */
        .es-link-underline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--navy);
          border-bottom: 1px solid rgba(10,15,30,0.2);
          padding-bottom: 2px;
          transition: all 0.2s;
          text-decoration: none;
        }
        .es-link-underline:hover { color: var(--gold); border-color: var(--gold); }
        .es-link-underline svg { width: 13px; height: 13px; }

        .es-link-underline.light {
          color: rgba(255,255,255,0.5);
          border-color: rgba(255,255,255,0.2);
        }
        .es-link-underline.light:hover { color: var(--gold); border-color: var(--gold); }

        .es-view-all { margin-top: 48px; text-align: center; }

        /* Stars */
        .es-stars { display: flex; }
        .es-stars svg { width: 16px; height: 16px; fill: var(--gold); color: var(--gold); }

        /* Divider line style */
        .es-divider { height: 1px; background: linear-gradient(90deg, transparent, #E5E2DC, transparent); margin: 0; }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-announce", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New cohort starting Monday — only 8 seats remaining." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "sm", className: "es-announce-pill", children: "Reserve Your Seat" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "es-hero", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-hero-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Student preparing for PTE exam" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-hero-grid-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-hero-rule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-hero-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-hero-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-credential-badge", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, {}),
              "Pearson Certified PTE Preparation"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "es-hero-headline", children: [
              "Get a Registered",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "PTE Academic" }),
              " ",
              "Certificate for Australia"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-hero-sub", children: "Join 500+ graduates from 30 nations who achieved their target score with EliteScore's proven coaching — without sitting the open exam." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-trust-row", children: ["90% first-attempt pass rate", "Avg. +18 point improvement", "Results in 2–4 weeks"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "es-trust-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, {}),
              t
            ] }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-hero-ctas", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", className: "es-btn-primary", children: "Start Free Consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "es-btn-ghost", children: [
                "Explore Programmes ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-hero-panel", children: [
            stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-stat-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stat-number", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stat-label", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stat-sub", children: s.sub })
              ] })
            ] }, s.label)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-panel-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "sm", className: "es-btn-primary", style: {
              width: "100%",
              justifyContent: "center",
              fontSize: "12px"
            }, message: "Hello, I'd like a free PTE score assessment", children: "Get Free Score Assessment →" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-credential-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-credential-bar-inner", children: accreditations.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "es-cred-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-cred-dot" }),
          a
        ] }, a)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-mobile-stats", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-mobile-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stat-number", style: {
          fontSize: "2rem",
          textAlign: "center"
        }, children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stat-label", style: {
          textAlign: "center",
          fontSize: "12px",
          marginTop: "6px"
        }, children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-skills-strip", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-skills-inner", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-skill-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, {}),
        s.label
      ] }, s.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "es-section es-programmes", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-section-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-programmes-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-eyebrow", children: "Our Programmes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "es-section-heading", children: [
              "Precision Training.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                color: "#C9A84C"
              }, children: "Exceptional Results." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#7A7570",
            fontSize: "16px",
            lineHeight: "1.7",
            maxWidth: "480px",
            alignSelf: "flex-end",
            margin: 0
          }, children: "Every programme is engineered around a single mandate: delivering your target score in the shortest possible time, using methods validated across hundreds of successful candidates." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-programmes-grid", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-programme-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-prog-num", children: s.number }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-prog-tag", children: s.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-prog-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "es-prog-title", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-prog-desc", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-prog-link", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {})
          ] })
        ] }, s.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: "32px",
          display: "flex",
          justifyContent: "flex-end"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "es-link-underline", children: [
          "View all programmes & pricing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {})
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "es-section es-why", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-why-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-why-image-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: successImg, alt: "Successful EliteScore PTE students celebrating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-why-badge-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontFamily: "var(--font-serif)",
              fontSize: "2.8rem",
              fontWeight: 700,
              color: "var(--gold)",
              lineHeight: 1
            }, children: "90%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.5)",
              marginTop: "8px"
            }, children: [
              "First-Attempt",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Pass Rate"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-why-badge-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-why-badge-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                fontSize: "11px",
                color: "#999"
              }, children: "Average improvement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                fontFamily: "var(--font-serif)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--navy)"
              }, children: "+18 points" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-eyebrow", children: "Why EliteScore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "es-section-heading", children: [
            "A Premium Path",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "to Your",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: {
              fontStyle: "italic",
              color: "#C9A84C"
            }, children: "Dream Score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "#7A7570",
            lineHeight: "1.75",
            marginTop: "24px",
            fontSize: "15px"
          }, children: "We've guided hundreds of students past the 79-point threshold — the gateway to Australian Permanent Residency, UK visas, and leading university admissions worldwide. Here is what distinguishes our approach." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-reasons-grid", children: reasons.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-reason-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-reason-text", children: r.text })
          ] }, r.text)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", className: "es-btn-primary", children: "Book Free Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: "12px",
              color: "#AAA"
            }, children: "No commitment required" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-countries-strip", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-countries-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-countries-label", children: "Students from" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-countries-flags", children: [
          countryFlags.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f }, f)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-countries-more", children: "+ 22 more countries" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "es-section es-process", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-inner", style: {
        position: "relative",
        zIndex: 1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-process-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-eyebrow", style: {
            color: "var(--gold)"
          }, children: "The Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "es-section-heading light", children: [
            "From First Message",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "to Exam",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: {
              fontStyle: "italic",
              color: "var(--gold)"
            }, children: "Success" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            color: "rgba(255,255,255,0.45)",
            lineHeight: "1.75",
            marginTop: "24px",
            fontSize: "15px"
          }, children: "Most students see measurable score improvement within the first week. Our structured process ensures not a single hour is wasted." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            marginTop: "40px"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", className: "es-btn-primary", message: "Hello, I want to start my PTE journey", children: "Begin Your Journey" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-steps", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-step", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-step-num", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "es-step-title", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-step-desc", children: s.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-step-arrow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {}) })
        ] }, s.n)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "es-section es-testimonials", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-section-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-testi-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-eyebrow", children: "Student Outcomes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "es-section-heading", children: [
              "Real Scores.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: {
                fontStyle: "italic",
                color: "#C9A84C"
              }, children: "Real Lives Changed." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-end"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-stars", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, {}, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: "13px",
              color: "#AAA"
            }, children: "4.9 / 5 from 200+ verified reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-testi-grid", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `es-testi-card ${i === 1 ? "featured" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-testi-quote-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-testi-text", children: t.text })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-testi-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-testi-footer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-testi-name", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-testi-from", children: [
                  t.flag,
                  " ",
                  t.country
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `es-score-badge ${i === 1 ? "featured-badge" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-score-num", children: t.score }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-score-weeks", children: [
                  "in ",
                  t.weeks
                ] })
              ] })
            ] })
          ] })
        ] }, t.name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-view-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/testimonials", className: "es-link-underline", children: [
          "Read all 200+ student stories ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "es-cta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-cta-accent-top" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-cta-accent-bottom" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-cta-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-cta-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "es-section-eyebrow", style: {
            justifyContent: "center",
            marginBottom: "24px"
          }, children: "Limited Enrolment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "es-cta-heading", children: [
            "Your Target Score",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Is ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Within Reach." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-cta-sub", children: "Join 500+ students who transformed their PTE scores and unlocked the opportunities they had always deserved. Your journey begins with one message." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-cta-proof", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "es-cta-proof-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {}),
              "Replies within 5 minutes"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-cta-proof-sep" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "es-cta-proof-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, {}),
              "Free first consultation"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "es-cta-proof-sep" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "es-cta-proof-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, {}),
              "Pearson Certified"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "es-cta-buttons", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", message: "Hello, I want to start PTE preparation", className: "es-btn-primary", style: {
              fontSize: "15px",
              padding: "17px 40px"
            }, children: "Start on WhatsApp Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "es-btn-ghost es-link-underline light", children: [
              "View pricing first ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "es-cta-fine", children: "No credit card required · Free diagnostic assessment · Cancel anytime" })
        ] })
      ] })
    ] })
  ] });
}
export {
  HomePage as component
};
