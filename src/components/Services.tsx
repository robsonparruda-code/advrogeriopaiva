import { Briefcase, Users, Gavel } from "lucide-react";

const areas = [
  {
    icon: Users,
    title: "Direito Cível",
    description: "Atuação em demandas consultivas e contenciosas envolvendo obrigações, responsabilidade civil, contratos, direito das famílias e demais matérias de natureza cível.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Atuação na esfera consultiva e contenciosa, tanto na defesa de direitos quanto na orientação preventiva, observando a legislação trabalhista e a jurisprudência aplicável.",
  },
  {
    icon: Gavel,
    title: "Direito Criminal",
    description: "Atuação técnica na defesa de direitos no âmbito do Direito Penal e Processual Penal, com observância das garantias constitucionais e das normas legais vigentes.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-gold mb-4">Áreas de Atuação</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Soluções Jurídicas <span className="text-gradient-gold">Completas</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-primary/40 backdrop-blur-sm border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <area.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-primary-foreground mb-2">{area.title}</h3>
              <p className="font-body text-primary-foreground/60 text-sm text-left">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
