import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import gustavPhoto from "@/Bilder/GUSTAV.jpg";
import achirchmanPhoto from "@/Bilder/ACHIRSMAN.jpg";
import sebastianPhoto from "@/Bilder/SEBASTIAN.jpg";
import { BookOpen, Calculator, Zap, Mail, Star } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Sebastian Nyberg",
      specializations: ["Matematik", "Fysik", "Kemi"],
      description: "Erfaren studiebuddy med stark bakgrund inom naturvetenskap och matematik. Hjälper studenter att förstå komplexa koncept genom praktiska exempel.",
      achievements: [
        "5 års erfarenhet av undervisning",
        "Specialiserad inom högskole-matematik",
        "98% av studenter förbättrar sina betyg"
      ],
      rating: 4.9,
      students: 25,
      photo: sebastianPhoto
    },
    {
      name: "Achirsman Dev",
      specializations: ["Matematik", "Programmering", "Problemlösning"],
      description: "Teknisk expert som kombinerar matematik med praktisk programmering. Hjälper studenter att se kopplingar mellan teori och praktik.",
      achievements: [
        "Utvecklare med universitetsexamen",
        "Expert på algoritmisk problemlösning",
        "Specialiserad på teknisk matematik"
      ],
      rating: 4.9,
      students: 30,
      photo: achirchmanPhoto
    },
    {
      name: "Gustav Eder",
      specializations: ["Ämne 1", "Ämne 2"],
      description: "Beskrivning av den nya studiebuddyn och dennes erfarenhet inom undervisning.",
      achievements: [
        "Merit 1",
        "Merit 2",
        "Merit 3"
      ],
      rating: 4.9,
      students: 32,
      photo: gustavPhoto
    }
  ]; 

  const getSpecializationIcon = (specialization: string) => {
    switch (specialization) {
      case "Matematik":
        return <Calculator className="w-4 h-4" />;
      case "Fysik":
        return <Zap className="w-4 h-4" />;
      case "Programmering":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Träffa våra{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Studiebuddies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erfarna och kvalificerade lärare som hjälper dig att nå dina studiemål med personlig och engagerad undervisning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 shadow-medium overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 w-24 h-24">
                    <Avatar className="w-24 h-24 ring-2 ring-primary/20">
                      {/* @ts-ignore optional field on object literal */}
                      <AvatarImage src={(teacher as any).photo} alt={teacher.name} />
                      <AvatarFallback className="bg-brand-gradient text-white text-2xl font-bold">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{teacher.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{teacher.rating}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{teacher.students}+ studenter</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Specialiseringar</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specializations.map((spec, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {getSpecializationIcon(spec)}
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {teacher.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Meriter & Erfarenhet</h4>
                  <ul className="space-y-2">
                    {teacher.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant="outline-hero">
                  <Mail className="w-4 h-4 mr-2" />
                  Kontakta {teacher.name.split(' ')[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
