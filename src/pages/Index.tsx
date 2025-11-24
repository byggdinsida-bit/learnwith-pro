import Hero from "@/components/Hero";
import Teachers from "@/components/Teachers";
import Subjects from "@/components/Subjects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="hem">
        <Hero />
      </div>
      <div id="larare">
        <Teachers />
      </div>
      <div id="amnen">
        <Subjects />
      </div>
      <div id="prissattning">
        <Pricing />
      </div>
      <div id="kontakt">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
