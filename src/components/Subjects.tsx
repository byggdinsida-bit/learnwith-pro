import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Zap, FlaskConical, Code2, BookOpen, Brain } from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Matematik",
      description: "Från grundläggande aritmetik till avancerad kalkyl och linjär algebra",
      topics: ["Algebra", "Geometri", "Kalkyl", "Statistik", "Sannolikhet"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fysik",
      description: "Mekanik, elektromagnetism, termodynamik och moderna fysik",
      topics: ["Mekanik", "Elektromagnetism", "Termodynamik", "Optik", "Kvantfysik"]
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Kemi",
      description: "Oorganisk och organisk kemi, samt kemiska reaktioner och bindningar",
      topics: ["Atomteori", "Kemiska bindningar", "Organisk kemi", "Reaktioner", "Termokemi"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Historia",
      description: "Svensk och världshistoria från antiken till modern tid",
      topics: ["Svensk historia", "Världshistoria", "Antiken", "Medeltiden", "Modern tid"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Studieteknik",
      description: "Effektiva metoder för inlärning, tentaförberedelser och tidsplanering",
      topics: ["Minnestek­niker", "Tentaförberedelse", "Tidsplanering", "Anteckningar", "Motivation"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problemlösning",
      description: "Utveckla analytiskt tänkande och strukturerade problemlösningsmetoder",
      topics: ["Logiskt tänkande", "Kreativitet", "Strukturering", "Analys", "Kritiskt tänkande"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Våra{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Specialområden
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder professionell studiehjälp inom flera ämnesområden. Oavsett vad du behöver hjälp med finns vi här för dig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 border-0 shadow-soft hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-brand-gradient p-3 rounded-lg text-white shadow-medium group-hover:scale-110 transition-transform duration-300">
                    {subject.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {subject.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {subject.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Områden vi täcker:</h4>
                  <div className="flex flex-wrap gap-1">
                    {subject.topics.map((topic, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;