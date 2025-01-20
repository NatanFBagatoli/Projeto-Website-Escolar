import React from 'react';
import { motion } from 'framer-motion';
import { FlaskRound as Flask, Cpu, Microscope, Notebook as Robot, Rocket, Code, Lightbulb, Laptop } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const facilities = [
  {
    title: "Laboratório de Ciências",
    icon: <Flask className="w-6 h-6 " />,
    image: "https://images-ext-1.discordapp.net/external/Mg5QSbrV0QfixZeJEQkICiPZEFHVKvgkPwCuCd5F98E/%3Fw%3D500%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8QVJEVUlOT3xlbnwwfHwwfHx8MA%253D%253D/https/images.unsplash.com/photo-1555664424-778a1e5e1b48?format=webp",
    description: "Equipamentos de última geração para experimentos práticos",
    features: [
      { icon: <Microscope />, text: "Microscópios avançados" },
      { icon: <Flask />, text: "Equipamentos de química" },
      { icon: <Lightbulb />, text: "Área de experimentação" }
    ]
  },
  {
    title: "Centro de Tecnologia",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ambiente moderno para desenvolvimento tecnológico",
    features: [
      { icon: <Laptop />, text: "Computadores de alta performance" },
      { icon: <Robot />, text: "Laboratório de robótica" },
      { icon: <Code />, text: "Estações de programação" }
    ]
  }
];

const Labs = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517055729445-fa7d27394b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QVJEVUlOT3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-10" />
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
                  <Rocket className="w-12 h-12 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Laboratórios e
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"> Estrutura</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Explore nossas instalações de última geração projetadas para impulsionar o aprendizado prático e a inovação.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 rounded-lg text-orange-600 bg-orange-500/20 backdrop-blur-sm">
                            {facility.icon}
                          </div>
                          <h2 className="text-2xl font-bold text-white">{facility.title}</h2>
                        </div>
                        <p className="text-white">{facility.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid gap-4">
                        {facility.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                            className="flex items-center space-x-3 text-black"
                          >
                            <div className="p-2 rounded-lg text-orange-500 bg-orange-500/20">
                              {feature.icon}
                            </div>
                            <span>{feature.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h2 className="text-3xl font-bold text-black mb-8">
                Recursos Adicionais
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Laptop className="w-8 h-8 " />,
                    title: "Equipamentos Modernos",
                    description: "Tecnologia de ponta para um aprendizado eficiente"
                  },
                  {
                    icon: <Robot className="w-8 h-8" />,
                    title: "Robótica Avançada",
                    description: "Laboratório especializado em robótica e automação"
                  },
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "Desenvolvimento",
                    description: "Ambiente propício para criação e inovação"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-black">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Labs;