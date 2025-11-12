import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToResumen = () => {
    const element = document.querySelector("#resumen");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 pt-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Análisis de Mercado
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Genotipificación de Enfermedades en Perros
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              México y Latinoamérica
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Análisis empresarial completo del mercado de pruebas genéticas para la detección de enfermedades hereditarias en perros, utilizando marcos estratégicos PESTEL, SWOT, 5 Fuerzas de Porter y Business Model Canvas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToResumen}
              className="text-lg px-8"
            >
              Explorar Análisis
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">USD 12.9M</div>
              <div className="text-sm text-muted-foreground">México 2030</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">9.2%</div>
              <div className="text-sm text-muted-foreground">CAGR México</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">USD 45.6M</div>
              <div className="text-sm text-muted-foreground">LATAM 2030</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">8.4%</div>
              <div className="text-sm text-muted-foreground">CAGR LATAM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
