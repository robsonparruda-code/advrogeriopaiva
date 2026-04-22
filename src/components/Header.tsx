import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoSmall from "@/assets/logo3d-small.jpg";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#servicos" },
  { label: "O Escritório", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3 font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
          <div>
            ROGÉRIO PAIVA
            <span className="block text-xs font-body font-light tracking-[0.3em] text-gold">ADVOCACIA</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-light text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5561991061725"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 bg-gold text-accent-foreground font-body text-sm font-medium rounded hover:bg-gold-dark transition-colors"
          >
            Agende Agora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-gold/20 animate-fade-in">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5561991061725"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2 bg-gold text-accent-foreground font-body text-sm font-medium rounded"
            >
              Agende Agora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
