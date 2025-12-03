import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, User, Package } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Privatlektion",
      description: "Personlig undervisning",
      price: "200",
      period: "per timme",
      icon: <User className="w-8 h-8" />,
      features: [
        "Personlig uppmärksamhet",
        "Anpassad studieplan",
        "Flexibel tidsplanering"
      ],
      popular: false
    },
    {
      title: "Grupplektion",
      description: "Lär dig tillsammans med andra",
      price: "110",
      period: "per person/timme",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Social inlärning",
        "Kostnadseffektivt",
        "Gruppdiskussioner"
      ],
      popular: false
    },
    {
      title: "Paket 5 lektioner",
      description: "Rabatterat paket",
      price: "800",
      period: "total kostnad",
      icon: <Package className="w-8 h-8" />,
      features: [
        "20% rabatt jämfört med enskilda lektioner",
        "Spara 200 kr",
        "Prioriterad bokning"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Våra{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Prissättning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparenta priser för alla typer av studiehjälp. Välj det alternativ som passar dig bäst.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-strong transition-all duration-300 border-0 shadow-medium overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                  Mest populär
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-brand-gradient p-4 rounded-lg text-white shadow-medium mx-auto w-fit mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price} kr</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Vad ingår:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={plan.popular ? "hero" : "outline-hero"} 
                  className="w-full"
                  onClick={() => {
                    // Scrolla till kontaktformuläret och lägg till paket i URL
                    const contactSection = document.getElementById("contact-section");
                    if (contactSection) {
                      // Uppdatera URL med paketval
                      const url = new URL(window.location.href);
                      url.searchParams.set("package", plan.title);
                      window.history.pushState({}, "", url.toString());
                      
                      // Scrolla till kontaktformuläret
                      contactSection.scrollIntoView({ behavior: "smooth" });
                      
                      // Trigger en custom event för att uppdatera formuläret
                      setTimeout(() => {
                        window.dispatchEvent(new PopStateEvent("popstate"));
                      }, 100);
                    }
                  }}
                >
                  Välj {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
