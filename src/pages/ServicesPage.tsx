import Navigation from "@/components/Navigation";
import ServiceDetails from "@/components/ServiceDetails";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServiceDetails />
      <Footer />
    </div>
  );
};

export default ServicesPage;