import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, W as WhatsAppButton } from "./SiteLayout-RAykrG_X.mjs";
import { M as Mail, c as MessageCircle, d as Clock, e as Globe, f as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
function useInView(threshold = 0.15) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, {
      threshold
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return {
    ref,
    inView
  };
}
const stats = [{
  value: "98%",
  label: "Success Rate"
}, {
  value: "12K+",
  label: "Students Coached"
}, {
  value: "79+",
  label: "Avg. Score Achieved"
}, {
  value: "24h",
  label: "Max Response Time"
}];
const channels = [{
  index: "01",
  icon: MessageCircle,
  title: "WhatsApp",
  subtitle: "Instant consultation",
  description: "Connect directly with a senior PTE coach. Receive your personalised study roadmap within the hour.",
  cta: "Open WhatsApp",
  whatsapp: true,
  tag: "Recommended"
}, {
  index: "02",
  icon: Mail,
  title: "Electronic Mail",
  subtitle: "Formal enquiries",
  description: "For detailed program enquiries, institutional partnerships, or group enrollment requests.",
  cta: "hello@elitescorepte.com",
  href: "mailto:hello@elitescorepte.com"
}, {
  index: "03",
  icon: Clock,
  title: "Operating Hours",
  subtitle: "Seven days a week",
  description: "Our coaching team is available Monday through Sunday, 8:00 AM to 10:00 PM across all major time zones."
}, {
  index: "04",
  icon: Globe,
  title: "Global Reach",
  subtitle: "Worldwide delivery",
  description: "All programs are delivered online. We serve students across Australia, UK, Canada, Europe, and Asia-Pacific."
}];
function StatBar() {
  const {
    ref,
    inView
  } = useInView(0.2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "stat-bar", "aria-label": "Key statistics", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", style: {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-value", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: s.label })
  ] }, s.label)) });
}
function ChannelCard({
  channel,
  delay
}) {
  const {
    ref,
    inView
  } = useInView(0.1);
  const Icon = channel.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "channel-card", style: {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-index", children: channel.index }),
    channel.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-tag", children: channel.tag }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-icon-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "card-icon" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-subtitle", children: channel.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: channel.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-desc", children: channel.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-footer", children: [
      channel.whatsapp && /* @__PURE__ */ jsxRuntimeExports.jsxs(WhatsAppButton, { size: "sm", message: "Hello, I want to start PTE preparation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: channel.cta }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "btn-arrow" })
      ] }),
      channel.href && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: channel.href, className: "card-link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: channel.cta }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "btn-arrow" })
      ] })
    ] })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        :root {
          --navy: #0a0f1e;
          --navy-mid: #111827;
          --navy-light: #1a2540;
          --gold: #c9a84c;
          --gold-bright: #e8c46a;
          --gold-dim: rgba(201,168,76,0.18);
          --gold-line: rgba(201,168,76,0.35);
          --white: #f5f4f0;
          --muted: rgba(245,244,240,0.5);
          --border: rgba(245,244,240,0.08);
          --font-display: 'Playfair Display', 'Georgia', serif;
          --font-body: 'Lato', 'Helvetica Neue', sans-serif;
          --font-mono: 'DM Mono', 'Courier New', monospace;
        }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&family=DM+Mono:wght@400;500&display=swap');

        /* ── Page Header ── */
        .contact-header {
          background: var(--navy);
          padding: 80px 64px 72px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }

        .contact-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .contact-header-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
        }

        .header-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .eyebrow-line {
          height: 1px;
          width: 40px;
          background: var(--gold);
        }

        .eyebrow-text {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .header-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 700;
          color: var(--white);
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.05;
        }

        .header-title em {
          font-style: italic;
          color: var(--gold);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .header-email-link {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.25s;
        }

        .header-email-link:hover { color: var(--white); }

        /* ── Stat Bar ── */
        .stat-bar {
          background: var(--gold);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-item {
          padding: 24px 40px;
          border-right: 1px solid rgba(10,15,30,0.15);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-item:last-child { border-right: none; }

        .stat-value {
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(10,15,30,0.6);
        }

        /* ── Channels Section ── */
        .channels-section {
          background: var(--navy-mid);
          padding: 96px 64px;
          position: relative;
        }

        .channels-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-line), transparent);
        }

        .channels-header {
          max-width: 1200px;
          margin: 0 auto 64px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 3.5vw, 48px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .section-title em {
          font-style: italic;
          color: var(--gold);
        }

        .section-note {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--muted);
          line-height: 1.7;
          max-width: 300px;
          text-align: right;
          flex-shrink: 0;
          font-weight: 300;
        }

        .channels-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }

        /* ── Channel Card ── */
        .channel-card {
          background: var(--navy-light);
          padding: 48px 44px;
          position: relative;
          transition: background 0.35s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          overflow: hidden;
        }

        .channel-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
          transform-origin: left;
        }

        .channel-card:hover { background: #1f2e4a; }
        .channel-card:hover::after { transform: scaleX(1); }

        .card-index {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--gold);
          margin-bottom: 28px;
          opacity: 0.7;
        }

        .card-tag {
          position: absolute;
          top: 24px;
          right: 24px;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--navy);
          background: var(--gold);
          padding: 5px 10px;
          border-radius: 2px;
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border: 1px solid var(--gold-line);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: background 0.3s, border-color 0.3s;
        }

        .channel-card:hover .card-icon-wrap {
          background: var(--gold-dim);
          border-color: var(--gold);
        }

        .card-icon {
          width: 20px;
          height: 20px;
          color: var(--gold);
        }

        .card-content { flex: 1; }

        .card-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0 0 8px;
        }

        .card-title {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 36px;
          font-weight: 300;
        }

        .card-footer { margin-top: auto; }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid var(--gold-line);
          padding-bottom: 4px;
          transition: color 0.2s, border-color 0.2s;
        }

        .card-link:hover {
          color: var(--gold-bright);
          border-color: var(--gold-bright);
        }

        .btn-arrow { width: 14px; height: 14px; }

        /* ── Assurance Strip ── */
        .assurance-strip {
          background: var(--navy);
          border-top: 1px solid var(--border);
          padding: 72px 64px;
        }

        .assurance-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .assurance-quote { flex: 1; }

        .quote-mark {
          font-family: var(--font-display);
          font-size: 72px;
          color: var(--gold);
          line-height: 0.6;
          margin-bottom: 18px;
          opacity: 0.6;
        }

        .quote-text {
          font-family: var(--font-display);
          font-size: clamp(18px, 2vw, 24px);
          font-style: italic;
          color: var(--white);
          line-height: 1.45;
          margin: 0 0 18px;
        }

        .quote-attr {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .assurance-divider {
          width: 1px;
          height: 140px;
          background: var(--border);
          flex-shrink: 0;
        }

        .assurance-items {
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex-shrink: 0;
        }

        .assurance-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .assurance-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          margin-top: 7px;
          flex-shrink: 0;
        }

        .assurance-text {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.5;
        }

        .assurance-text strong {
          color: var(--white);
          font-weight: 700;
          display: block;
          font-size: 13px;
          margin-bottom: 2px;
        }

        /* ── Final CTA ── */
        .final-cta {
          background: var(--gold);
          padding: 72px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .final-cta::before {
          content: 'CONTACT';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-size: 180px;
          font-weight: 900;
          color: rgba(10,15,30,0.06);
          letter-spacing: -0.05em;
          white-space: nowrap;
          pointer-events: none;
        }

        .final-cta-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10,15,30,0.55);
          margin-bottom: 14px;
        }

        .final-cta-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 700;
          color: var(--navy);
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .final-cta-sub {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(10,15,30,0.6);
          margin-bottom: 36px;
          font-weight: 300;
        }

        .final-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-email-link {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(10,15,30,0.6);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.25s;
        }

        .cta-email-link:hover { color: var(--navy); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .contact-header { padding: 56px 28px 52px; }
          .contact-header-inner { flex-direction: column; align-items: flex-start; gap: 28px; }
          .channels-section { padding: 64px 28px; }
          .channels-header { flex-direction: column; align-items: flex-start; }
          .section-note { text-align: left; }
          .channels-grid { grid-template-columns: 1fr; }
          .stat-bar { grid-template-columns: repeat(2, 1fr); }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(10,15,30,0.15); }
          .assurance-strip { padding: 56px 28px; }
          .assurance-inner { flex-direction: column; gap: 36px; }
          .assurance-divider { display: none; }
          .final-cta { padding: 56px 28px; }
          .channel-card { padding: 32px 24px; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "contact-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-header-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-eyebrow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow-line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow-text", children: "Contact & Enquiries" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "header-title", children: [
          "Get in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Touch" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "md", message: "Hello, I want to start PTE preparation", children: "Chat with a Coach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@elitescorepte.com", className: "header-email-link", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { style: {
            width: 14,
            height: 14
          } }),
          "hello@elitescorepte.com"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "channels-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "channels-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-label", children: "Channels of Communication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title", children: [
            "How Would You",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Like to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Connect?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-note", children: "Every enquiry is handled by a senior coaching specialist — not an automated system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "channels-grid", children: channels.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelCard, { channel: c, delay: i * 0.1 }, c.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "assurance-strip", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "assurance-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "assurance-quote", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quote-mark", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "quote-text", children: "The coaching I received was the most structured and disciplined approach to PTE preparation I had ever encountered — comparable to a professional institution." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "quote-attr", children: "— Priya M., PTE Score 86 · Sydney, Australia" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "assurance-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "assurance-items", children: [{
        title: "No Automated Responses",
        desc: "Every reply comes from a real, certified coach."
      }, {
        title: "Zero Pressure Policy",
        desc: "Guidance first. Enrollment only when you're ready."
      }, {
        title: "Verified Track Record",
        desc: "12,000+ students across 40+ countries."
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "assurance-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "assurance-bullet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "assurance-text", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.title }),
          item.desc
        ] })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "final-cta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "final-cta-label", children: "Take the first step" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "final-cta-title", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "final-cta-sub", children: "Your target score is closer than you think." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "final-cta-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, { size: "lg", message: "Hello, I want to start PTE preparation", children: "Chat with a Coach Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@elitescorepte.com", className: "cta-email-link", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { style: {
            width: 14,
            height: 14
          } }),
          "hello@elitescorepte.com"
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
