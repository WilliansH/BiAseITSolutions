import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<{ name: string; logo: string }[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    // Función para cargar las tecnologías dinámicamente
    const loadTechnologies = async () => {
      try {
        // Importar todas las imágenes de la carpeta tech
        const techModules = import.meta.glob("@/assets/tech/*.png", { eager: true });

        const techList = Object.keys(techModules).map((path) => {
          const fileName = path.split("/").pop()?.replace(".png", "") || "";
          const name = fileName.charAt(0).toUpperCase() + fileName.slice(1); // Capitalizar primera letra

          return {
            name: name === "Csharp" ? "C#" : name === "Sqlserver" ? "SQL Server" : name,
            logo: (techModules[path] as any).default,
          };
        });

        setTechnologies(techList);
      } catch (error) {
        console.error("Error loading technologies:", error);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <section id="technologies" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('technologies.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('technologies.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologies.map((tech, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="bg-white p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group flex flex-col items-center justify-center animate-scale-in">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-14 h-14 object-contain mb-4 group-hover:scale-110 transition-transform"
                    />
                    <p className="text-sm font-medium text-center text-black">{tech.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
