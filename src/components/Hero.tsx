import { useState } from 'react';
import { LucideSquareArrowOutUpRight, ArrowRight, ArrowLeft } from "lucide-react";

const Hero = () => {
  // Estado para controlar o índice do slide atual
  const [slide, setSlide] = useState(0);

  // Array de slides contendo imagem de fundo, título e descrição
  const slides = [
    {
      backgroundImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Novo Ensino Médio',
      description: 'Descubra as oportunidades do Novo Ensino Médio e prepare-se para o futuro!',
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pré-Vestibular',
      description: 'Nossa abordagem inovadora à educação visa preparar os alunos para os desafios do futuro.',
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tecnologias exclusivas',
      description: 'Nossa comunidade é um lugar onde os alunos podem crescer, aprender e se desenvolver.',
    },
  ];

  // Função para avançar para o próximo slide
  const handleNextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Função para voltar ao slide anterior
  const handlePrevSlide = () => {
    setSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative pt-32 pb-72 container-padding text-white"
      style={{
        backgroundImage: `url(${slides[slide].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Conteúdo fixo centralizado com título e descrição */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {slides[slide].title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          {slides[slide].description}
        </p>

        {/* Botão de matrícula com redirecionamento para WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
            onClick={() => window.open('https://wa.me/99999999999', '_blank')}
          >
            Matricule-se
            <LucideSquareArrowOutUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Botão para voltar ao slide anterior */}
      <div
        className="absolute top-[59%] left-9 transform -translate-y-1/2 cursor-pointer z-10 transition duration-300 hover:-translate-x-2"
        onClick={handlePrevSlide}
      >
        <ArrowLeft className="w-8 h-8 text-white" />
      </div>

      {/* Botão para avançar ao próximo slide */}
      <div
        className="absolute top-[59%] right-9 transform -translate-y-1/2 cursor-pointer z-10 transition duration-300 hover:translate-x-2"
        onClick={handleNextSlide}
      >
        <ArrowRight className="w-8 h-8 text-white" />
      </div>

      {/* Sobreposição escura para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
