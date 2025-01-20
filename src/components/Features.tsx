import { GraduationCap, Users, Globe, BookOpen } from "lucide-react";

const features = [
  {
    title: "Excelência na Educação",
    description: "Programas acadêmicos rigorosos, projetados para desafiar e inspirar os alunos a alcançar seu pleno potencial.",
    icon: GraduationCap,
  },
  {
    title: "Corpo Docente Especializado",
    description: "Aprenda com educadores experientes, dedicados a fomentar o crescimento intelectual e a criatividade.",
    icon: Users,
  },
  {
    title: "Perspectiva Global",
    description: "Programas internacionais e uma comunidade diversificada que promovem a compreensão cultural e a consciência global.",
    icon: Globe,
  },
  {
    title: "Currículo Abrangente",
    description: "Ampla variedade de disciplinas e atividades extracurriculares para um desenvolvimento completo.",
    icon: BookOpen,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          
Por que Escolher Nossa Escola?
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto">
        Descubra as vantagens únicas que diferenciam nossa instituição e preparam os alunos para o sucesso.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className=" p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;