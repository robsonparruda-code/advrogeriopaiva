import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import logo3d from "@/assets/logo3d.jpg";

const slides = [heroBg, heroBg2, heroBg3];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Carousel background */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full relative h-full">
              <img
                src={src}
                alt="" aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="gold-divider-wide mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} />
          <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <img src={logo3d} alt="Rogério Paiva Advogado" className="w-56 md:w-72 lg:w-80 h-auto" />
          </div>
          <div className="gold-divider-wide mx-auto mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }} />
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-gold w-6" : "bg-gold/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in z-10" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
