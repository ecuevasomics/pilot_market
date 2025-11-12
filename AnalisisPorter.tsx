import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";
import { Shield, Users, Package, ShoppingCart, Repeat } from "lucide-react";

interface DatosMercado {
  fuerzas_porter: {
    [key: string]: number;
  };
}

export default function AnalisisPorter() {
  const [datos, setDatos] = useState<DatosMercado | null>(null);

  useEffect(() => {
    fetch("/datos_mercado.json")
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  const fuerzas = [
    {
      id: "rivalidad",
      titulo: "Rivalidad entre Competidores",
      icon: Shield,
      nivel: "ALTA",
      color: "text-rose-600",
      descripcion: "Competencia intensa de empresas internacionales como Embark y Wisdom Panel con recursos significativos.",
      puntos: [
        "Empresas internacionales bien financiadas (Embark, Wisdom Panel/Mars)",
        "Diferenciación limitada en productos básicos",
        "Bajos costos de cambio para consumidores",
        "Mercado en crecimiento reduce intensidad parcialmente",
        "Competidores locales emergentes (ADN Center, Amplicare Lab)"
      ]
    },
    {
      id: "nuevos",
      titulo: "Amenaza de Nuevos Entrantes",
      icon: Users,
      nivel: "MEDIA",
      color: "text-amber-600",
      descripcion: "Barreras moderadas por inversión en tecnología y marca, pero el crecimiento del mercado atrae nuevos participantes.",
      puntos: [
        "Inversión significativa en equipamiento y bases de datos",
        "Ventajas tecnológicas de empresas establecidas",
        "Regulaciones de SENASICA crean barreras administrativas",
        "Marketing directo al consumidor reduce barreras de distribución",
        "Respuesta agresiva probable de competidores establecidos"
      ]
    },
    {
      id: "proveedores",
      titulo: "Poder de Proveedores",
      icon: Package,
      nivel: "MEDIO-BAJO",
      color: "text-emerald-600",
      descripcion: "Mercado de proveedores fragmentado con múltiples alternativas reduce su poder de negociación.",
      puntos: [
        "Proveedores de equipamiento fragmentados (Thermo Fisher, Illumina)",
        "Alternativas disponibles para mayoría de componentes",
        "Estandarización de tecnologías reduce dependencia",
        "Integración vertical de empresas grandes reduce dependencia",
        "Costos de cambio variables según tipo de insumo"
      ]
    },
    {
      id: "compradores",
      titulo: "Poder de Compradores",
      icon: ShoppingCart,
      nivel: "MEDIO-ALTO",
      color: "text-blue-600",
      descripcion: "Sensibilidad al precio y bajos costos de cambio otorgan poder significativo a compradores.",
      puntos: [
        "Alta sensibilidad al precio en segmentos masivos",
        "Bajos costos de cambio entre proveedores",
        "Naturaleza opcional del servicio",
        "Transparencia de información por internet",
        "Percepción de baja diferenciación entre productos"
      ]
    },
    {
      id: "sustitutos",
      titulo: "Amenaza de Sustitutos",
      icon: Repeat,
      nivel: "MEDIA",
      color: "text-purple-600",
      descripcion: "Existen alternativas tradicionales, pero las pruebas genéticas ofrecen valor único en prevención.",
      puntos: [
        "Diagnóstico clínico tradicional como alternativa",
        "Evaluación fenotípica para identificación de razas",
        "Historial familiar y pedigrí para criadores",
        "Seguros para mascotas como alternativa preventiva",
        "Tendencia hacia medicina preventiva reduce amenaza"
      ]
    }
  ];

  const radarData = datos
    ? Object.entries(datos.fuerzas_porter).map(([key, value]) => ({
        fuerza: key,
        intensidad: value,
      }))
    : [];

  return (
    <section id="porter" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Análisis de las 5 Fuerzas de Porter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evaluación de la intensidad competitiva y atractivo del mercado de genotipificación canina.
            </p>
          </div>

          {/* Gráfico Radar */}
          {datos && (
            <Card>
              <CardHeader>
                <CardTitle>Intensidad de las Fuerzas Competitivas</CardTitle>
                <CardDescription>
                  Escala de 0 (baja) a 10 (alta intensidad)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="fuerza" />
                    <PolarRadiusAxis angle={90} domain={[0, 10]} />
                    <Radar
                      name="Intensidad"
                      dataKey="intensidad"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Detalle de Fuerzas */}
          <div className="grid grid-cols-1 gap-6">
            {fuerzas.map((fuerza) => {
              const Icon = fuerza.icon;
              return (
                <Card key={fuerza.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-8 w-8 ${fuerza.color}`} />
                        <div>
                          <CardTitle className="text-xl">{fuerza.titulo}</CardTitle>
                          <CardDescription className="mt-1">{fuerza.descripcion}</CardDescription>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${fuerza.color} bg-current/10`}>
                        {fuerza.nivel}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fuerza.puntos.map((punto, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{punto}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Conclusión */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle>Conclusión del Análisis de Porter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                El mercado presenta una <strong>intensidad competitiva moderada-alta</strong>. La combinación de alta rivalidad entre competidores existentes y medio-alto poder de negociación de compradores crea presión sobre márgenes y requiere diferenciación efectiva.
              </p>
              <p className="text-muted-foreground">
                Las oportunidades se encuentran en el crecimiento robusto del mercado (CAGR 8-9%), la tendencia de humanización de mascotas y el desarrollo de capacidades locales. Los desafíos principales incluyen la competencia de empresas internacionales bien establecidas, la sensibilidad al precio de consumidores y la necesidad de educación del mercado.
              </p>
              <div className="mt-6 p-4 bg-background rounded-lg border">
                <h4 className="font-semibold mb-3">Estrategias Recomendadas:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Diferenciación:</strong> Desarrollar propuestas de valor únicas basadas en servicio local y bases de datos regionales</li>
                  <li>• <strong>Educación:</strong> Invertir en programas educativos para veterinarios y propietarios</li>
                  <li>• <strong>Alianzas:</strong> Establecer relaciones con veterinarios, clínicas y criadores como canales de referencia</li>
                  <li>• <strong>Precio:</strong> Desarrollar modelos de precio accesibles o financiamiento para expandir mercado</li>
                  <li>• <strong>Tecnología:</strong> Invertir en investigación local para mejorar precisión en poblaciones caninas latinoamericanas</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
