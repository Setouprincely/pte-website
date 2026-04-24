import{j as e}from"./index-DZ-7qznz.js";import{c as o,S as s,W as r}from"./SiteLayout-BQ7Lsgyd.js";import{A as t,U as n}from"./users-BYWiG9zl.js";import{T as l}from"./trending-up-Buq-R1Iy.js";import{G as d}from"./globe-CG6KKMU4.js";import{A as i,S as c}from"./shield-check-DxnuDsPC.js";const p=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],m=o("heart",p);const g=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],h=o("sparkles",g),x="/assets/coaching-Bv6sAd8l.jpg",u=[{icon:i,title:"Excellence",desc:"We hold ourselves to the same standard we expect of you — 79+.",num:"01"},{icon:m,title:"Care",desc:"Every student gets a personal plan and direct access to a coach.",num:"02"},{icon:c,title:"Integrity",desc:"Real strategies. Real materials. Real scores. No shortcuts.",num:"03"},{icon:h,title:"Innovation",desc:"Constantly updated content based on the latest PTE patterns.",num:"04"}],v=[{value:"500+",label:"Students Coached",icon:n},{value:"94%",label:"Score 79 or Above",icon:l},{value:"12+",label:"Countries Represented",icon:d},{value:"8 Yrs",label:"Combined Expertise",icon:i}],f=[{name:"Dr. Sarah Chen",role:"Head of Academic Strategy",credential:"TESOL Certified · Cambridge Examiner",bio:"Former Cambridge oral examiner with 10 years developing bespoke PTE frameworks for high-stakes candidates."},{name:"Marcus Osei",role:"Speaking & Pronunciation Lead",credential:"MA Applied Linguistics · IELTS Examiner",bio:"Specialises in accent neutralisation and fluency patterning, with a track record of 30-point speaking score improvements."},{name:"Priya Nair",role:"Writing & Reading Director",credential:"MA TESOL · PTE Certified Trainer",bio:"Architect of EliteScore's proprietary template system, used by over 400 students to master integrated writing tasks."}];function z(){return e.jsxs(s,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --navy: #0a0f1e;
          --navy-mid: #0f1729;
          --navy-light: #162040;
          --gold: #c9a84c;
          --gold-light: #e2c47a;
          --gold-dim: rgba(201,168,76,0.12);
          --gold-border: rgba(201,168,76,0.25);
          --ivory: #f5f0e8;
          --ivory-dim: rgba(245,240,232,0.06);
          --muted: rgba(245,240,232,0.52);
          --rule: rgba(201,168,76,0.2);
        }

        .about-root * { box-sizing: border-box; }
        .about-root { font-family: 'DM Sans', sans-serif; background: var(--navy); color: var(--ivory); overflow-x: hidden; }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-rows: 1fr auto;
          padding: 0;
          overflow: hidden;
        }
        .hero-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%);
        }
        .hero-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 160px 24px 80px;
          gap: 0;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
        }
        .hero-eyebrow::before, .hero-eyebrow::after {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(52px, 8vw, 100px);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          color: var(--ivory);
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold-light);
          display: block;
        }
        .hero-divider {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          margin: 36px auto;
          opacity: 0.6;
        }
        .hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: var(--muted);
          max-width: 520px;
          line-height: 1.75;
        }
        .hero-cta {
          margin-top: 44px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1px solid var(--gold-border);
          color: var(--gold-light);
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 16px 36px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s;
          text-decoration: none;
        }
        .hero-cta:hover { background: var(--gold-dim); border-color: var(--gold); }

        .hero-bar {
          position: relative; z-index: 2;
          border-top: 1px solid var(--rule);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 clamp(24px, 6vw, 80px);
        }
        .hero-stat {
          padding: 32px 24px;
          border-right: 1px solid var(--rule);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
        }
        .hero-stat-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ── STORY ── */
        .story {
          padding: clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          max-width: 1400px;
          margin: 0 auto;
        }
        .story-image-wrap {
          position: relative;
        }
        .story-image-wrap::before {
          content: '';
          position: absolute;
          inset: -16px -16px auto auto;
          width: calc(100% - 32px);
          height: calc(100% - 32px);
          border: 1px solid var(--gold-border);
          border-radius: 2px;
          z-index: 0;
        }
        .story-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 2px;
          filter: brightness(0.85) saturate(0.7);
          display: block;
        }
        .story-img-badge {
          position: absolute;
          bottom: -20px;
          left: -20px;
          z-index: 2;
          background: var(--navy-light);
          border: 1px solid var(--gold-border);
          padding: 20px 28px;
          border-radius: 2px;
        }
        .story-img-badge-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }
        .story-img-badge-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 4px;
        }
        .story-text { padding-top: 20px; }
        .section-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 600;
          line-height: 1.05;
          color: var(--ivory);
          margin: 0 0 28px;
        }
        .section-heading em { font-style: italic; color: var(--gold-light); }
        .story-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--muted);
        }
        .story-body + .story-body { margin-top: 18px; }
        .story-rule {
          width: 48px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
          margin: 36px 0;
        }

        /* ── VALUES ── */
        .values-section {
          background: var(--navy-mid);
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
          padding: clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px);
        }
        .values-header {
          max-width: 1400px;
          margin: 0 auto 72px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }
        .values-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid var(--rule);
        }
        .value-card {
          padding: 44px 36px;
          border-right: 1px solid var(--rule);
          border-top: 1px solid var(--rule);
          position: relative;
          transition: background 0.4s;
        }
        .value-card:hover { background: var(--ivory-dim); }
        .value-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 700;
          color: rgba(201,168,76,0.08);
          line-height: 1;
          position: absolute;
          top: 24px;
          right: 28px;
          user-select: none;
          transition: color 0.4s;
        }
        .value-card:hover .value-num { color: rgba(201,168,76,0.15); }
        .value-icon-wrap {
          width: 44px;
          height: 44px;
          border: 1px solid var(--gold-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 2px;
        }
        .value-icon { color: var(--gold); }
        .value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          color: var(--ivory);
          margin-bottom: 12px;
        }
        .value-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.75;
        }

        /* ── TEAM ── */
        .team-section {
          padding: clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px);
          max-width: 1400px;
          margin: 0 auto;
        }
        .team-header { margin-bottom: 72px; }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--rule);
          border: 1px solid var(--rule);
        }
        .team-card {
          background: var(--navy);
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition: background 0.4s;
        }
        .team-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, var(--gold), transparent);
          transition: width 0.4s ease;
        }
        .team-card:hover { background: var(--navy-light); }
        .team-card:hover::after { width: 100%; }
        .team-initial {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 700;
          color: rgba(201,168,76,0.1);
          line-height: 1;
          margin-bottom: 20px;
          user-select: none;
          transition: color 0.4s;
        }
        .team-card:hover .team-initial { color: rgba(201,168,76,0.2); }
        .team-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--ivory);
          margin-bottom: 6px;
        }
        .team-role {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
        }
        .team-credential {
          display: inline-block;
          font-size: 11px;
          color: var(--muted);
          border: 1px solid var(--rule);
          padding: 4px 10px;
          border-radius: 2px;
          margin-bottom: 20px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.05em;
        }
        .team-bio {
          font-size: 13px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.8;
        }

        /* ── CTA STRIP ── */
        .cta-strip {
          background: var(--navy-mid);
          border-top: 1px solid var(--rule);
          padding: clamp(80px, 8vw, 120px) clamp(24px, 6vw, 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-strip::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 76px);
          font-weight: 600;
          line-height: 1;
          color: var(--ivory);
          max-width: 700px;
          margin: 0 auto 16px;
        }
        .cta-heading em { font-style: italic; color: var(--gold-light); }
        .cta-sub {
          font-size: 15px;
          font-weight: 300;
          color: var(--muted);
          max-width: 440px;
          margin: 0 auto 44px;
          line-height: 1.75;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--gold);
          color: var(--navy);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 16px 36px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
          text-decoration: none;
        }
        .btn-primary:hover { background: var(--gold-light); }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--muted);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 16px 36px;
          border-radius: 2px;
          border: 1px solid var(--rule);
          cursor: pointer;
          transition: color 0.3s, border-color 0.3s;
          text-decoration: none;
        }
        .btn-ghost:hover { color: var(--gold-light); border-color: var(--gold-border); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-bar { grid-template-columns: repeat(2, 1fr); }
          .hero-stat { border-bottom: 1px solid var(--rule); }
          .story { grid-template-columns: 1fr; gap: 60px; }
          .story-image-wrap::before { display: none; }
          .values-header { flex-direction: column; align-items: flex-start; }
          .values-grid { grid-template-columns: 1fr 1fr; }
          .team-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .hero-bar { grid-template-columns: 1fr 1fr; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}),e.jsxs("div",{className:"about-root",children:[e.jsxs("section",{className:"hero",children:[e.jsx("div",{className:"hero-grid-bg"}),e.jsx("div",{className:"hero-glow"}),e.jsxs("div",{className:"hero-content",children:[e.jsx("p",{className:"hero-eyebrow",children:"EliteScore PTE"}),e.jsxs("h1",{className:"hero-title",children:["Precision.",e.jsx("br",{}),e.jsx("em",{children:"By Design."})]}),e.jsx("div",{className:"hero-divider"}),e.jsx("p",{className:"hero-sub",children:"We are a specialist PTE academic coaching institution — built on evidence, driven by outcomes, and trusted by ambitious candidates across twelve nations."}),e.jsxs(r,{className:"hero-cta",children:["Speak to a Coach ",e.jsx(t,{size:14})]})]}),e.jsx("div",{className:"hero-bar",children:v.map(a=>e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-val",children:a.value}),e.jsx("span",{className:"hero-stat-lbl",children:a.label})]},a.label))})]}),e.jsx("section",{style:{background:"var(--navy)"},children:e.jsxs("div",{className:"story",children:[e.jsxs("div",{className:"story-image-wrap",children:[e.jsx("img",{src:x,alt:"PTE coach working with student",className:"story-img",loading:"lazy"}),e.jsxs("div",{className:"story-img-badge",children:[e.jsx("div",{className:"story-img-badge-val",children:"500+"}),e.jsx("div",{className:"story-img-badge-lbl",children:"Students Transformed"})]})]}),e.jsxs("div",{className:"story-text",children:[e.jsx("p",{className:"section-tag",children:"Our Founding"}),e.jsxs("h2",{className:"section-heading",children:["Founded on a",e.jsx("br",{}),e.jsx("em",{children:"Single Frustration"})]}),e.jsx("p",{className:"story-body",children:"EliteScore PTE was established by a group of senior language coaches who witnessed, repeatedly, the same painful pattern: capable, intelligent candidates failing to reach their target scores — not from lack of ability, but from lack of direction."}),e.jsx("p",{className:"story-body",children:"The PTE Academic is a precision instrument. Generic preparation yields generic results. We built this institution around the opposite principle: meticulous, tailored coaching aligned exactly to what the exam rewards."}),e.jsx("div",{className:"story-rule"}),e.jsx("p",{className:"story-body",children:"Today, EliteScore operates as a boutique centre of excellence — deliberately small, deliberately focused. Our students come seeking 79+. Our programme is engineered to take them there."})]})]})}),e.jsxs("section",{className:"values-section",children:[e.jsxs("div",{className:"values-header",children:[e.jsxs("div",{children:[e.jsx("p",{className:"section-tag",children:"Institutional Principles"}),e.jsxs("h2",{className:"section-heading",style:{margin:0},children:["What We",e.jsx("br",{}),e.jsx("em",{children:"Stand For"})]})]}),e.jsx("p",{style:{fontSize:14,fontWeight:300,color:"var(--muted)",maxWidth:380,lineHeight:1.8,paddingBottom:8},children:"These are not aspirations. They are the operating standards by which every coach, every session, and every resource is measured."})]}),e.jsx("div",{className:"values-grid",children:u.map(a=>e.jsxs("div",{className:"value-card",children:[e.jsx("span",{className:"value-num",children:a.num}),e.jsx("div",{className:"value-icon-wrap",children:e.jsx(a.icon,{className:"value-icon",size:18})}),e.jsx("h3",{className:"value-title",children:a.title}),e.jsx("p",{className:"value-desc",children:a.desc})]},a.title))})]}),e.jsx("section",{style:{background:"var(--navy)"},children:e.jsxs("div",{className:"team-section",children:[e.jsxs("div",{className:"team-header",children:[e.jsx("p",{className:"section-tag",children:"The Faculty"}),e.jsxs("h2",{className:"section-heading",children:["Expert Coaches.",e.jsx("br",{}),e.jsx("em",{children:"Measurable Results."})]})]}),e.jsx("div",{className:"team-grid",children:f.map(a=>e.jsxs("div",{className:"team-card",children:[e.jsx("div",{className:"team-initial",children:a.name.charAt(0)}),e.jsx("h3",{className:"team-name",children:a.name}),e.jsx("p",{className:"team-role",children:a.role}),e.jsx("span",{className:"team-credential",children:a.credential}),e.jsx("p",{className:"team-bio",children:a.bio})]},a.name))})]})}),e.jsxs("section",{className:"cta-strip",children:[e.jsx("p",{className:"cta-label",children:"Begin Your Preparation"}),e.jsxs("h2",{className:"cta-heading",children:["Your Target Score",e.jsx("br",{}),e.jsx("em",{children:"Starts Here"})]}),e.jsx("p",{className:"cta-sub",children:"Speak with a senior coach today. We'll assess where you are and chart exactly how to get you to 79+."}),e.jsxs("div",{className:"cta-actions",children:[e.jsxs(r,{className:"btn-primary",children:["Book a Free Consultation ",e.jsx(t,{size:14})]}),e.jsx("a",{href:"/courses",className:"btn-ghost",children:"View Our Programmes"})]})]})]})]})}export{z as component};
