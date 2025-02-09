import Header from "../components/Header";
import Footer from "../components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Trophy, GraduationCap, Award, Target, Brain, Star } from 'lucide-react';

const admissionsData = [
  { year: '2020', admissões: 60, meta: 55 },
  { year: '2021', admissões: 75, meta: 70 },
  { year: '2022', admissões: 80, meta: 75 },
  { year: '2023', admissões: 95, meta: 85 },
];

const universityData = [
  { name: 'UDESC', value: 45, color: '#FF6B6B' },
  { name: 'UFSC', value: 50, color: '#4ECDC4' },
  { name: 'ENEM', value: 60, color: '#45B7D1' },
  { name: 'IFSC', value: 55, color: '#96CEB4' },
];



const Results = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-primary">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
          </div>
          <div className="container-padding relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  Nossa <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">Excelência</span> em Números
                </h1>
                <p className="text-xl text-neutral-200 mb-12 max-w-2xl mx-auto">
                  Resultados que comprovam nossa metodologia e o comprometimento com o sucesso dos nossos alunos.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: <Trophy className="w-8 h-8" />, number: "95%", label: "Taxa de Aprovação" },
                    { icon: <GraduationCap className="w-8 h-8" />, number: "210+", label: "Aprovados em 2023" },
                    { icon: <Award className="w-8 h-8" />, number: "15", label: "Anos de Excelência" },
                    { icon: <Star className="w-8 h-8" />, number: "1450", label: "Média SAT" }
                  ].map((stat, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                      <div className="text-orange-400 mb-3 flex justify-center">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-neutral-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="py-16 container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Admissions Trend */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Target className="w-6 h-6 text-orange-500 mr-2" />
                  Evolução das Admissões
                </h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={admissionsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip />
                      <Line type="monotone" dataKey="admissões" stroke="#FF6B6B" strokeWidth={2} />
                      <Line type="monotone" dataKey="meta" stroke="#4ECDC4" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* University Distribution */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Brain className="w-6 h-6 text-orange-500 mr-2" />
                  Distribuição por Universidade
                </h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={universityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {universityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {universityData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-neutral-600">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Desempenho Acadêmico",
                  icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
                  metrics: [
                    "98% de aprovação em vestibulares",
                    "95% de aprovação em exames supletivos",
                    "Pontuação média no SAT: 1450",
                    "15 bolsistas de mérito nacional"
                  ]
                },
                {
                  title: "Conquistas 2023",
                  icon: <Trophy className="w-6 h-6 text-orange-500" />,
                  metrics: [
                    "1º lugar em Olimpíadas de Matemática",
                    "Top 3 em aprovações UFSC",
                    "Melhor índice de aprovação ENEM",
                    "Prêmio Destaque em Educação"
                  ]
                },
                {
                  title: "Metas Alcançadas",
                  icon: <Target className="w-6 h-6 text-orange-500" />,
                  metrics: [
                    "Superação da meta de aprovações",
                    "Aumento de 20% em bolsas",
                    "100% dos alunos aprovados",
                    "Expansão do programa de mentoria"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </h3>
                  <ul className="space-y-3">
                    {section.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
      </main>
      <Footer />
    </div>
  );
};

export default Results;