import { useState } from 'react';
import { LucideSquareArrowOutUpRight, ArrowRight, ArrowLeft } from "lucide-react";

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      backgroundImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Novo Ensino Médio.',
      description: 'Descubra as oportunidades do Novo Ensino Médio e prepare-se para o futuro!',
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Destaques do Pré-Vestibular',
      description: 'Nossa abordagem inovadora à educação visa preparar os alunos para os desafios do futuro.',
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tecnologias exclusivas',
      description: 'Nossa comunidade de aprendizado é um lugar onde os alunos podem crescer, aprender e se desenvolver.',
    },
  ];

  const handleNextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

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
        minHeight: '100vh', // Garante altura uniforme para os slides
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Conteúdo centralizado */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {slides[slide].title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {slides[slide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
            onClick={() => window.open('https://wa.me/554796281694', '_blank')}
          >
            Matricule-se
            <LucideSquareArrowOutUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Botão para o slide anterior */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 transition duration-300 hover:-translate-x-2"
        onClick={handlePrevSlide}
      >
        <ArrowLeft className="w-8 h-8 text-white" />
      </div>

      {/* Botão para o próximo slide */}
      <div  
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 transition duration-300 hover:translate-x-2"
        onClick={handleNextSlide}
      >
        <ArrowRight className="w-8 h-8 text-white" />
      </div>

      {/* Sobreposição para melhorar o contraste do texto */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
