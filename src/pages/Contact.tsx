import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Instagram, Facebook, Globe } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 flex justify-center"
              >
                <div className="p-4 rounded-full bg-orange-500/20 backdrop-blur-sm">
                  <MessageSquare className="w-12 h-12 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Entre em
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"> Contato</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Estamos aqui para ajudar. Entre em contato conosco e tire suas dúvidas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-orange-400" />
                  Envie-nos uma mensagem
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Nome</label>
                    <Input 
                      placeholder="Seu nome" 
                      className="bg-white/5 border-gray-700 text-black placeholder:text-gray-500 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="NomeDoEmail@email.com" 
                      className="bg-white/5 border-gray-700 text-black placeholder:text-gray-500 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Mensagem</label>
                    <Textarea 
                      placeholder="Escreva sua mensagem" 
                      className="h-32 bg-white/5 border-gray-700 text-black placeholder:text-gray-500 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>
                  <Button
  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
  onClick={(event) => {
    event.preventDefault(); // Impede o comportamento padrão do botão
    window.open('https://wa.me/99999999999', '_blank'); // Abre o WhatsApp em uma nova aba
  }}
>
  Enviar Mensagem
</Button>

                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-black mb-8">Informações de contato</h2>
                <div className="space-y-8 text-black">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mt-1">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Endereço</h3>
                      <p>Nome Da Rua, 99 - Bairro, Cidade - Estado, 99999-999</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mt-1">
                      <Phone className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Telefone</h3>
                      <p>+99 99 9999-9999</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mt-1">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Email</h3>
                      <p>NomeDoEmail@gmail.com.br</p>
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-black mb-4">Redes Sociais</h3>
                    <div className="flex space-x-6">
                     
                      <motion.a
                        href="https://www.instagram.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <Instagram className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <Facebook className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Map Preview */}
                <div className="mt-8 rounded-lg overflow-hidden">
                  <iframe
                    title="Localização"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6204427838306!2d-49.08724742378035!3d-26.915538493323236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df192905855555%3A0x9178dae6c7183436!2sVila%20Germ%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1739124540876!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;