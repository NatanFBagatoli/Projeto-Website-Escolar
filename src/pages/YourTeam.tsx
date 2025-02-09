import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Sparkles, GraduationCap } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const team = [
  {
    name: "Nome",
    role: "Cargo",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    bio: "Biografia",
    expertise: ["Matemática", "Física", "Química"],
    achievements: ["10+ anos de experiência", "Mestrado em Educação"],
    socialLinks: {
      linkedin: "#",
      email: "mailto:example@acesso.edu.br"
    }
  },
  {
    name: "Nome",
    role: "Cargo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    bio: "Biografia",
    expertise: ["Literatura", "Redação", "História"],
    achievements: ["15+ anos de experiência", "Doutorado em Literatura"],
    socialLinks: {
      linkedin: "#",
      email: "mailto:example@acesso.edu.br"
    }
  },
  {
    name: "Nome",
    role: "Cargo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    bio: "Biografia",
    expertise: ["Biologia", "Geografia", "Inglês"],
    achievements: ["12+ anos de experiência", "Especialização em Ensino"],
    socialLinks: {
      linkedin: "#",
      email: "mailto:example@acesso.edu.br"
    }
  }
];

const YourTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
 

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "20+", label: "Professores" },
    { icon: <Sparkles className="w-6 h-6" />, value: "15+", label: "Anos de Experiência" },
    { icon: <GraduationCap className="w-6 h-6" />, value: "98%", label: "Aprovação" }
  ];

  return (
    <div className="min-h-screen ">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold  text-white mb-6">
                Nossa Equipe de
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"> Especialistas</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Conheça os profissionais dedicados que fazem a diferença na educação dos nossos alunos todos os dias.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                  >
                    <div className="flex justify-center mb-4 text-orange-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="relative mb-6">
                      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-orange-400/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-orange-600 mb-2">{member.name}</h3>
                      <p className="text-black mb-4">{member.role}</p>
                      <p className="text-black-400 line-clamp-3">{member.bio}</p>
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {member.expertise.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-800 text-white rounded-2xl p-8 max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedMember(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-40 h-40 rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedMember.name}</h2>
                  <p className="text-orange-400 mb-4">{selectedMember.role}</p>
                  <p className="text-gray-300 mb-6">{selectedMember.bio}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill, index) => (
                          <span key={index} className="bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Conquistas</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default YourTeam;