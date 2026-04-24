import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, W as WhatsAppButton } from "./SiteLayout-RAykrG_X.mjs";
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
import "../_libs/lucide-react.mjs";
const faqs = [{
  q: "How long does it take to prepare for PTE?",
  a: "Most students reach their target score in 2 to 6 weeks of focused preparation. We'll set a realistic timeline based on your current level and target band.",
  category: "Preparation"
}, {
  q: "Do you offer online coaching?",
  a: "Yes — all our coaching, classes and mock tests are delivered online so you can study from anywhere in the world.",
  category: "Delivery"
}, {
  q: "What scores can I expect to achieve?",
  a: "Our students average 75+ overall, with 90% achieving their target score (most aiming for 65, 79 or 90). We'll set a personalized target during your first consultation.",
  category: "Results"
}, {
  q: "How much do your services cost?",
  a: "Pricing depends on the program (express, standard or score guarantee). Send us a WhatsApp message for a personalized quote — we'll match a plan to your goal and budget.",
  category: "Pricing"
}, {
  q: "Are your past questions real?",
  a: "Yes. We continuously update our question bank based on the latest exam patterns reported by our students who've recently sat the test.",
  category: "Materials"
}, {
  q: "What if I don't reach my target score?",
  a: "Our score guarantee programs include extra coaching sessions until you hit your goal. Talk to us about which program qualifies.",
  category: "Guarantee"
}, {
  q: "Can I switch between group and 1-on-1 coaching?",
  a: "Absolutely. Many students start in a group class and add 1-on-1 sessions to focus on their weakest section.",
  category: "Flexibility"
}, {
  q: "Do you provide a study schedule?",
  a: "Every student receives a personalized week-by-week study plan tailored to their target score and exam date.",
  category: "Planning"
}];
function FaqPage() {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');

        :root {
          --navy: #0a0f1e;
          --navy-mid: #111827;
          --navy-light: #1a2540;
          --gold: #c9a84c;
          --gold-light: #e2c97e;
          --gold-dim: rgba(201,168,76,0.15);
          --white: #f5f3ef;
          --white-dim: rgba(245,243,239,0.55);
          --white-faint: rgba(245,243,239,0.08);
          --rule: rgba(201,168,76,0.3);
        }

        .faq-root {
          background: var(--navy);
          color: var(--white);
          font-family: 'Instrument Sans', sans-serif;
          min-height: 100vh;
        }

        /* ── HERO ── */
        .faq-hero {
          position: relative;
          overflow: hidden;
          padding: 120px 40px 100px;
          border-bottom: 1px solid var(--rule);
        }

        .faq-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              rgba(201,168,76,0.06) 79px,
              rgba(201,168,76,0.06) 80px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 79px,
              rgba(201,168,76,0.04) 79px,
              rgba(201,168,76,0.04) 80px
            );
          pointer-events: none;
        }

        .faq-hero::after {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .faq-hero-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }

        .faq-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .faq-eyebrow-line {
          width: 40px;
          height: 1px;
          background: var(--gold);
        }

        .faq-eyebrow-text {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .faq-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 600;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: var(--white);
          max-width: 800px;
          margin: 0 0 28px;
        }

        .faq-hero h1 em {
          font-style: italic;
          color: var(--gold-light);
        }

        .faq-hero-meta {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid var(--rule);
        }

        .faq-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .faq-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }

        .faq-stat-label {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--white-dim);
        }

        .faq-stat-divider {
          width: 1px;
          height: 40px;
          background: var(--rule);
        }

        /* ── BODY ── */
        .faq-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 40px 120px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Sidebar */
        .faq-sidebar {
          position: sticky;
          top: 40px;
        }

        .faq-sidebar-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .faq-sidebar-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .faq-sidebar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(201,168,76,0.1);
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-sidebar-item:hover .faq-sidebar-label {
          color: var(--gold-light);
        }

        .faq-sidebar-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--gold);
          opacity: 0.5;
          min-width: 20px;
        }

        .faq-sidebar-label {
          font-size: 13px;
          color: var(--white-dim);
          transition: color 0.2s;
        }

        /* Accordion */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .faq-item {
          border-top: 1px solid var(--rule);
          position: relative;
        }

        .faq-item:last-child {
          border-bottom: 1px solid var(--rule);
        }

        .faq-trigger {
          width: 100%;
          display: grid;
          grid-template-columns: 48px 1fr 32px;
          align-items: start;
          gap: 20px;
          padding: 28px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          position: relative;
          transition: background 0.2s;
        }

        .faq-trigger:hover {
          background: none;
        }

        .faq-trigger:hover .faq-q-text {
          color: var(--gold-light);
        }

        .faq-q-num {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--gold);
          opacity: 0.6;
          padding-top: 6px;
          letter-spacing: 0.05em;
        }

        .faq-q-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--white);
          transition: color 0.25s;
        }

        .faq-q-cat {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          background: var(--gold-dim);
          border: 1px solid rgba(201,168,76,0.2);
          padding: 3px 8px;
          border-radius: 2px;
          margin-top: 6px;
        }

        .faq-chevron {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--rule);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.2s, border-color 0.2s;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .faq-chevron.open {
          transform: rotate(45deg);
          background: var(--gold);
          border-color: var(--gold);
          color: var(--navy);
        }

        .faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .faq-answer-wrap.open {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 0 32px 68px;
          font-size: 16px;
          line-height: 1.75;
          color: var(--white-dim);
          font-family: 'Instrument Sans', sans-serif;
        }

        .faq-answer::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
          margin-bottom: 16px;
          opacity: 0.5;
        }

        /* ── FOOTER CTA ── */
        .faq-cta {
          background: var(--navy-light);
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        .faq-cta::before {
          content: '"';
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: 400px;
          font-weight: 700;
          color: rgba(201,168,76,0.04);
          line-height: 1;
          top: -60px;
          left: 20px;
          pointer-events: none;
          user-select: none;
        }

        .faq-cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 60px;
          position: relative;
        }

        .faq-cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 600;
          line-height: 1.15;
          color: var(--white);
          margin: 0 0 12px;
        }

        .faq-cta h2 em {
          font-style: italic;
          color: var(--gold-light);
        }

        .faq-cta p {
          font-size: 15px;
          color: var(--white-dim);
          margin: 0;
          line-height: 1.6;
        }

        .faq-cta-btn-wrap {
          flex-shrink: 0;
        }

        .faq-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--gold);
          color: var(--navy);
          font-family: 'Instrument Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 16px 28px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }

        .faq-wa-btn:hover {
          background: var(--gold-light);
          transform: translateY(-1px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .faq-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .faq-sidebar {
            position: static;
            display: none;
          }
          .faq-cta-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .faq-cta-btn-wrap {
            display: flex;
            justify-content: center;
          }
          .faq-hero-meta {
            flex-wrap: wrap;
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .faq-hero { padding: 80px 24px 60px; }
          .faq-body { padding: 40px 24px 80px; }
          .faq-cta { padding: 60px 24px; }
          .faq-trigger {
            grid-template-columns: 36px 1fr 28px;
            gap: 12px;
          }
          .faq-answer { padding-left: 48px; }
          .faq-q-text { font-size: 18px; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-root", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "faq-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-hero-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-eyebrow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-eyebrow-line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-eyebrow-text", children: "Knowledge Base — EliteScore PTE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
          "Frequently",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Asked ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: "17px",
          color: "var(--white-dim)",
          maxWidth: "520px",
          lineHeight: "1.7",
          margin: 0
        }, children: "Everything prospective and enrolled students ask before beginning their PTE Academic journey with us." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-hero-meta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-num", children: "90%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-label", children: "Target Score Rate" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-stat-divider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-num", children: "75+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-label", children: "Avg. Overall Band" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-stat-divider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-num", children: "2–6w" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-label", children: "Typical Prep Time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-stat-divider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-num", children: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-stat-label", children: "Questions Answered" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "faq-sidebar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "faq-sidebar-title", children: "Question Index" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "faq-sidebar-list", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "faq-sidebar-item", onClick: () => setOpenIndex(i), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "faq-sidebar-num", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-sidebar-label", children: f.category })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-list", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "faq-trigger", onClick: () => toggle(i), "aria-expanded": openIndex === i, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "faq-q-num", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-q-text", children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-q-cat", children: f.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `faq-chevron ${openIndex === i ? "open" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 1v10M1 6h10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `faq-answer-wrap ${openIndex === i ? "open" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-answer-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-answer", children: f.a }) }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "faq-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-cta-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
            "Still have a",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "specific question?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Speak directly with an EliteScore coach. We respond within minutes during business hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-cta-btn-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", message: "Hi, I have a few questions about your PTE programs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "faq-wa-btn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
          "Enquire on WhatsApp"
        ] }) }) })
      ] }) })
    ] })
  ] });
}
export {
  FaqPage as component
};
