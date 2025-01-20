const stats = [
  {
    value: "98%",
    label: "Taxa de Graduação",
  },
  {
    value: "15:1",
    label: "Relação Aluno-Professor",
  },
  {
    value: "50+",
    label: "Programas",
  },
  {
    value: "100%",
    label: "Aceitação em Universidades",
  },
];

const Stats = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto glass-card rounded-xl p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;