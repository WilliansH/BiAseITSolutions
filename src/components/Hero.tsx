import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen">
      <WebGLShader />
      <div className="relative border border-border/20 p-2 w-full mx-auto max-w-3xl z-10">
        <main className="relative border border-border/20 py-10 overflow-hidden">
          <h1 className="mb-3 text-foreground text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]">
            BiAse IT Solutions
          </h1>
          <p className="text-muted-foreground px-6 text-center text-xs md:text-sm lg:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500">{t('hero.status')}</p>
          </div>

          <div className="flex justify-center">
            <LiquidButton
              onClick={scrollToContact}
              className="text-foreground border rounded-full"
              size="xl"
            >
              {t('hero.cta')}
            </LiquidButton>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
