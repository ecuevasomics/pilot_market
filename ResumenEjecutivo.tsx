import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, DollarSign, Globe } from "lucide-react";

interface DatosMercado {
  crecimiento_mercado: {
    mexico: { años: number[]; valores: number[] };
    latinoamerica: { años: number[]; valores: number[] };
  };
  segmentos_animal: {
    labels: string[];
    mexico: number[];
    latinoamerica: number[];
  };
  hogares_mascotas: {
    labels: string[];
    valores: number[];
  };
  penetracion_mercado: {
    labels: string[];
    valores: number[];
  };
}

export default function ResumenEjecutivo() {
  const [datos, setDatos] = useState<DatosMercado | null>(null);

  useEffect(() => {
    fetch("/datos_mercado.json")
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  if (!datos) {
    return (
      <section id="resumen" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center">Cargando datos...</div>
        </div>
      </section>
    );
  }

  const crecimientoData = datos.crecimiento_mercado.mexico.años.map((año, i) => ({
    año,
    México: datos.crecimiento_mercado.mexico.valores[i],
    Latinoamérica: datos.crecimiento_mercado.latinoamerica.valores[i],
  }));

  const segmentosData = datos.segmentos_animal.labels.map((label, i) => ({
    name: label,
    value: datos.segmentos_animal.mexico[i],
  }));

  const hogaresData = datos.hogares_mascotas.labels.map((label, i) => ({
    name: label,
    value: datos.hogares_mascotas.valores[i],
  }));

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

  return (
    <section id="resumen" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Resumen Ejecutivo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              El mercado de genotipificación de enfermedades en perros presenta un crecimiento robusto en México y Latinoamérica, impulsado por la humanización de mascotas y la creciente conciencia sobre salud preventiva.
            </p>
          </div>

          {/* Métricas Clave */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mercado México 2024</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">USD 7.6M</div>
                <p className="text-xs text-muted-foreground">
                  Proyección 2030: USD 12.9M
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CAGR México</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">9.2%</div>
                <p className="text-xs text-muted-foreground">
                  2025-2030
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hogares con Mascotas</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">69.8%</div>
                <p className="text-xs text-muted-foreground">
                  México (INEGI)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mercado LATAM 2030</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">USD 45.6M</div>
                <p className="text-xs text-muted-foreground">
                  CAGR 8.4%
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico de Crecimiento */}
          <Card>
            <CardHeader>
              <CardTitle>Proyección de Crecimiento del Mercado</CardTitle>
              <CardDescription>
                Evolución del mercado de pruebas de ADN para mascotas (2024-2030)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={crecimientoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="año" />
                  <YAxis label={{ value: "USD Millones", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="México"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Latinoamérica"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Gráficos de Segmentación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Segmentación por Tipo de Animal</CardTitle>
                <CardDescription>Distribución del mercado en México</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={segmentosData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {segmentosData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Penetración de Mascotas en Hogares</CardTitle>
                <CardDescription>México (INEGI)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={hogaresData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {hogaresData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Hallazgos Clave */}
          <Card>
            <CardHeader>
              <CardTitle>Hallazgos Clave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Oportunidades</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mercado en rápido crecimiento (CAGR 8-9%)</li>
                    <li>• Alta penetración de mascotas (69.8% hogares)</li>
                    <li>• Tendencia de humanización de mascotas</li>
                    <li>• Solo 4.3% de mascotas con seguro (oportunidad)</li>
                    <li>• 43.8 millones de perros en México</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Desafíos</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 90% desconoce servicios especializados</li>
                    <li>• Competencia de empresas internacionales</li>
                    <li>• Sensibilidad al precio en segmentos masivos</li>
                    <li>• Necesidad de educación del mercado</li>
                    <li>• Infraestructura limitada en zonas rurales</li>
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
