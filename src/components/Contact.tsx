import { Phone, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-gold mb-4">Contato</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Fale <span className="text-gold">Conosco</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Agende uma consulta e conte com uma assessoria jurídica comprometida com o seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {[
            {
              icon: MessageCircle,
              label: "Telefone / WhatsApp",
              value: "(61) 99106-1725",
              href: "https://wa.me/5561991061725",
            },
            {
              icon: Mail,
              label: "E-mail",
              value: "jrogeriopaiva.adv@gmail.com",
              href: "mailto:jrogeriopaiva.adv@gmail.com",
            },
            {
              icon: MapPin,
              label: "Localização",
              value: "Brasília - DF",
              href: "https://maps.google.com/?q=Brasilia+DF",
            },
            {
              icon: Instagram,
              label: "Instagram",
              value: "@j.rogerioadv",
              href: "https://instagram.com/j.rogerioadv",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <c.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</span>
              <span className="font-body text-sm text-foreground font-medium">{c.value}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5561991061725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-accent-foreground font-body font-medium rounded transition-all duration-300 shadow-lg hover:shadow-xl text-base"
          >
            <Phone className="w-5 h-5" />
            Agende Agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
