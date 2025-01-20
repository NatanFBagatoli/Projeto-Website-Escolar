import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar as CustomCalendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, Clock, MapPin, Users, Tag, ChevronRight, Calendar as CalendarIcon, Trophy, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Feira de Profissões 2024",
    date: "2024-03-25",
    time: "14:00",
    location: "Campus Principal",
    category: "Orientação Profissional",
    description: "Encontro com profissionais de diversas áreas para orientação de carreira.",
    capacity: 200,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Workshop de Redação ENEM",
    date: "2024-04-10",
    time: "15:30",
    location: "Auditório Central",
    category: "Preparatório",
    description: "Técnicas avançadas para conquistar nota máxima na redação do ENEM.",
    capacity: 150,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Simulado Geral",
    date: "2024-05-15",
    time: "08:00",
    location: "Todas as Unidades",
    category: "Avaliação",
    description: "Simulado completo nos moldes do ENEM e principais vestibulares.",
    capacity: 500,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Palestra: Medicina UFSC",
    date: "2024-06-20",
    time: "19:00",
    location: "Auditório Principal",
    category: "Palestra",
    description: "Bate-papo com estudantes de medicina aprovados na UFSC.",
    capacity: 180,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const featuredEvents = [
  {
    title: "Aulão de Véspera ENEM",
    date: "15 de Outubro, 2024",
    description: "Revisão intensiva de todas as matérias com os melhores professores."
  },
  {
    title: "Maratona de Exercícios",
    date: "20 de Setembro, 2024",
    description: "12 horas de resolução de exercícios com correção em tempo real."
  }
];

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="min-h-screen ">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-primary">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
          </div>
          <div className="container-padding relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  Eventos <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">Imperdíveis</span>
                </h1>
                <p className="text-xl text-neutral-200 mb-12 max-w-2xl mx-auto">
                  Participe de experiências únicas que transformarão sua jornada acadêmica
                </p>
                {/* Featured Events Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {featuredEvents.map((event, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                      <Trophy className="w-8 h-8 text-orange-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-neutral-300 mb-3">{event.date}</p>
                      <p className="text-neutral-400">{event.description}</p>
                      <div className="mt-4 flex items-center text-orange-400 group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-medium">Saiba mais</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid Section */}
        <section className="py-16 container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendar Column */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-lg text-black p-6 rounded-2xl shadow-lg sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <CalendarIcon className="w-6 h-6 text-orange-500 mr-2" />
                    Calendário
                  </h2>
                  <div className="mb-6">
                    <CustomCalendar
                      mode="single"
                      className="rounded-md border"
                   
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-black">Categorias</h3>
                    {["Todos", "Palestras", "Workshops", "Simulados", "Orientação"].map((category, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-2 text-sm text-black hover:text-orange-500 transition-colors w-full"
                      >
                        <Tag className="w-4 h-4" />
                        <span>{category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Events List */}
              <div className="lg:col-span-2 space-y-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:shadow-xl text-black transition-all transform hover:-translate-y-1"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-48 w-full object-cover md:h-full"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center space-x-2 text-sm text-orange-500 mb-2">
                          <Tag className="w-4 h-4" />
                          <span>{event.category}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-black mb-4">{event.description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-sm text-black">
                            <Calendar className="w-4 h-4 mr-2" />
                            {format(new Date(event.date), "dd 'de' MMMM", { locale: ptBR })}
                          </div>
                          <div className="flex items-center text-sm text-black">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-black">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-black">
                            <Users className="w-4 h-4 mr-2" />
                            {event.capacity} vagas
                          </div>
                        </div>
                        <button className="bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                          Inscrever-se
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
        
      
      </main>
      <Footer />
    </div>
  );
};

export default Events