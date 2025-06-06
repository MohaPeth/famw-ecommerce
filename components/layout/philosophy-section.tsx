import { Logo } from "@/components/ui/logo";
import { BRAND_PHILOSOPHY } from "@/data/constants";

export function PhilosophySection() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">PHILOSOPHIE</h2>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed font-serif text-gray-300">
          {BRAND_PHILOSOPHY.map((text, index) => (
            <p
              key={index}
              className={
                index === BRAND_PHILOSOPHY.length - 1
                  ? "text-famw-cream font-bold"
                  : ""
              }
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
