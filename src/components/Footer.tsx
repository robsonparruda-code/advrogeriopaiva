import instagramIcon from "@/assets/instagram.jpg";
import whatsappIcon from "@/assets/whatsapp.png";
import gmailIcon from "@/assets/gmail.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#servicos" },
  { label: "O Escritório", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  {
    icon: whatsappIcon,
    label: "WhatsApp",
    href: "https://wa.me/5561991061725",
  },
  {
    icon: instagramIcon,
    label: "Instagram",
    href: "https://instagram.com/j.rogerioadv",
  },
  {
    icon: gmailIcon,
    label: "E-mail",
    href: "mailto:jrogeriopaiva.adv@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">ROGERIO PAIVA</h3>
            <span className="font-body text-xs tracking-[0.3em] text-gold uppercase">Advocacia</span>
            <p className="font-body text-primary-foreground/50 text-sm mt-3">
              Direito Criminal · Trabalhista · Cível
            </p>
          </div>

          {/* Nav links */}
          <div className="text-center">
            <h4 className="font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full overflow-hidden border border-gold/20 hover:border-gold/60 transition-colors"
                >
                  <img src={s.icon} alt={s.label} className="w-full h-full object-cover" loading="lazy" />
                </a>
              ))}
            </div>
            <p className="font-body text-primary-foreground/40 text-xs mt-4">
              Brasília - DF · (61) 99106-1725
            </p>
          </div>
        </div>

        <div className="gold-divider mx-auto mb-6" />
        <p className="font-body text-primary-foreground/30 text-xs text-center">
          © {new Date().getFullYear()} Rogerio Paiva Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
