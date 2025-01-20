import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, Users, Target, Lightbulb, ArrowRight } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const visionCards = [
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "Inovação Pedagógica",
    description: "Metodologias ativas e tecnologias educacionais de ponta"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Desenvolvimento Integral",
    description: "Foco em habilidades técnicas e socioemocionais"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excelência Acadêmica",
    description: "Compromisso com resultados e alto desempenho"
  }
];

const philosophyPoints = [
  "Aprendizagem personalizada e adaptativa",
  "Integração de tecnologia e métodos tradicionais",
  "Desenvolvimento de habilidades do futuro",
  "Formação de líderes e cidadãos globais"
];

const PedagogicalProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-90" />
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projeto
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"> Pedagógico</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transformando o futuro através de uma educação inovadora e personalizada
            </p>
          </motion.div>
        </section>

        {/* Vision Cards */}
        <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 grid md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-500 mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa Filosofia Educacional</h2>
              <p className="text-gray-600 mb-8">
                Acreditamos em uma educação transformadora que prepara os alunos para os desafios do século XXI, 
                combinando excelência acadêmica com desenvolvimento socioemocional.
              </p>
              <div className="space-y-6">
                {philosophyPoints.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <Lightbulb className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl"
              >
                <p className="text-2xl font-bold">15+ Anos</p>
                <p className="text-sm opacity-90">de excelência em educação</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PedagogicalProject;