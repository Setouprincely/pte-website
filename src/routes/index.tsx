import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Star,
  CheckCircle2,
  Target,
  BookOpen,
  Users,
  Trophy,
  Zap,
  Clock,
  ArrowRight,
  Quote,
  ArrowUpRight,
  GraduationCap,
  BarChart3,
  Globe2,
  ShieldCheck,
  ChevronRight,
  Award,
  TrendingUp,
  FileText,
  Mic,
  PenTool,
  Headphones,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-student-kN9VSV3.jpg";
import successImg from "@/assets/success.jpg";
import testScoreImg from "@/assets/valid.jpg";
import scoreOnLaptopImg from "@/assets/modify.jpg";
import viewingResultsImg from "@/assets/leak.jpg";
import writingOnPaperImg from "@/assets/writing-on-paper.jpg";
import personWithFlagImg from "@/assets/person-with-flag.jpg";
import countryFlagsImg from "@/assets/country-flags.jpg";
import proof1Img from "@/assets/proof1.jpg";
import proof2Img from "@/assets/proof2.jpg";
import proof3Img from "@/assets/proof3.jpg";
import proof4Img from "@/assets/proof4.jpg";
import testimony1Img from "@/assets/testimony1.jpg";
import testimony2Img from "@/assets/testimony2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EliteScore PTE — Score High with Expert Guidance" },
      {
        name: "description",
        content:
          "Achieve your target PTE score with proven strategies, real past questions and personalized 1-on-1 coaching. 90% success rate. Chat on WhatsApp.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "500+", label: "Students Trained", sub: "Across 30+ countries" },
  { value: "90%", label: "Success Rate", sub: "First-attempt passes" },
  { value: "75+", label: "Average Score", sub: "Guaranteed improvement" },
  { value: "4.9★", label: "Student Rating", sub: "Verified reviews" },
];

const services = [
  {
    icon: FileText,
    tag: "Core",
    title: "Obtain Verfied Score Card",
    desc: "Get a valid and fully verified PTE score with our trusted support services. We guide you through the entire process, ensuring accuracy, authenticity, and fast results. Whether you need a desired score with or without the exams, we make the journey smooth and reliable so you can confidently achieve your study or migration goals.",
    number: "01",
    image: testScoreImg,
  },
  {
    icon: Target,
    tag: "Assessment",
    title: "Modify Old Scores",
    desc: "Modify Your Old Scores If Your Certificate Is Still Valid",
    number: "02",
    image: scoreOnLaptopImg,
  },
  {
    icon: Users,
    tag: "Premium",
    title: "Leak Questions",
    desc: "Get Leak Question Papers And Answers For Every Upcoming Exam Date And Center Location Once You Are Registered With Us",
    number: "03",
    image: viewingResultsImg,
  },
  {
    icon: Zap,
    tag: "Intensive",
    title: "Book Exam",
    desc: "Book Your Examination With Our Help And Get Your Desired Score Without Any Hassle",
    number: "04",
    image: writingOnPaperImg,
  },
];

const skills = [
  { icon: Mic, label: "Speaking", color: "#C9A84C" },
  { icon: Headphones, label: "Listening", color: "#C9A84C" },
  { icon: BookOpen, label: "Reading", color: "#C9A84C" },
  { icon: PenTool, label: "Writing", color: "#C9A84C" },
];

const reasons = [
  { text: "Real exam-Questions And Answers", icon: ShieldCheck },
  { text: "Valid and Verified PTE Score Cards", icon: BarChart3 },
  { text: "Obtain Desired Score", icon: GraduationCap },
  { text: "Verified In Pearson Offial Site", icon: Trophy },
  { text: "Affordable, transparent pricing", icon: CheckCircle2 },
  { text: "WhatsApp support 7 days a week", icon: Globe2 },
];

const steps = [
  {
    n: "01",
    title: "Contact Us on WhatsApp",
    desc: "Send a message — our consultants reply within minutes with a free score assessment.",
  },
  {
    n: "02",
    title: "Get Your Desired Score",
    desc: "Obtain Your Desired Score Within Few Hours After Contscting Consultant",
  },
  {
    n: "03",
    title: "Get Leaked Questions",
    desc: "Practice Questions And Answers For Every Upcoming Exam Date and Center Location Once You Are Registered.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    flag: "🇮🇳",
    country: "India",
    score: "58 → 82",
    weeks: "4 weeks",
    image: testimony1Img,
    text: "The practice questions were identical to what I saw on my PTE exam. This service is a game-changer",
  },
  {
    name: "Daniel O.",
    flag: "🇳🇬",
    country: "Nigeria",
    score: "61 → 79+",
    weeks: "3 weeks",
    image: testimony2Img,
    text: "I was amazed at how accurate the practice questions were compared to the actual PTE exam",
  },
  {
    name: "Mei L.",
    flag: "🇨🇳",
    country: "China",
    score: "52 → 79",
    weeks: "3 weeks",
    image: personWithFlagImg,
    text: "The practice questions are exactly like the real PTE exam. I felt so well-prepared.",
  },
];

