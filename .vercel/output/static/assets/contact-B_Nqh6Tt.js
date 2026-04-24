import{j as e,r as o}from"./index-DZ-7qznz.js";import{S as x,W as s,M as l,a as f}from"./SiteLayout-BQ7Lsgyd.js";import{C as h,A as d}from"./clock-QOeQTl5Q.js";import{G as g}from"./globe-CG6KKMU4.js";function p(a=.15){const t=o.useRef(null),[r,i]=o.useState(!1);return o.useEffect(()=>{const n=t.current;if(!n)return;const c=new IntersectionObserver(([m])=>{m.isIntersecting&&i(!0)},{threshold:a});return c.observe(n),()=>c.disconnect()},[a]),{ref:t,inView:r}}const u=[{value:"98%",label:"Success Rate"},{value:"12K+",label:"Students Coached"},{value:"79+",label:"Avg. Score Achieved"},{value:"24h",label:"Max Response Time"}],v=[{index:"01",icon:f,title:"WhatsApp",subtitle:"Instant consultation",description:"Connect directly with a senior PTE coach. Receive your personalised study roadmap within the hour.",cta:"Open WhatsApp",whatsapp:!0,tag:"Recommended"},{index:"02",icon:l,title:"Electronic Mail",subtitle:"Formal enquiries",description:"For detailed program enquiries, institutional partnerships, or group enrollment requests.",cta:"hello@elitescorepte.com",href:"mailto:hello@elitescorepte.com"},{index:"03",icon:h,title:"Operating Hours",subtitle:"Seven days a week",description:"Our coaching team is available Monday through Sunday, 8:00 AM to 10:00 PM across all major time zones."},{index:"04",icon:g,title:"Global Reach",subtitle:"Worldwide delivery",description:"All programs are delivered online. We serve students across Australia, UK, Canada, Europe, and Asia-Pacific."}];function b(){const{ref:a,inView:t}=p(.2);return e.jsx("div",{ref:a,className:"stat-bar","aria-label":"Key statistics",children:u.map((r,i)=>e.jsxs("div",{className:"stat-item",style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s ease ${i*.12}s, transform 0.6s ease ${i*.12}s`},children:[e.jsx("span",{className:"stat-value",children:r.value}),e.jsx("span",{className:"stat-label",children:r.label})]},r.label))})}function y({channel:a,delay:t}){const{ref:r,inView:i}=p(.1),n=a.icon;return e.jsxs("div",{ref:r,className:"channel-card",style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(32px)",transition:`opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${t}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${t}s`},children:[e.jsx("div",{className:"card-index",children:a.index}),a.tag&&e.jsx("div",{className:"card-tag",children:a.tag}),e.jsx("div",{className:"card-icon-wrap",children:e.jsx(n,{className:"card-icon"})}),e.jsxs("div",{className:"card-content",children:[e.jsx("p",{className:"card-subtitle",children:a.subtitle}),e.jsx("h3",{className:"card-title",children:a.title}),e.jsx("p",{className:"card-desc",children:a.description})]}),e.jsxs("div",{className:"card-footer",children:[a.whatsapp&&e.jsxs(s,{size:"sm",message:"Hello, I want to start PTE preparation",children:[e.jsx("span",{children:a.cta}),e.jsx(d,{className:"btn-arrow"})]}),a.href&&e.jsxs("a",{href:a.href,className:"card-link",children:[e.jsx("span",{children:a.cta}),e.jsx(d,{className:"btn-arrow"})]})]})]})}function z(){return e.jsxs(x,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"contact-header",children:e.jsxs("div",{className:"contact-header-inner",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"header-eyebrow",children:[e.jsx("div",{className:"eyebrow-line"}),e.jsx("span",{className:"eyebrow-text",children:"Contact & Enquiries"})]}),e.jsxs("h1",{className:"header-title",children:["Get in ",e.jsx("em",{children:"Touch"})]})]}),e.jsxs("div",{className:"header-actions",children:[e.jsx(s,{size:"md",message:"Hello, I want to start PTE preparation",children:"Chat with a Coach"}),e.jsxs("a",{href:"mailto:hello@elitescorepte.com",className:"header-email-link",children:[e.jsx(l,{style:{width:14,height:14}}),"hello@elitescorepte.com"]})]})]})}),e.jsx(b,{}),e.jsxs("section",{className:"channels-section",children:[e.jsxs("div",{className:"channels-header",children:[e.jsxs("div",{children:[e.jsx("p",{className:"section-label",children:"Channels of Communication"}),e.jsxs("h2",{className:"section-title",children:["How Would You",e.jsx("br",{}),"Like to ",e.jsx("em",{children:"Connect?"})]})]}),e.jsx("p",{className:"section-note",children:"Every enquiry is handled by a senior coaching specialist — not an automated system."})]}),e.jsx("div",{className:"channels-grid",children:v.map((a,t)=>e.jsx(y,{channel:a,delay:t*.1},a.title))})]}),e.jsx("section",{className:"assurance-strip",children:e.jsxs("div",{className:"assurance-inner",children:[e.jsxs("div",{className:"assurance-quote",children:[e.jsx("div",{className:"quote-mark",children:'"'}),e.jsx("p",{className:"quote-text",children:"The coaching I received was the most structured and disciplined approach to PTE preparation I had ever encountered — comparable to a professional institution."}),e.jsx("p",{className:"quote-attr",children:"— Priya M., PTE Score 86 · Sydney, Australia"})]}),e.jsx("div",{className:"assurance-divider"}),e.jsx("div",{className:"assurance-items",children:[{title:"No Automated Responses",desc:"Every reply comes from a real, certified coach."},{title:"Zero Pressure Policy",desc:"Guidance first. Enrollment only when you're ready."},{title:"Verified Track Record",desc:"12,000+ students across 40+ countries."}].map(a=>e.jsxs("div",{className:"assurance-item",children:[e.jsx("div",{className:"assurance-bullet"}),e.jsxs("div",{className:"assurance-text",children:[e.jsx("strong",{children:a.title}),a.desc]})]},a.title))})]})}),e.jsxs("section",{className:"final-cta",children:[e.jsx("p",{className:"final-cta-label",children:"Take the first step"}),e.jsx("h2",{className:"final-cta-title",children:"Ready to Get Started?"}),e.jsx("p",{className:"final-cta-sub",children:"Your target score is closer than you think."}),e.jsxs("div",{className:"final-cta-actions",children:[e.jsx(s,{size:"lg",message:"Hello, I want to start PTE preparation",children:"Chat with a Coach Now"}),e.jsxs("a",{href:"mailto:hello@elitescorepte.com",className:"cta-email-link",children:[e.jsx(l,{style:{width:14,height:14}}),"hello@elitescorepte.com"]})]})]})]})}export{z as component};
