import { Target, Clock, Award } from "lucide-react";

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-gold mb-4">O Escritório</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos <span className="text-gold">Pilares</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Proatividade",
              text: "A atuação profissional é conduzida com acompanhamento atento das etapas processuais e análise contínua das demandas jurídicas apresentadas.",
            },
            {
              icon: Clock,
              title: "Contato",
              text: "Para informações e atendimento, utilize os canais de comunicação disponibilizados pelo escritório: telefone, WhatsApp ou Instagram.",
            },
            {
              icon: Award,
              title: "Experiência",
              text: "A atuação jurídica é desenvolvida com base na análise cuidadosa das demandas apresentadas, observando os princípios éticos e técnicos que regem a advocacia.",
            },
          ].map((d) => (
            <div key={d.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy/10 flex items-center justify-center">
                <d.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{d.title}</h3>
              <p className="font-body text-muted-foreground text-lg leading-relaxed text-justify">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
