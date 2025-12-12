import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import CarouselCard from "./components/projets";
import WhatsAppFloatingButton from "./components/whatsappFloatButton";
import Testimonials from "./components/testimonials";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  return (
    <div className="app">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <Services />
      <CarouselCard />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