const proofs = [proof1Img, proof2Img, proof3Img, proof4Img];

const accreditations = [
  "Official PTE Academic Preparation Partner",
  "Pearson Certified Educators",
  "ISO 9001 Quality Assured",
  "5-Year Track Record",
];

const countryFlags = ["🇦🇺", "🇨🇦", "🇬🇧", "🇺🇸", "🇮🇳", "🇳🇿", "🇸🇬", "🇦🇪"];

function HomePage() {
  return (
    <SiteLayout>
      <style>{`
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
        .es-prog-image-wrap {
          margin: -40px -36px 24px;
          height: 170px;
          overflow: hidden;
          border-bottom: 1px solid #E5E2DC;
        }
        .es-prog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .es-programme-card:hover .es-prog-image { transform: scale(1.05); }

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
          position: relative;
          background: var(--navy-light);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0;
          overflow: hidden;
        }
        .es-countries-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10,15,30,0.65);
          z-index: 1;
        }
        .es-countries-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .es-countries-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.6;
          filter: saturate(0.9);
        }
        .es-countries-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 32px;
          position: relative;
          z-index: 2;
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
        .es-testi-photo-wrap {
          width: 100%;
          height: 170px;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 22px;
        }
        .es-testi-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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

        /* Proof Gallery */
        .es-proof {
          background: var(--cream);
          border-top: 1px solid #E5E2DC;
          border-bottom: 1px solid #E5E2DC;
        }
        .es-proof-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          margin-bottom: 36px;
        }
        @media (max-width: 768px) {
          .es-proof-header { flex-direction: column; align-items: flex-start; }
        }
        .es-proof-note {
          font-size: 14px;
          line-height: 1.7;
          color: #7A7570;
          max-width: 440px;
          margin: 0;
        }
        .es-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 980px) {
          .es-proof-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .es-proof-grid { grid-template-columns: 1fr; }
        }
        .es-proof-card {
          background: #fff;
          border: 1px solid #E5E2DC;
          border-radius: 2px;
          overflow: hidden;
        }
        .es-proof-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
        }

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
      `}</style>

      <div className="es-page">

        {/* ─── ANNOUNCEMENT ─────────────────────────────────────────── */}
        <div className="es-announce">
          <span>Get leaked Question papers and anwswers now — only 8 spots remaining.</span>
          <WhatsAppButton
            size="sm"
            className="es-announce-pill"
          >
            Get Now
          </WhatsAppButton>
        </div>

        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section className="es-hero">
          <div className="es-hero-bg">
            <img src={heroImg} alt="Student preparing for PTE exam" />
          </div>
          <div className="es-hero-grid-overlay" />
          <div className="es-hero-rule" />

          <div className="es-hero-inner">
            {/* Left copy */}
            <div className="es-hero-left">
              <div className="es-credential-badge">
                <ShieldCheck />
                Pearson Certified Cetficates
              </div>

              <h1 className="es-hero-headline">
                Get a Registered{" "}
                <em>PTE Academic</em>{" "}
                Certificate In Australia
              </h1>

              <p className="es-hero-sub">
                Join 500+ graduates from 30 nations who achieved their target score
                with Our PTE Success team — without sitting the open exam.
              </p>

              <div className="es-trust-row">
                {["99% Success rate", "79+ and above", "Results in 24hours"].map((t) => (
                  <span key={t} className="es-trust-item">
                    <CheckCircle2 />
                    {t}
                  </span>
                ))}
              </div>

              <div className="es-hero-ctas">
                <WhatsAppButton size="lg" className="es-btn-primary">
                  Contact Us Now
                </WhatsAppButton>
                <Link to="/services" className="es-btn-ghost">
                  Explore Programmes <ArrowRight />
                </Link>
              </div>
            </div>

            {/* Right stat panel */}
            <div className="es-hero-panel">
              {stats.map((s) => (
                <div key={s.label} className="es-stat-row">
                  <div className="es-stat-number">{s.value}</div>
                  <div>
                    <div className="es-stat-label">{s.label}</div>
                    <div className="es-stat-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
              <div className="es-panel-cta">
                <WhatsAppButton
                  size="sm"
                  className="es-btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "12px" }}
                  message="Hello, I'd like to Know more About The Services"
                >
                  Get Free Score Assessment →
                </WhatsAppButton>
              </div>
            </div>
          </div>

          {/* Credential bar */}
          <div className="es-credential-bar">
            <div className="es-credential-bar-inner">
              {accreditations.map((a) => (
                <span key={a} className="es-cred-item">
                  <span className="es-cred-dot" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MOBILE STATS ─────────────────────────────────────────── */}
        <div className="es-mobile-stats">
          {stats.map((s) => (
            <div key={s.label} className="es-mobile-stat">
              <div className="es-stat-number" style={{ fontSize: "2rem", textAlign: "center" }}>{s.value}</div>
              <div className="es-stat-label" style={{ textAlign: "center", fontSize: "12px", marginTop: "6px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ─── SKILLS STRIP ─────────────────────────────────────────── */}
        <div className="es-skills-strip">
          <div className="es-skills-inner">
            {skills.map((s) => (
              <div key={s.label} className="es-skill-item">
                <s.icon />
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* ─── PROGRAMMES ───────────────────────────────────────────── */}
        <section className="es-section es-programmes">
          <div className="es-section-inner">
            <div className="es-programmes-header">
              <div>
                <div className="es-section-eyebrow">Our Services</div>
                <h2 className="es-section-heading">
                  Obtain Your Desired.<br />
                  <span style={{ color: "#C9A84C" }}>Valid and Verified Scores.</span>
                </h2>
              </div>
              <p style={{ color: "#7A7570", fontSize: "16px", lineHeight: "1.7", maxWidth: "480px", alignSelf: "flex-end", margin: 0 }}>
                We are Team of Board Members at the Pearson Board And We
                Are Here to help you Accomplish your Educational Goals
                or Futue Job Carier Both Home and Abroad
              </p>
            </div>

            <div className="es-programmes-grid">
              {services.map((s) => (
                <div key={s.title} className="es-programme-card">
                  <div className="es-prog-image-wrap">
                    <img src={s.image} alt={s.title} className="es-prog-image" loading="lazy" />
                  </div>
                  <div className="es-prog-num">{s.number}</div>
                  <div className="es-prog-tag">{s.tag}</div>
                  <div className="es-prog-icon"><s.icon /></div>
                  <h3 className="es-prog-title">{s.title}</h3>
                  <p className="es-prog-desc">{s.desc}</p>
                  <div className="es-prog-link">
                    Learn more <ArrowUpRight />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
              <Link to="/services" className="es-link-underline">
                View all programmes & pricing <ChevronRight />
              </Link>
            </div>
          </div>
        </section>

        <div className="es-divider" />

        {/* ─── WHY PTE Success Team ───────────────────────────────────────── */}
        <section className="es-section es-why">
          <div className="es-section-inner">
            <div className="es-why-grid">
              {/* Image */}
              <div className="es-why-image-wrap">
                <img src={successImg} alt="Successful EliteScore PTE students celebrating" />

                <div className="es-why-badge-1">
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>99%</div>
                  <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
                    Success<br />Rate
                  </div>
                </div>

                <div className="es-why-badge-2">
                  <div className="es-why-badge-icon"><Trophy /></div>
                  <div>
                    <div style={{ fontSize: "11px", color: "#999" }}>Average improvement</div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)" }}>+18 points</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="es-section-eyebrow">Why EliteScore</div>
                <h2 className="es-section-heading">
                  A Premium Path<br />to Your<br />
                  <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Dream Score</em>
                </h2>
                <p style={{ color: "#7A7570", lineHeight: "1.75", marginTop: "24px", fontSize: "15px" }}>
                  We've guided hundreds of students past the 79-point threshold — the gateway
                  to Australian Permanent Residency, UK visas, and leading university admissions
                  worldwide. Here is what distinguishes our approach.
                </p>

                <div className="es-reasons-grid">
                  {reasons.map((r) => (
                    <div key={r.text} className="es-reason-item">
                      <r.icon />
                      <span className="es-reason-text">{r.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "20px" }}>
                  <WhatsAppButton size="lg" className="es-btn-primary">
                    Contact Us
                  </WhatsAppButton>
                  <span style={{ fontSize: "12px", color: "#AAA" }}>No commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COUNTRIES STRIP ──────────────────────────────────────── */}
        <div className="es-countries-strip">
          <div className="es-countries-image">
            <img src={countryFlagsImg} alt="Country flags representing global students" loading="lazy" />
          </div>
          <div className="es-countries-inner">
            <span className="es-countries-label">Students from</span>
            <div className="es-countries-flags">
              {countryFlags.map((f) => (
                <span key={f}>{f}</span>
              ))}
              <span className="es-countries-more">+ 22 more countries</span>
            </div>
          </div>
        </div>

        {/* ─── PROCESS ──────────────────────────────────────────────── */}
        <section className="es-section es-process">
          <div className="es-section-inner" style={{ position: "relative", zIndex: 1 }}>
            <div className="es-process-grid">
              {/* Left */}
              <div>
                <div className="es-section-eyebrow" style={{ color: "var(--gold)" }}>The Process</div>
                <h2 className="es-section-heading light">
                  From First Message<br />to Exam<br />
                  <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Success</em>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: "1.75", marginTop: "24px", fontSize: "15px" }}>
                  students see score improvement Immediately.
                  Our structured process ensures not a single hour is wasted.
                </p>
                <div style={{ marginTop: "40px" }}>
                  <WhatsAppButton
                    size="lg"
                    className="es-btn-primary"
                    message="Hello, I want to start my PTE journey"
                  >
                    Begin Your Journey
                  </WhatsAppButton>
                </div>
              </div>

              {/* Steps */}
              <div className="es-steps">
                {steps.map((s) => (
                  <div key={s.n} className="es-step">
                    <div className="es-step-num">{s.n}</div>
                    <div>
                      <h3 className="es-step-title">{s.title}</h3>
                      <p className="es-step-desc">{s.desc}</p>
                    </div>
                    <div className="es-step-arrow"><ArrowRight /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="es-section es-testimonials">
          <div className="es-section-inner">
            <div className="es-testi-header">
              <div>
                <div className="es-section-eyebrow">Student Outcomes</div>
                <h2 className="es-section-heading">
                  Real Scores.<br />
                  <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Real Lives Changed.</em>
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                <div className="es-stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
                <span style={{ fontSize: "13px", color: "#AAA" }}>4.9 / 5 from 200+ verified reviews</span>
              </div>
            </div>

            <div className="es-testi-grid">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`es-testi-card ${i === 1 ? "featured" : ""}`}>
                  <div>
                    <div className="es-testi-photo-wrap">
                      <img src={t.image} alt={`${t.name} testimonial`} className="es-testi-photo" loading="lazy" />
                    </div>
                    <div className="es-testi-quote-icon"><Quote /></div>
                    <p className="es-testi-text">{t.text}</p>
                  </div>
                  <div>
                    <div className="es-testi-divider" />
                    <div className="es-testi-footer">
                      <div>
                        <div className="es-testi-name">{t.name}</div>
                        <div className="es-testi-from">{t.flag} {t.country}</div>
                      </div>
                      <div className={`es-score-badge ${i === 1 ? "featured-badge" : ""}`}>
                        <div className="es-score-num">{t.score}</div>
                        <div className="es-score-weeks">in {t.weeks}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="es-view-all">
              <Link to="/testimonials" className="es-link-underline">
                Read all 200+ student stories <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PROOF ───────────────────────────────────────── */}
        <section className="es-section es-proof">
          <div className="es-section-inner">
            <div className="es-proof-header">
              <div>
                <div className="es-section-eyebrow">Proof</div>
                <h2 className="es-section-heading">
                  Verified Results.<br />
                  <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Captured and Shared.</em>
                </h2>
              </div>
              <p className="es-proof-note">
                A selection of recent score evidence shared by our students after Working With Us.
              </p>
            </div>

            <div className="es-proof-grid">
              {proofs.map((proof, index) => (
                <div className="es-proof-card" key={`proof-${index}`}>
                  <img src={proof} alt={`PTE score proof ${index + 1}`} className="es-proof-img" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────────── */}
        <section className="es-cta">
          <div className="es-cta-accent-top" />
          <div className="es-cta-accent-bottom" />
          <div className="es-cta-inner">
            <div className="es-cta-icon">
              <GraduationCap />
            </div>

            <div className="es-section-eyebrow" style={{ justifyContent: "center", marginBottom: "24px" }}>
              Limited Enrolment
            </div>

            <h2 className="es-cta-heading">
              Your Target Score<br />
              Is <em>Within Reach.</em>
            </h2>

            <p className="es-cta-sub">
              Join 500+ students who transformed their PTE scores and unlocked the
              opportunities they had always deserved. Your journey begins with one message.
            </p>

            <div className="es-cta-proof">
              <span className="es-cta-proof-item">
                <Clock />
                Replies within 5 minutes
              </span>
              <span className="es-cta-proof-sep" />
              <span className="es-cta-proof-item">
                <ShieldCheck />
                Free consultation
              </span>
              <span className="es-cta-proof-sep" />
              <span className="es-cta-proof-item">
                <Award />
                Pearson Certified
              </span>
            </div>

            <div className="es-cta-buttons">
              <WhatsAppButton
                size="lg"
                message="Hello, I want to start PTE preparation"
                className="es-btn-primary"
                style={{ fontSize: "15px", padding: "17px 40px" }}
              >
                Start on WhatsApp Now
              </WhatsAppButton>
              <Link to="/services" className="es-btn-ghost es-link-underline light">
                View pricing first <ArrowRight />
              </Link>
            </div>

            <p className="es-cta-fine">
              No credit card required · Free diagnostic assessment · Cancel anytime
            </p>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
