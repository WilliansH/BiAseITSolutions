import { Building2, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.mission.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.vision.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.vision.description')}
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.team.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.team.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
