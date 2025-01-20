import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Code, Cpu, Palette } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Robótica",
    description: "Desenvolvimento de projetos com tecnologia de ponta"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programação",
    description: "Aprendizado de linguagens e lógica de programação"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design",
    description: "Criação e prototipagem de soluções inovadoras"
  }
];

const CultureMaker = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 flex justify-center"
              >
                <div className="p-4 rounded-full bg-orange-500/20 backdrop-blur-sm">
                  <Lightbulb className="w-12 h-12 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Culture
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"> Maker</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Transformando ideias em realidade através da tecnologia, criatividade e inovação.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center mb-4 text-orange-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <Rocket className="w-8 h-8 text-orange-400 mr-4" />
                  <h2 className="text-2xl font-bold text-black">Criatividade & Inovação</h2>
                </div>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Espaço Maker e Robótica</h3>
                    <p>Um ambiente para a criação de soluções inovadoras, com o uso de robótica e ferramentas de prototipagem, incentivando o pensamento crítico e o design thinking.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Projetos Interdisciplinares</h3>
                    <p>Desenvolvimento de projetos que conectam diferentes áreas do conhecimento, promovendo a troca de ideias e habilidades entre os alunos.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-orange-400 mr-4" />
                  <h2 className="text-2xl font-bold text-black">Colaboração & Aprendizado Prático</h2>
                </div>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Laboratórios Criativos</h3>
                    <p>Oficinas de robótica, design e tecnologia para transformar ideias em realidade.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Festivais de Inovação</h3>
                    <p>Eventos para apresentar e celebrar os resultados dos projetos criativos realizados pelos alunos.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CultureMaker;