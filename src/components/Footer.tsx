import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li><Link to="/pedagogical-project" className="text-white hover:text-gray-300 transition-colors">Projeto Pedagógico</Link></li>
              <li><Link to="/your-team" className="text-white hover:text-gray-300 transition-colors">Nosso Time</Link></li>
              <li><Link to="/labs" className="text-white hover:text-gray-300 transition-colors">Instalações</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Acadêmicos</h3>
            <ul className="space-y-2">
              <li><Link to="/high-school" className="text-white hover:text-gray-300 transition-colors">
              Ensino Médio</Link></li>
              <li><Link to="/pre-university" className="text-white hover:text-gray-300 transition-colors">Pré-Vestibular</Link></li>
              <li><Link to="/results" className="text-white hover:text-gray-300 transition-colors">Resultados</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Comunidade</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-white hover:text-gray-300 transition-colors">Eventos</Link></li>
              <li><Link to="/culture-maker" className="text-white hover:text-gray-300 transition-colors">Culture Maker</Link></li>

            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contatos</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/a/?locale2=pt_BR&_rdr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/9999999999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-white">
          <p className="text-white text-center">
          © 2025 Website Escolar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;