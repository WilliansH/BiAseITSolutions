import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const FooterLogo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate('/#hero');
      return;
    }
    const el = document.getElementById('hero');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <img src={logo} alt="BiAse IT Solutions" className="h-16 w-16 rounded-2xl object-cover transition-transform hover:scale-105 mb-4" />
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <FooterLogo />
            <p className="text-muted-foreground max-w-md">
              Soluciones tecnológicas innovadoras para impulsar el crecimiento de tu empresa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("technologies")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  Tecnologías
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          {/* <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            © {currentYear} BiAse IT Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
