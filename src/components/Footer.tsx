import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              EliteScore PTE
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              Helping ambitious students achieve their dream PTE scores with expert coaching,
              proven strategies and real exam materials.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:hello@elitescorepte.com" className="hover:text-gold">
                  hello@elitescorepte.com
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-gold hover:text-gold-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-gold hover:text-gold-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
              <a aria-label="Twitter" href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-gold hover:text-gold-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} EliteScore PTE. All rights reserved.</p>
          <p>Crafted for ambitious learners worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
