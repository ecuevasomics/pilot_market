import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BusinessModelCanvas() {
  const bmcSections = [
    {
      id: "segmentos",
      titulo: "Segmentos de Clientes",
      color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200",
      items: [
        {
          subtitulo: "Propietarios Premium",
          descripcion: "Ingresos medios-altos dispuestos a invertir en salud preventiva de alta calidad"
        },
        {
          subtitulo: "Propietarios de Razas Específicas",
          descripcion: "Dueños de razas puras que buscan verificar autenticidad y predisposiciones genéticas"
        },
        {
          subtitulo: "Adoptantes de Perros Mestizos",
          descripcion: "Propietarios que adoptaron y desean conocer composición de razas y características"
        },
        {
          subtitulo: "Criadores Profesionales",
          descripcion: "Segmento B2B que requiere verificación de linajes y evitar enfermedades hereditarias"
        },
        {
          subtitulo: "Veterinarios y Clínicas",
          descripcion: "Profesionales que recomiendan pruebas como parte de planes de bienestar"
        }
      ]
    },
    {
      id: "propuesta",
      titulo: "Propuesta de Valor",
      color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200",
      items: [
        {
          subtitulo: "Tranquilidad y Prevención",
          descripcion: "Identificación temprana de predisposiciones a enfermedades, reduciendo costos futuros"
        },
        {
          subtitulo: "Conocimiento Profundo",
          descripcion: "Comprensión detallada de razas, rasgos físicos y comportamentales para cuidado personalizado"
        },
        {
          subtitulo: "Nutrición Personalizada",
          descripcion: "Recomendaciones basadas en genética para optimizar dieta y ejercicio"
        },
        {
          subtitulo: "Sensibilidad a Medicamentos",
          descripcion: "Identificación de variantes genéticas (MDR1) que causan reacciones adversas"
        },
        {
          subtitulo: "Mejora de Programas de Cría",
          descripcion: "Para criadores: selección informada de reproductores y certificación de cachorros"
        }
      ]
    },
    {
      id: "canales",
      titulo: "Canales",
      color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200",
      items: [
        {
          subtitulo: "Directo al Consumidor (D2C)",
          descripcion: "E-commerce, app móvil, redes sociales y marketplaces (Amazon, Mercado Libre)"
        },
        {
          subtitulo: "A través de Veterinarios (B2B2C)",
          descripcion: "Programas de referencia, integración en planes de bienestar, educación profesional"
        },
        {
          subtitulo: "Criadores y Asociaciones (B2B)",
          descripcion: "Programas corporativos, descuentos por volumen, presencia en exposiciones caninas"
        },
        {
          subtitulo: "Alianzas Estratégicas",
          descripcion: "Compañías de seguros, tiendas de mascotas, marcas de alimentos premium"
        }
      ]
    },
    {
      id: "relaciones",
      titulo: "Relaciones con Clientes",
      color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200",
      items: [
        {
          subtitulo: "Educación Continua",
          descripcion: "Contenido sobre genética canina, blogs, videos, infografías y newsletters"
        },
        {
          subtitulo: "Soporte Personalizado",
          descripcion: "Atención al cliente, chat en vivo, consultas con genetistas veterinarios"
        },
        {
          subtitulo: "Comunidad de Usuarios",
          descripcion: "Plataforma donde propietarios comparten experiencias y conectan con otros dueños"
        },
        {
          subtitulo: "Actualizaciones de Base de Datos",
          descripcion: "Notificaciones cuando nuevas investigaciones proporcionan información adicional"
        },
        {
          subtitulo: "Transparencia y Confianza",
          descripcion: "Comunicación clara sobre limitaciones, precisión y actualizaciones científicas"
        }
      ]
    },
    {
      id: "ingresos",
      titulo: "Fuentes de Ingresos",
      color: "bg-rose-50 dark:bg-rose-950/20 border-rose-200",
      items: [
        {
          subtitulo: "Kits de Identificación de Razas",
          descripcion: "USD 60-80 - Kit básico que identifica composición de razas"
        },
        {
          subtitulo: "Kits de Salud y Enfermedades",
          descripcion: "USD 100-150 - Detección de predisposiciones a enfermedades hereditarias"
        },
        {
          subtitulo: "Kit Premium Completo",
          descripcion: "USD 150-200 - Integral con razas, salud, rasgos y recomendaciones personalizadas"
        },
        {
          subtitulo: "Suscripciones de Monitoreo",
          descripcion: "USD 50-80/año - Actualizaciones de base de datos y consultas ilimitadas"
        },
        {
          subtitulo: "Servicios B2B para Criadores",
          descripcion: "USD 80-120 por prueba en paquetes de 10+ con descuentos por volumen"
        },
        {
          subtitulo: "Servicios Complementarios",
          descripcion: "Asesoramiento genético (USD 50-100), nutrición personalizada, reportes para seguros"
        }
      ]
    },
    {
      id: "recursos",
      titulo: "Recursos Clave",
      color: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200",
      items: [
        {
          subtitulo: "Laboratorio de Genotipificación",
          descripcion: "Equipamiento de secuenciación, PCR, microarrays. Inversión: USD 500K-1M"
        },
        {
          subtitulo: "Base de Datos Genética",
          descripcion: "Repositorio de perfiles genéticos de referencia para razas y marcadores de enfermedades"
        },
        {
          subtitulo: "Plataforma Digital",
          descripcion: "Sitio web, app móvil y sistema de gestión. Desarrollo: USD 100K-200K"
        },
        {
          subtitulo: "Genetistas Veterinarios",
          descripcion: "Profesionales con doctorado/maestría para desarrollo de pruebas e interpretación"
        },
        {
          subtitulo: "Certificaciones y Licencias",
          descripcion: "Cumplimiento NOM-012-SAG/ZOO-2020, registro SENASICA, certificaciones ISO/GLP"
        }
      ]
    },
    {
      id: "actividades",
      titulo: "Actividades Clave",
      color: "bg-teal-50 dark:bg-teal-950/20 border-teal-200",
      items: [
        {
          subtitulo: "Investigación y Desarrollo",
          descripcion: "Expansión de base de datos con poblaciones caninas latinoamericanas"
        },
        {
          subtitulo: "Procesamiento de Muestras",
          descripcion: "Recepción, extracción de ADN, secuenciación, análisis. Capacidad: 500-1,000/mes"
        },
        {
          subtitulo: "Marketing y Educación",
          descripcion: "Campañas de concienciación, educación de veterinarios, generación de contenido"
        },
        {
          subtitulo: "Gestión de Calidad",
          descripcion: "Validación de pruebas, control de calidad externo, auditorías internas"
        },
        {
          subtitulo: "Desarrollo de Alianzas",
          descripcion: "Negociación con veterinarios, clínicas, criadores, aseguradoras y distribuidores"
        }
      ]
    },
    {
      id: "asociaciones",
      titulo: "Asociaciones Clave",
      color: "bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200",
      items: [
        {
          subtitulo: "Proveedores de Tecnología",
          descripcion: "Illumina, Thermo Fisher, Qiagen para equipamiento y reactivos"
        },
        {
          subtitulo: "Instituciones Académicas",
          descripcion: "UNAM, Universidad de Buenos Aires para investigación y validación"
        },
        {
          subtitulo: "Organizaciones Veterinarias",
          descripcion: "Colegios y federaciones para endorsement y acceso a red de veterinarios"
        },
        {
          subtitulo: "Empresas de Logística",
          descripcion: "DHL, FedEx, Estafeta para envío confiable de kits y muestras"
        },
        {
          subtitulo: "Compañías de Seguros",
          descripcion: "Integración de pruebas genéticas en pólizas y co-marketing"
        }
      ]
    },
    {
      id: "costos",
      titulo: "Estructura de Costos",
      color: "bg-orange-50 dark:bg-orange-950/20 border-orange-200",
      items: [
        {
          subtitulo: "Costos Variables por Prueba",
          descripcion: "USD 30-50 (reactivos USD 15-25, kit USD 2-5, envío USD 5-10, comisiones 20-30%)"
        },
        {
          subtitulo: "Personal",
          descripcion: "USD 30K-50K/mes para equipo de 10-15 personas (genetistas, técnicos, marketing)"
        },
        {
          subtitulo: "Instalaciones y Laboratorio",
          descripcion: "USD 5K-10K/mes para renta, servicios y mantenimiento"
        },
        {
          subtitulo: "Marketing y Publicidad",
          descripcion: "USD 10K-20K/mes para campañas digitales, contenido y eventos"
        },
        {
          subtitulo: "Investigación y Desarrollo",
          descripcion: "USD 10K-15K/mes para expansión de base de datos y nuevas pruebas"
        },
        {
          subtitulo: "Punto de Equilibrio",
          descripcion: "~1,360 pruebas/mes (45/día) con precio promedio USD 120 y margen 58%"
        }
      ]
    }
  ];

  return (
    <section id="bmc" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Business Model Canvas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modelo de negocio completo para servicios de genotipificación de enfermedades en perros en México y Latinoamérica.
            </p>
          </div>

          <Tabs defaultValue="segmentos" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 h-auto">
              {bmcSections.map((section) => (
                <TabsTrigger key={section.id} value={section.id} className="text-xs md:text-sm">
                  {section.titulo.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {bmcSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="mt-6">
                <Card className={section.color}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{section.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="font-semibold text-lg">{item.subtitulo}</h4>
                          <p className="text-muted-foreground">{item.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Vista de Cuadrícula BMC */}
          <Card>
            <CardHeader>
              <CardTitle>Vista Integrada del Modelo de Negocio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bmcSections.map((section) => (
                  <Card key={section.id} className={`${section.color} hover:shadow-md transition-shadow`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-semibold">{section.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {section.items.slice(0, 3).map((item, idx) => (
                          <li key={idx}>• {item.subtitulo}</li>
                        ))}
                        {section.items.length > 3 && (
                          <li className="text-primary font-medium">+ {section.items.length - 3} más</li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Métricas Clave */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
            <CardHeader>
              <CardTitle>Métricas Clave de Desempeño (KPIs)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">CAC (Costo de Adquisición)</h4>
                  <p className="text-2xl font-bold">USD 30-50</p>
                  <p className="text-xs text-muted-foreground">Por cliente nuevo</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">LTV (Valor de Vida)</h4>
                  <p className="text-2xl font-bold">USD 200-300</p>
                  <p className="text-xs text-muted-foreground">1.5-2 pruebas + suscripción</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Ratio LTV/CAC</h4>
                  <p className="text-2xl font-bold">&gt; 3</p>
                  <p className="text-xs text-muted-foreground">Objetivo de eficiencia</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Margen Bruto</h4>
                  <p className="text-2xl font-bold">50-60%</p>
                  <p className="text-xs text-muted-foreground">Después de costos variables</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
