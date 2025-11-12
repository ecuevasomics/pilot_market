import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, DollarSign, Users, Cpu, Leaf, Scale } from "lucide-react";

export default function AnalisisPESTEL() {
  const factores = [
    {
      id: "politico",
      titulo: "Factores Políticos",
      icon: Building2,
      color: "text-blue-600",
      puntos: [
        {
          titulo: "Regulaciones y Normativas",
          descripcion: "SENASICA supervisa todos los productos y servicios veterinarios. La NOM-012-SAG/ZOO-2020 regula productos para uso animal, incluyendo pruebas diagnósticas genéticas."
        },
        {
          titulo: "Políticas de Bienestar Animal",
          descripcion: "Programas gubernamentales como el de Humane Society International/México en Aguascalientes demuestran compromiso con el bienestar animal, creando entorno favorable para servicios especializados."
        },
        {
          titulo: "Estabilidad Política Regional",
          descripcion: "México y principales mercados latinoamericanos mantienen estabilidad suficiente para desarrollo de negocios veterinarios. Argentina lidera en innovación genética con CRISPR-Cas9."
        },
        {
          titulo: "Apoyo a la Innovación",
          descripcion: "Surgimiento de empresas como Bionag en nanotecnología demuestra ecosistema favorable para innovación científica en el sector."
        }
      ]
    },
    {
      id: "economico",
      titulo: "Factores Económicos",
      icon: DollarSign,
      color: "text-emerald-600",
      puntos: [
        {
          titulo: "Crecimiento del Mercado",
          descripcion: "CAGR del 9.2% en México y 8.4% en Latinoamérica (2025-2030), superando significativamente el crecimiento económico general de la región."
        },
        {
          titulo: "Poder Adquisitivo",
          descripcion: "Mercado de mascotas alcanzó USD 5,400 millones en 2024. Mexicanos gastan más en mascotas que en sí mismos, reflejando cambio en prioridades de consumo."
        },
        {
          titulo: "Premiumización",
          descripcion: "Tendencia hacia productos premium y super premium crea segmento dispuesto a pagar precios superiores por servicios especializados como genotipificación."
        },
        {
          titulo: "Sensibilidad al Precio",
          descripcion: "95.7% de mascotas sin seguro y 90% de dueños desconocen su existencia, sugiriendo barreras económicas y de información que limitan adopción de servicios especializados."
        }
      ]
    },
    {
      id: "social",
      titulo: "Factores Sociales",
      icon: Users,
      color: "text-purple-600",
      puntos: [
        {
          titulo: "Humanización de Mascotas",
          descripcion: "69.8% de hogares mexicanos tienen mascotas, con más de 43.8 millones de perros. Esta profundización de lazos humano-animal impulsa demanda de servicios de salud preventiva."
        },
        {
          titulo: "Conciencia sobre Salud Animal",
          descripcion: "Creciente adopción de planes de bienestar con exámenes anuales, prevención de pulgas y orientación nutricional. Mentalidad preventiva crea mercado receptivo para pruebas genéticas."
        },
        {
          titulo: "Cambios Demográficos",
          descripcion: "Población de mascotas creció CAGR 5.5% (2016-2021), pasando de 24.7 a 32.2 millones, superando crecimiento poblacional humano."
        },
        {
          titulo: "Brecha de Conocimiento",
          descripcion: "90% de propietarios desconocen seguros para mascotas, sugiriendo que productos especializados enfrentan desafíos de educación del mercado."
        }
      ]
    },
    {
      id: "tecnologico",
      titulo: "Factores Tecnológicos",
      icon: Cpu,
      color: "text-amber-600",
      puntos: [
        {
          titulo: "Avances en Genética Canina",
          descripcion: "Tecnologías permiten identificación de más de 350 razas y detección de múltiples enfermedades hereditarias. Empresas como Embark y Wisdom Panel mejoran continuamente precisión."
        },
        {
          titulo: "Innovación Local",
          descripcion: "Argentina lidera con caballos editados genéticamente usando CRISPR-Cas9. México desarrolla nanotecnología aplicada a mascotas con empresas como Bionag."
        },
        {
          titulo: "Laboratorios Especializados",
          descripcion: "Surgimiento de laboratorios como Amplicare Lab en México con tecnologías de vanguardia reduce dependencia de servicios internacionales."
        },
        {
          titulo: "Digitalización",
          descripcion: "Kits de prueba caseros con hisopos bucales y envío a laboratorios democratizan acceso, reduciendo barreras logísticas."
        }
      ]
    },
    {
      id: "ecologico",
      titulo: "Factores Ecológicos",
      icon: Leaf,
      color: "text-green-600",
      puntos: [
        {
          titulo: "Salud Pública y Zoonosis",
          descripcion: "Amenaza de enfermedades zoonóticas eleva importancia de vigilancia sanitaria animal. Pruebas genéticas contribuyen a salud pública y bioseguridad."
        },
        {
          titulo: "Resistencia a Antibióticos",
          descripcion: "Preocupación por resistencia lleva a regulaciones más estrictas. Pruebas genéticas que identifican sensibilidades a medicamentos permiten tratamientos precisos."
        },
        {
          titulo: "Sostenibilidad Ganadera",
          descripcion: "Pruebas genéticas contribuyen a sostenibilidad al mejorar salud de rebaños, minimizar brotes y reducir mortalidad, con implicaciones para seguridad alimentaria."
        },
        {
          titulo: "Bienestar Animal",
          descripcion: "Creciente conciencia sobre bienestar impulsa prácticas que minimizan sufrimiento. Pruebas preventivas permiten identificar y manejar enfermedades antes de causar dolor."
        }
      ]
    },
    {
      id: "legal",
      titulo: "Factores Legales",
      icon: Scale,
      color: "text-rose-600",
      puntos: [
        {
          titulo: "Marco Regulatorio",
          descripcion: "Ley Federal de Sanidad Animal y Reglamento de 2012 establecen marco legal. Pruebas genéticas deben cumplir especificaciones de calidad y ser realizadas por laboratorios autorizados."
        },
        {
          titulo: "Normas Oficiales Mexicanas",
          descripcion: "NOM-012-SAG/ZOO-2020 regula especificaciones para productos de uso animal. NOM-022-ZOO-1995 establece características zoosanitarias. Cumplimiento es obligatorio."
        },
        {
          titulo: "Protección de Datos Genéticos",
          descripcion: "Información genética plantea cuestiones sobre privacidad y propiedad de datos. Tendencia hacia mayor protección de información genética animal."
        },
        {
          titulo: "Responsabilidad Profesional",
          descripcion: "Veterinarios que recomiendan o interpretan pruebas genéticas asumen responsabilidad profesional. Solo profesionales certificados pueden interpretar resultados."
        }
      ]
    }
  ];

  return (
    <section id="pestel" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Análisis PESTEL</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evaluación completa de los factores macro-ambientales que influyen en el mercado de genotipificación canina en México y Latinoamérica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factores.map((factor) => {
              const Icon = factor.icon;
              return (
                <Card key={factor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className={`h-6 w-6 ${factor.color}`} />
                      {factor.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {factor.puntos.map((punto, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="text-sm font-medium">
                            {punto.titulo}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">
                            {punto.descripcion}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Conclusiones del Análisis PESTEL</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                El análisis PESTEL revela un entorno generalmente favorable para el desarrollo del mercado de genotipificación canina en México y Latinoamérica. Los factores económicos y sociales son particularmente positivos, con un crecimiento robusto del mercado y una creciente humanización de mascotas que impulsa la demanda de servicios especializados.
              </p>
              <p className="text-muted-foreground">
                Los avances tecnológicos y el desarrollo de capacidades locales reducen la dependencia de servicios internacionales. Sin embargo, persisten desafíos en educación del mercado, cumplimiento regulatorio y acceso en zonas rurales que deben ser abordados estratégicamente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
