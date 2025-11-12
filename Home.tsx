import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ResumenEjecutivo from "@/components/ResumenEjecutivo";
import AnalisisPESTEL from "@/components/AnalisisPESTEL";
import AnalisisSWOT from "@/components/AnalisisSWOT";
import AnalisisPorter from "@/components/AnalisisPorter";
import BusinessModelCanvas from "@/components/BusinessModelCanvas";
import Conclusiones from "@/components/Conclusiones";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ResumenEjecutivo />
      <AnalisisPESTEL />
      <AnalisisSWOT />
      <AnalisisPorter />
      <BusinessModelCanvas />
      <Conclusiones />
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <h3 className="text-lg font-semibold">Análisis de Mercado: Genotipificación Canina</h3>
            <p className="text-sm text-muted-foreground">
              México y Latinoamérica | Noviembre 2024
            </p>
            <p className="text-xs text-muted-foreground">
              Análisis empresarial completo utilizando marcos PESTEL, SWOT, 5 Fuerzas de Porter y Business Model Canvas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
