import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Award, Heart, ShieldCheck, Sparkles, ArrowRight, Users, TrendingUp, Globe } from "lucide-react";
import immigrationImg from "@/assets/flagg.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EliteScore PTE — Expert PTE Coaches" },
      { name: "description", content: "Meet the team behind EliteScore PTE. Certified coaches dedicated to helping you achieve your dream PTE score." },
      { property: "og:title", content: "About EliteScore PTE — Expert PTE Coaches" },
      { property: "og:description", content: "Our mission is simple: help every student score higher in PTE through proven, personal coaching." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the same standard we expect of you — 79+.", num: "01" },
  { icon: Heart, title: "Care", desc: "Every student gets their desired scores.", num: "02" },
  { icon: ShieldCheck, title: "Integrity", desc: "Real strategies. Real materials. Real scores. No shortcuts.", num: "03" },
  { icon: Sparkles, title: "Innovation", desc: "Constantly updated content based on the latest PTE patterns.", num: "04" },
];

const stats = [
  { value: "500+", label: "Students Assisted", icon: Users },
  { value: "94%", label: "Score 79 or Above", icon: TrendingUp },
  { value: "12+", label: "Countries Represented", icon: Globe },
  { value: "8 Yrs", label: "Combined Expertise", icon: Award },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Head of Academic Strategy",
    credential: "TESOL Certified · Cambridge Examiner",
    bio: "Former Cambridge oral examiner with 10 years developing bespoke PTE frameworks for high-stakes candidates.",
  },
  {
    name: "Marcus Osei",
    role: "Speaking & Pronunciation Lead",
    credential: "MA Applied Linguistics · IELTS Examiner",
    bio: "Specialises in accent neutralisation and fluency patterning, with a track record of 30-point speaking score improvements.",
  },
  {
    name: "Priya Nair",
    role: "Writing & Reading Director",
    credential: "MA TESOL · PTE Certified Trainer",
    bio: "Architect of EliteScore's proprietary template system, used by over 400 students to master integrated writing tasks.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <style>{`
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
      `}</style>

      <div className="about-root">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow" />

          <div className="hero-content">
            <p className="hero-eyebrow">PTE Success Team</p>
            <h1 className="hero-title">
              Precision.<br />
              <em>By Design.</em>
            </h1>
            <div className="hero-divider" />
            <p className="hero-sub">
              We are a specialist PTE academic Team— built on evidence, driven by outcomes, and trusted by ambitious candidates across twelve nations.
            </p>
            <WhatsAppButton className="hero-cta">
              Speak to a Consultant <ArrowRight size={14} />
            </WhatsAppButton>
          </div>

          <div className="hero-bar">
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-val">{s.value}</span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── STORY ── */}
        <section style={{ background: "var(--navy)" }}>
          <div className="story">
            <div className="story-image-wrap">
              <img
                src={immigrationImg}
                alt="PTE coach working with student"
                className="story-img"
                loading="lazy"
              />
              <div className="story-img-badge">
                <div className="story-img-badge-val">500+</div>
                <div className="story-img-badge-lbl">Students Transformed</div>
              </div>
            </div>

            <div className="story-text">
              <p className="section-tag">Our Founding</p>
              <h2 className="section-heading">
                Founded on a<br />
                <em>Single Frustration</em>
              </h2>
              <p className="story-body">
                PTE Success Team was established by a group of senior language coaches who witnessed, repeatedly, the same painful pattern: capable, intelligent candidates failing to reach their target scores — not from lack of ability, but from lack of direction.
              </p>
              <p className="story-body">
                This PTE Team is a precision instrument. Generic preparation yields generic results. We built this Team around the opposite principle: Updating Directly In Pearsons Database and aligned exactly to what the exam rewards.
              </p>
              <div className="story-rule" />
              <p className="story-body">
                Today, PTE Success Team operates as a centre of excellence — deliberately small, deliberately focused. Our students come seeking 79+. Our programme is engineered to take them there.
              </p>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="values-section">
          <div className="values-header">
            <div>
              <p className="section-tag">Institutional Principles</p>
              <h2 className="section-heading" style={{ margin: 0 }}>
                What We<br /><em>Stand For</em>
              </h2>
            </div>
            <p style={{ fontSize: 14, fontWeight: 300, color: "var(--muted)", maxWidth: 380, lineHeight: 1.8, paddingBottom: 8 }}>
              These are not aspirations. They are the operating standards by which We Provide Your Dream Score With little or No Stress, and every resource is measured.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-num">{v.num}</span>
                <div className="value-icon-wrap">
                  <v.icon className="value-icon" size={18} />
                </div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TEAM ── */}
        <section style={{ background: "var(--navy)" }}>
          <div className="team-section">
            <div className="team-header">
              <p className="section-tag">The Faculty</p>
              <h2 className="section-heading">
                Expert Coaches.<br />
                <em>Measurable Results.</em>
              </h2>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <div className="team-card" key={member.name}>
                  <div className="team-initial">{member.name.charAt(0)}</div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <span className="team-credential">{member.credential}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-strip">
          <p className="cta-label">Begin Your Preparation</p>
          <h2 className="cta-heading">
            Your Target Score<br />
            <em>Starts Here</em>
          </h2>
          <p className="cta-sub">
            Speak with a senior coach today. We'll assess where you are and chart exactly how to get you to 79+.
          </p>
          <div className="cta-actions">
            <WhatsAppButton className="btn-primary">
              Book a Free Consultation <ArrowRight size={14} />
            </WhatsAppButton>
            <a href="/courses" className="btn-ghost">
              View Our Programmes
            </a>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
