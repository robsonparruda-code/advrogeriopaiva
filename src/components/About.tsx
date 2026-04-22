import { Eye, Rocket } from "lucide-react";
import rogerioImg from "@/assets/rogerio.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-gold mb-4">Sobre</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Compromisso com a <span className="text-gold">Justiça</span>
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 text-center">
              <img
                src={rogerioImg}
                alt="Dr. Rogério Paiva"
                className="w-full md:w-72 lg:w-80 aspect-[3/4] rounded-lg object-cover shadow-lg"
              />
              <p className="font-body text-foreground font-semibold mt-3 text-base">Advogado</p>
              <p className="font-body text-muted-foreground text-sm">OAB/DF 84050</p>
            </div>
            <div className="font-heading text-muted-foreground leading-relaxed text-lg space-y-5 text-justify italic font-semibold">
              <p>Rogério Paiva Advocacia atua com abordagem técnica e exame minucioso das questões submetidas à sua apreciação, considerando as particularidades fáticas e jurídicas de cada caso concreto.</p>
              <p>O exercício profissional é pautado pela responsabilidade, pela organização e pela transparência na comunicação com o cliente, apresentando de forma objetiva os fundamentos jurídicos pertinentes, os riscos processuais envolvidos e as condições da prestação do serviço.</p>
              <p>A atuação desenvolve-se em conformidade com a legislação vigente e com os deveres éticos estabelecidos para o exercício da advocacia.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: Rocket,
              title: "Missão",
              text: "Exercer a advocacia com responsabilidade técnica e ética, oferecendo assessoria jurídica fundamentada e atenção individualizada às demandas apresentadas.",
            },
            {
              icon: Eye,
              title: "Visão",
              text: "Manter-se na seara jurídica como escritório reconhecido pela atuação técnica, ética e responsável, mantendo relação profissional pautada na confiança e no respeito.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-lg bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed text-justify">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
