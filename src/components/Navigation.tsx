import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // if we're not on the home page, navigate there with the hash
    if (location.pathname !== "/") {
      navigate(`/${id ? `#${id}` : ""}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="BiAse IT Solutions" className="h-16 w-16 rounded-2xl object-cover transition-transform hover:scale-105" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Tecnologías
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
            >
              Tecnologías
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")} className="w-full">
              Contacto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
