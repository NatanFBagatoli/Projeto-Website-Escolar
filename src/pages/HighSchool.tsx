import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Code, Globe, ArrowRight } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
    title: "Preparação para o Vestibular",
    description: "Material didático exclusivo e simulados periódicos"
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-600" />,
    title: "Itinerários Formativos",
    description: "Escolha sua área de interesse e aprofunde seus conhecimentos"
  },
  {
    icon: <Code className="w-8 h-8 text-orange-600" />,
    title: "Tecnologia Integrada",
    description: "Plataforma digital e recursos tecnológicos avançados"
  },
  {
    icon: <Globe className="w-8 h-8 text-orange-600" />,
    title: "Formação Global",
    description: "Desenvolvimento de habilidades socioemocionais"
  }
];

const methodologyPoints = [
  "Aulas dinâmicas e interativas",
  "Professores altamente qualificados",
  "Mentoria individualizada",
  "Projetos práticos interdisciplinares"
];

const HighSchool = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Novo
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"> Ensino Médio</span> 
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Preparando os alunos para o vestibular e o mercado de trabalho através de uma educação inovadora e personalizada
            </p>
          
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20 container-padding">
          <div className="max-w-7xl  mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white  p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-white-100  w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-zinc-100">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">Metodologia Inovadora</h2>
                <p className="text-gray-600 mb-8">
                  Nossa abordagem educacional combina métodos tradicionais comprovados com as mais recentes inovações pedagógicas, 
                  garantindo uma formação completa e alinhada com as demandas do século XXI.
                </p>
                <div className="space-y-4">
                  {methodologyPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-600" />
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="Students in classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
                >
                  <p className="text-3xl font-bold text-orange-600">98%</p>
                  <p className="text-sm text-gray-600">aprovação em vestibulares</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
       
         
      </main>
      <Footer />
    </div>
  );
};

export default HighSchool;