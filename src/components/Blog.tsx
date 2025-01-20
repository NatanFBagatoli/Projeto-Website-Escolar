const blogPosts = [
  {
    title: "Histórias de Sucesso dos Alunos: Turma de 2024",
    image: "https://cdn.discordapp.com/attachments/1304857129055817809/1330576158533877861/image.png?ex=678e7b1d&is=678d299d&hm=6fa6c9c31b865d50b360d39f19e283fc9920ae4ef1e6433661df1eb6637888f6&",
    date: "16 de março de 2024",
    readTime: "5 min de leitura"
  },
  {
    title: "Nova Sala de Laboratório STEM será inaugurada neste outono",
    image: "https://cdn.discordapp.com/attachments/1304857129055817809/1330351758622326794/image.png?ex=678e52df&is=678d015f&hm=1058ef3d4ee9d439208bcfe2eee9d12bffb06044bb79e7b94ec78d4bf639ce46&",
    date: "15 de março de 2024",
    readTime: "3 min de leitura"
  },
  {
    title: "Destaques do Programa de Intercâmbio Internacional",
    image: "https://cdn.discordapp.com/attachments/1304857129055817809/1330351810875101255/image.png?ex=678e52ec&is=678d016c&hm=87beffcb72ec830dabee8bacf99e214024508f3cb4bf6958e6bd95d3a39d0646&",
    date: "14 de março de 2024",
    readTime: "4 min de leitura"
  }
];

const Blog = () => {
  return (
    <section className="py-16  container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Notícias e Atualizações da Escola
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-black mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;