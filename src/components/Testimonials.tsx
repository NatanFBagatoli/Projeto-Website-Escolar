const testimonials = [
  {
    quote: "Os professores dedicados e o currículo diversificado ajudaram a moldar minha jornada acadêmica de maneiras que eu nunca imaginei ser possível.",
    author: "Sarah Chen",
    role: "Turma de 2023",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "As oportunidades de crescimento, tanto acadêmico quanto pessoal, são incomparáveis. Sou grato pelo meu tempo aqui.",
    author: "Mark Thompson",
    role: "Aluno Atual",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "A comunidade acolhedora e os excelentes recursos me prepararam bem para meus estudos universitários e para o mercado de trabalho.",
    author: "Elena Rodriguez",
    role: "Ex-aluna",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16  container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Depoimentos dos Alunos
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto">
        Confira o que nossos alunos e ex-alunos têm a dizer sobre suas experiências.  
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-black mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-black">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;