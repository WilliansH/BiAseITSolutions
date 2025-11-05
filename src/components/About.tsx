import { Building2, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            En BiAse IT Solutions, nos dedicamos a ofrecer soluciones tecnológicas innovadoras y 
            personalizadas para impulsar el crecimiento de tu empresa. Nuestro equipo de expertos 
            trabaja con pasión y compromiso para brindarte el mejor servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
            <p className="text-muted-foreground">
              Transformar ideas en soluciones tecnológicas que impulsen el éxito de nuestros clientes.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestra Visión</h3>
            <p className="text-muted-foreground">
              Ser líderes en innovación tecnológica y el socio preferido para la transformación digital.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestro Equipo</h3>
            <p className="text-muted-foreground">
              Profesionales apasionados y experimentados comprometidos con la excelencia en cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
