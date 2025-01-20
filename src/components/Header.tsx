import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Projeto Pedagógico", path: "/pedagogical-project" },
  { name: "Ensino Médio", path: "/high-school" },
  { name: "Pré-Vestibular", path: "/pre-university" },
  { name: "Resultados", path: "/results" },
  { name: "Eventos", path: "/events" },
  { name: "Team Acesso", path: "/access-team" },
  { name: "Culture Maker", path: "/culture-maker" },
  { name: "Laboratórios e Estrutura", path: "/labs" },
  { name: "Contato", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-xl font-semibold text-white hover:text-neutral-200 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="logo.png" alt="Acesso Educação" className="w-6 h-6 mr-2" />
          Acesso Educação
        </Link>

        {/* Desktop Navigation */}
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

        {/* Hamburger Menu Button */}
        <button
          className={`lg:hidden fixed top-2 right-6 z-[60] w-12 h-12 rounded-full bg-neutral-900 shadow-lg transition-all duration-300 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
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

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 pointer-events-none`}
      >
        {/* Background overlay */}
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

        {/* Navigation content */}
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
