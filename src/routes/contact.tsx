import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MessageCircle, Mail, Clock, Globe, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EliteScore PTE — Start Your PTE Journey Today" },
      {
        name: "description",
        content:
          "Get in touch with our PTE coaches via WhatsApp or email. Fast replies, personalised advice, no pressure.",
      },
    ],
  }),
  component: ContactPage,
});

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const stats = [
  { value: "98%", label: "Success Rate" },
  { value: "12K+", label: "Students Passed" },
  { value: "79+", label: "Avg. Score Achieved" },
  { value: "24h", label: "Max Response Time" },
];

const channels = [
  {
    index: "01",
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Instant consultation",
    description:
      "Connect directly with a senior PTE consultant. Receive your Desired Score within the hour.",
    cta: WHATSAPP_DISPLAY_NUMBER,
    whatsapp: true,
    tag: "Recommended",
  },
  {
    index: "02",
    icon: Mail,
    title: "Electronic Mail",
    subtitle: "Formal enquiries",
    description:
      "For detailed program enquiries, institutional partnerships, or group enrollment requests.",
    cta: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    index: "03",
    icon: Clock,
    title: "Operating Hours",
    subtitle: "Seven days a week",
    description:
      "Our coaching team is available Monday through Sunday, 8:00 AM to 10:00 PM across all major time zones.",
  },
  {
    index: "04",
    icon: Globe,
    title: "Global Reach",
    subtitle: "Worldwide delivery",
    description:
      "All programs are delivered online. We serve students across Australia, UK, Canada, Europe, and Asia-Pacific.",
  },
];

function StatBar() {
  const { ref, inView } = useInView(0.2);
  return (
    <div ref={ref} className="stat-bar" aria-label="Key statistics">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="stat-item"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
          }}
        >
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function ChannelCard({
  channel,
  delay,
}: {
  channel: (typeof channels)[0];
  delay: number;
}) {
  const { ref, inView } = useInView(0.1);
  const Icon = channel.icon;
  return (
    <div
      ref={ref}
      className="channel-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <div className="card-index">{channel.index}</div>
      {channel.tag && <div className="card-tag">{channel.tag}</div>}
      <div className="card-icon-wrap">
        <Icon className="card-icon" />
      </div>
      <div className="card-content">
        <p className="card-subtitle">{channel.subtitle}</p>
        <h3 className="card-title">{channel.title}</h3>
        <p className="card-desc">{channel.description}</p>
      </div>
      <div className="card-footer">
        {channel.whatsapp && (
          <WhatsAppButton size="sm" message="Hello, I want to start PTE preparation">
            <span>{channel.cta}</span>
            <ArrowUpRight className="btn-arrow" />
          </WhatsAppButton>
        )}
        {channel.href && (
          <a href={channel.href} className="card-link">
            <span>{channel.cta}</span>
            <ArrowUpRight className="btn-arrow" />
          </a>
        )}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <SiteLayout>
      <style>{`
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
      `}</style>

      {/* ── Page Header ── */}
      <section className="contact-header">
        <div className="contact-header-inner">
          <div>
            <div className="header-eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Contact & Enquiries</span>
            </div>
            <h1 className="header-title">
              Get in <em>Touch</em>
            </h1>
          </div>
          <div className="header-actions">
            <WhatsAppButton size="md" message="Hello, I want to start PTE preparation">
              Chat with a Consultant
            </WhatsAppButton>
            <a href={`mailto:${CONTACT_EMAIL}`} className="header-email-link">
              <Mail style={{ width: 14, height: 14 }} />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <StatBar />

      {/* ── Channels ── */}
      <section className="channels-section">
        <div className="channels-header">
          <div>
            <p className="section-label">Channels of Communication</p>
            <h2 className="section-title">
              How Would You<br />
              Like to <em>Connect?</em>
            </h2>
          </div>
          <p className="section-note">
            Every enquiry is handled by a senior consulting specialist —
            not an automated system.
          </p>
        </div>

        <div className="channels-grid">
          {channels.map((c, i) => (
            <ChannelCard key={c.title} channel={c} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── Assurance Strip ── */}
      <section className="assurance-strip">
        <div className="assurance-inner">
          <div className="assurance-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Thanks to this service, I passed my PTE exam with confidence! The questions and answers really helped me prepare.
            </p>
            <p className="quote-attr">— Priya M., PTE Score 86 · Sydney, Australia</p>
          </div>

          <div className="assurance-divider" />

          <div className="assurance-items">
            {[
              { title: "No Automated Responses", desc: "Every reply comes from a real, certified consultant." },
              { title: "Zero Pressure Policy", desc: "Guidance first. Start only when you're ready." },
              { title: "Verified Track Record", desc: "12,000+ students across 40+ countries." },
            ].map((item) => (
              <div key={item.title} className="assurance-item">
                <div className="assurance-bullet" />
                <div className="assurance-text">
                  <strong>{item.title}</strong>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta">
        <p className="final-cta-label">Take the first step</p>
        <h2 className="final-cta-title">Ready to Get Started?</h2>
        <p className="final-cta-sub">
          Your target score is closer than you think.
        </p>
        <div className="final-cta-actions">
          <WhatsAppButton size="lg" message="Hello, I want to start PTE preparation">
            Chat with a Consultant Now
          </WhatsAppButton>
          <a href={`mailto:${CONTACT_EMAIL}`} className="cta-email-link">
            <Mail style={{ width: 14, height: 14 }} />
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
