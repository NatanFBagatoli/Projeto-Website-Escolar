import { Menu, X } from "lucide-react"; // Importa ícones do Lucide React (Menu e X para o botão hambúrguer)
import { useState, useEffect } from "react"; // Importa hooks do React para gerenciar estado e efeitos colaterais
import { Link, useLocation } from "react-router-dom"; // Importa componentes do React Router para navegação

// Lista de navegação contendo os nomes e caminhos das páginas do site
const navigation = [
  { name: "Home", path: "/" },
  { name: "Projeto Pedagógico", path: "/pedagogical-project" },
  { name: "Ensino Médio", path: "/high-school" },
  { name: "Pré-Vestibular", path: "/pre-university" },
  { name: "Resultados", path: "/results" },
  { name: "Eventos", path: "/events" },
  { name: "Nosso Time", path: "/your-team" },
  { name: "Culture Maker", path: "/culture-maker" },
  { name: "Laboratórios e Estrutura", path: "/labs" },
  { name: "Contato", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu
  const location = useLocation(); // Obtém o local atual da URL para destacar o link ativo

  // Fecha o menu ao mudar de página
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Fecha o menu ao pressionar a tecla "Escape" e impede a rolagem ao abrir
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape); // Adiciona evento de tecla
      document.body.style.overflow = "hidden"; // Impede a rolagem quando o menu está aberto
    }

    return () => {
      document.removeEventListener("keydown", handleEscape); // Remove o evento ao desmontar
      document.body.style.overflow = "unset"; // Restaura a rolagem ao fechar o menu
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
      {/*Barra de navegação*/}
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        {/*Logotipo e link para a página inicial*/}
        <Link
          to="/"
          className="flex items-center text-xl font-semibold text-white hover:text-neutral-200 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="logo.webp" alt="Website escolar" className="w-6 h-6 mr-2" />
          Nome da Instituição
        </Link>
        {/*Logotipo icon*/}

        {/*Navegação Desktop*/}
        {/*Textos do menu com destaque para o link ativo*/}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                location.pathname === item.path
                  ? 'text-white after:content-[""] after:block after:h-0.5 after:bg-white after:mt-0.5'
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        

        {/*Botão do menu mobile (hambúrguer)*/}
        {/*Botão de menu para dispositivos móveis*/}
        <button
          className={`lg:hidden fixed top-2 right-6 z-[60] w-12 h-12 rounded-full bg-neutral-900 shadow-lg transition-all duration-300 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <Menu className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <X className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
          </div>
        </button>
      </nav>

      {/*Navegação Mobile*/}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 pointer-events-none`}
      >
        {/*Fundo escuro de sobreposição*/}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
        >
          <div
            className={`absolute top-2 right-6 w-12 h-12 rounded-full bg-neutral-900 transition-all duration-700 ${
              isMenuOpen ? "scale-[100] opacity-100" : "scale-[1] opacity-0"
            }`}
          />
        </div>

        {/*Links do menu mobile*/}
        <nav
          className={`relative h-full container-padding pt-24 transition-all duration-500 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            {navigation.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-white group flex items-center ${
                  location.pathname === item.path
                    ? "text-white translate-x-2"
                    : "text-neutral-400"
                } ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 h-0.5 bg-white transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
