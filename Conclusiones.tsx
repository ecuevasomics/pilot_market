import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Conclusiones() {
  return (
    <section id="conclusiones" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Conclusiones y Recomendaciones</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Síntesis estratégica del análisis de mercado y recomendaciones para el éxito en el sector de genotipificación canina.
            </p>
          </div>

          {/* Conclusiones Principales */}
          <Card>
            <CardHeader>
              <CardTitle>Conclusiones Principales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mercado Atractivo en Crecimiento</h3>
                    <p className="text-muted-foreground">
                      El mercado de genotipificación de enfermedades en perros en México y Latinoamérica presenta un crecimiento robusto con CAGR del 9.2% en México y 8.4% en Latinoamérica (2025-2030). El tamaño del mercado alcanzará USD 12.9 millones en México y USD 45.6 millones en Latinoamérica para 2030, superando significativamente el crecimiento económico general de la región.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tendencias Favorables del Consumidor</h3>
                    <p className="text-muted-foreground">
                      La humanización de mascotas es el factor social más significativo, con el 69.8% de hogares mexicanos poseyendo mascotas y más de 43.8 millones de perros en el país. Los propietarios gastan más en sus mascotas que en sí mismos, reflejando un vínculo emocional profundo que impulsa la inversión en salud y bienestar animal. Esta tendencia crea disposición a pagar por servicios especializados de alto valor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Oportunidad Significativa en Seguros</h3>
                    <p className="text-muted-foreground">
                      Con solo el 4.3% de mascotas aseguradas y el 90% de propietarios desconociendo la existencia de seguros para mascotas, existe una oportunidad masiva para desarrollar productos integrados que combinen seguros con pruebas genéticas preventivas. Las aseguradoras están comenzando a incluir servicios de bienestar en cobertura, creando sinergias potenciales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Competencia Intensa pero Manejable</h3>
                    <p className="text-muted-foreground">
                      El análisis de Porter revela una intensidad competitiva moderada-alta, con empresas internacionales como Embark y Wisdom Panel dominando el mercado. Sin embargo, el desarrollo de capacidades locales (Amplicare Lab, Bionag) y el conocimiento del mercado regional ofrecen oportunidades de diferenciación. La clave está en enfocarse en servicio local, bases de datos regionales y alianzas estratégicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Necesidad Crítica de Educación del Mercado</h3>
                    <p className="text-muted-foreground">
                      El 90% de propietarios desconocen servicios especializados para mascotas, lo que representa tanto un desafío como una oportunidad. La inversión en educación del mercado, campañas de concienciación y programas de formación para veterinarios es fundamental para acelerar la adopción. Las empresas que lideren en educación construirán ventajas competitivas sostenibles.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recomendaciones Estratégicas */}
          <Card className="border-primary/50">
            <CardHeader className="bg-primary/5">
              <CardTitle>Recomendaciones Estratégicas</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    Estrategia de Entrada al Mercado
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Segmentación inicial:</strong> Enfocarse en propietarios premium y criadores profesionales que tienen mayor disposición a pagar y pueden generar referencias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Alianzas veterinarias:</strong> Establecer programas de referencia con clínicas veterinarias líderes en ciudades principales antes de expansión masiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Diferenciación regional:</strong> Desarrollar bases de datos genéticas específicas para poblaciones caninas latinoamericanas, mejorando precisión vs. competidores internacionales</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    Modelo de Negocio
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Pricing escalonado:</strong> Ofrecer kits básicos (USD 60-80), salud (USD 100-150) y premium (USD 150-200) para capturar diferentes segmentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Modelo de suscripción:</strong> Desarrollar servicios recurrentes (USD 50-80/año) para actualizaciones y consultas, mejorando LTV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Punto de equilibrio:</strong> Alcanzar ~1,360 pruebas/mes (45/día) con precio promedio USD 120 y margen bruto 58%</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    Marketing y Educación
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Contenido educativo:</strong> Invertir en blogs, videos y webinars sobre genética canina, posicionándose como líder de pensamiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Formación veterinaria:</strong> Seminarios y certificaciones para veterinarios sobre interpretación de resultados genéticos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Marketing digital:</strong> Campañas en redes sociales dirigidas a propietarios de mascotas con testimonios y casos de éxito</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    Desarrollo de Producto
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Servicios integrados:</strong> Desarrollar alianzas con aseguradoras para ofrecer paquetes de seguro + pruebas genéticas preventivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Valor agregado:</strong> Nutrición personalizada, planes de ejercicio y asesoramiento reproductivo basados en genética</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Expansión de especies:</strong> Extender servicios a gatos (segmento de mayor crecimiento) y caballos para diversificar ingresos</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    Operaciones y Tecnología
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Inversión inicial:</strong> USD 1.1-1.95M para laboratorio, plataforma digital, base de datos y capital de trabajo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Capacidad objetivo:</strong> 500-1,000 muestras/mes con tiempo de procesamiento &lt;15 días</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Calidad y certificación:</strong> Obtener certificaciones ISO/GLP y cumplir con NOM-012-SAG/ZOO-2020 desde el inicio</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    Expansión Regional
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Mercados prioritarios:</strong> México como base, seguido de Argentina (mayor crecimiento) y Brasil (mayor mercado)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Adaptación regulatoria:</strong> Navegar variaciones regulatorias entre países con equipo legal especializado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Logística regional:</strong> Establecer alianzas con servicios de mensajería confiables para cada mercado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Factores Críticos de Éxito */}
          <Card className="bg-accent/10 border-accent/50">
            <CardHeader>
              <CardTitle>Factores Críticos de Éxito</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Educación del Mercado</h4>
                  <p className="text-sm text-muted-foreground">
                    Inversión sostenida en concienciación sobre beneficios de pruebas genéticas preventivas
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Alianzas Veterinarias</h4>
                  <p className="text-sm text-muted-foreground">
                    Red sólida de veterinarios que recomiendan y confían en los servicios
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Calidad y Precisión</h4>
                  <p className="text-sm text-muted-foreground">
                    Resultados confiables y científicamente validados para construir reputación
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Experiencia del Cliente</h4>
                  <p className="text-sm text-muted-foreground">
                    Proceso simple, soporte personalizado y comunicación clara de resultados
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Innovación Continua</h4>
                  <p className="text-sm text-muted-foreground">
                    Actualización constante de bases de datos y desarrollo de nuevas aplicaciones
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Gestión Financiera</h4>
                  <p className="text-sm text-muted-foreground">
                    Control de costos, optimización de márgenes y gestión eficiente de capital
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Perspectiva Final */}
          <div className="text-center space-y-4 py-8">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              El mercado de genotipificación de enfermedades en perros en México y Latinoamérica presenta una <strong className="text-foreground">oportunidad atractiva</strong> para empresas que puedan combinar excelencia científica con educación efectiva del mercado y construcción de alianzas estratégicas. El éxito requerirá paciencia para educar al mercado, inversión en capacidades locales y enfoque en crear valor genuino para propietarios de mascotas y profesionales veterinarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
