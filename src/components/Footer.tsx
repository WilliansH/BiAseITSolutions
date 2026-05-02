import logo from "@/assets/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("technologies")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  {t('nav.technologies')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-left text-muted-foreground hover:text-primary transition-colors py-1">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media: ocultas hasta tener cuentas activas */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
