import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Target, AlertTriangle } from "lucide-react";

export default function AnalisisSWOT() {
  const swotData = {
    fortalezas: [
      "Mercado en rápido crecimiento (CAGR 9.2% México)",
      "Alta penetración de tenencia de mascotas (69.8% hogares)",
      "Tendencia de humanización de mascotas",
      "Tecnología avanzada disponible (350+ razas)",
      "Desarrollo de capacidades locales (Amplicare Lab, Bionag)",
      "Modelo de negocio accesible (kits caseros)",
      "Apoyo regulatorio y gubernamental",
      "Valor preventivo comprobado"
    ],
    debilidades: [
      "Bajo conocimiento del mercado (90% desconoce servicios)",
      "Precio elevado para segmentos masivos",
      "Dependencia de empresas internacionales",
      "Infraestructura limitada en zonas rurales",
      "Complejidad de interpretación de resultados",
      "Baja integración con sistemas veterinarios",
      "Limitaciones de bases de datos regionales",
      "Capacidad de laboratorio limitada"
    ],
    oportunidades: [
      "Mercado de seguros para mascotas (solo 4.3% aseguradas)",
      "Premiumización continua del mercado",
      "Expansión a otros animales (gatos, caballos)",
      "Alianzas con veterinarios y clínicas",
      "Programas de educación y concienciación",
      "Servicios de valor agregado (nutrición personalizada)",
      "Criadores profesionales (segmento B2B)",
      "Tecnologías emergentes (IA, telemedicina)",
      "Expansión regional (Argentina, Brasil)",
      "Financiamiento y planes de pago"
    ],
    amenazas: [
      "Competencia de empresas internacionales (Embark, Wisdom Panel)",
      "Sensibilidad económica e inflación",
      "Barreras regulatorias variables",
      "Escepticismo del consumidor",
      "Resistencia veterinaria a nuevas tecnologías",
      "Limitaciones tecnológicas para poblaciones locales",
      "Productos sustitutos (diagnóstico tradicional)",
      "Concentración de mercado veterinario",
      "Cuestiones éticas en edición genética",
      "Dependencia de logística confiable"
    ]
  };

  return (
    <section id="swot" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Análisis SWOT</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evaluación estratégica de Fortalezas, Debilidades, Oportunidades y Amenazas del mercado de genotipificación canina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fortalezas */}
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader className="bg-emerald-50 dark:bg-emerald-950/20">
                <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                  <TrendingUp className="h-6 w-6" />
                  Fortalezas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {swotData.fortalezas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Debilidades */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader className="bg-amber-50 dark:bg-amber-950/20">
                <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <TrendingDown className="h-6 w-6" />
                  Debilidades
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {swotData.debilidades.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-amber-500 mt-1">⚠</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Oportunidades */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                  <Target className="h-6 w-6" />
                  Oportunidades
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {swotData.oportunidades.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-blue-500 mt-1">→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Amenazas */}
            <Card className="border-l-4 border-l-rose-500">
              <CardHeader className="bg-rose-50 dark:bg-rose-950/20">
                <CardTitle className="flex items-center gap-2 text-rose-700 dark:text-rose-400">
                  <AlertTriangle className="h-6 w-6" />
                  Amenazas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {swotData.amenazas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-rose-500 mt-1">!</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Matriz SWOT */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle>Estrategias Derivadas del Análisis SWOT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span className="text-blue-500">→</span>
                    Estrategias FO (Fortalezas-Oportunidades)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Aprovechar crecimiento del mercado para desarrollar productos integrados con seguros</li>
                    <li>• Utilizar capacidades locales para crear bases de datos regionales más precisas</li>
                    <li>• Expandir modelo de kits caseros a segmentos premium y criadores profesionales</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-amber-500">⚠</span>
                    <span className="text-blue-500">→</span>
                    Estrategias DO (Debilidades-Oportunidades)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Invertir en educación del mercado para superar bajo conocimiento</li>
                    <li>• Desarrollar alianzas con veterinarios para mejorar integración de sistemas</li>
                    <li>• Crear planes de financiamiento para abordar sensibilidad al precio</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span className="text-rose-500">!</span>
                    Estrategias FA (Fortalezas-Amenazas)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Usar apoyo gubernamental para crear barreras de entrada regulatorias</li>
                    <li>• Diferenciar con servicio local y comprensión del mercado regional</li>
                    <li>• Desarrollar tecnología propia para reducir dependencia internacional</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-amber-500">⚠</span>
                    <span className="text-rose-500">!</span>
                    Estrategias DA (Debilidades-Amenazas)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Formar alianzas estratégicas para competir con empresas internacionales</li>
                    <li>• Invertir en infraestructura para reducir dependencia logística</li>
                    <li>• Desarrollar programas de certificación veterinaria para superar resistencia</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
