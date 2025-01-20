import Header from "../components/Header";
import Footer from "../components/Footer";
import { GraduationCap, BookOpen, Target, Users, Award, Brain } from 'lucide-react';

const PreUniversity = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section with Parallax Effect */}
        <section className="relative py-24 overflow-hidden bg-primary">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
          </div>
          <div className="container-padding relative">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  Prepare-se para o <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">Futuro</span>
                </h1>
                <p className="text-xl text-neutral-200 mb-8 max-w-2xl">
                  Preparação especializada para o ENEM e principais vestibulares com metodologia comprovada e resultados excepcionais.
                </p>
               
             
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white container-padding">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Taxa de Aprovação" },
              { number: "1500+", label: "Alunos Aprovados" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "100%", label: "Dedicação" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 container-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossa Metodologia</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
                  title: "Preparação Completa",
                  description: "Material didático exclusivo e aulas direcionadas para cada exame.",
                  features: ["Apostilas exclusivas", "Simulados periódicos", "Revisões estratégicas"]
                },
                {
                  icon: <Target className="w-8 h-8 text-orange-500" />,
                  title: "Foco no Resultado",
                  description: "Metodologia comprovada com alto índice de aprovação.",
                  features: ["Monitoramento de desempenho", "Metas individuais", "Feedback constante"]
                },
                {
                  icon: <Brain className="w-8 h-8 text-orange-500" />,
                  title: "Desenvolvimento Cognitivo",
                  description: "Técnicas avançadas de aprendizado e memorização.",
                  features: ["Mapas mentais", "Técnicas de memorização", "Gestão do tempo"]
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-orange-500" />,
                  title: "Material Premium",
                  description: "Conteúdo atualizado e alinhado com os principais vestibulares.",
                  features: ["Videoaulas", "Exercícios resolvidos", "Material digital"]
                },
                {
                  icon: <Users className="w-8 h-8 text-orange-500" />,
                  title: "Suporte Personalizado",
                  description: "Acompanhamento individual do progresso acadêmico.",
                  features: ["Mentoria individual", "Plantão de dúvidas", "Orientação vocacional"]
                },
                {
                  icon: <Award className="w-8 h-8 text-orange-500" />,
                  title: "Histórico de Sucesso",
                  description: "Milhares de alunos aprovados nas melhores universidades.",
                  features: ["Cases de sucesso", "Networking", "Comunidade ativa"]
                }
              ].map((feature, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-neutral-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                        {item}
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

export default PreUniversity;
