// Update this page (the content is just a fallback if you fail to update the page)

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // if there's a hash like #about, #services, etc., scroll to it on mount
    if (typeof window !== "undefined" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // small timeout to ensure DOM is painted
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
  <About />
  <Services />
  <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
