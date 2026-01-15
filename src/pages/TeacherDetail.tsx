import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calculator, BookOpen, Zap, Mail, Phone, ArrowLeft, Star } from "lucide-react";
import gustavPhoto from "@/Bilder/GUSTAV.jpg";
import achirchmanPhoto from "@/Bilder/ACHIRSMAN.jpg";
import sebastianPhoto from "@/Bilder/SEBASTIAN.jpg";

const teachersData = [
  {
    id: "sebastian",
    name: "Sebastian Nyberg",
    specializations: ["Matematik", "Engelska", "NO"],
    description: "Erfaren studiebuddy med solid bakgrund inom naturvetenskap och matematik. Sebastian är skicklig på att bryta ned avancerade begrepp till lättbegripliga delar och arbetar gärna med praktiska exempel för att fördjupa förståelsen hos sina elever.",
    detailedSpecializations: {
      "Matematik": "Sebastian har djup kunskap inom matematik från grundskolenivå till gymnasienivå. Han specialiserar sig på algebra, geometri och matematisk analys. Med sin pedagogiska approach hjälper han elever att förstå komplexa matematiska koncept genom visuella exempel och praktiska tillämpningar.",
      "Engelska": "Med flera års erfarenhet av engelskundervisning hjälper Sebastian elever att förbättra sin engelska på alla nivåer. Han fokuserar på grammatik, ordförråd, läsning och skrivning. Sebastian använder interaktiva metoder för att göra språkinlärningen rolig och effektiv.",
      "NO": "Sebastian har en stark bakgrund inom naturvetenskap och kan hjälpa med biologi, kemi och fysik. Han använder experiment och praktiska exempel för att förklara naturvetenskapliga fenomen och hjälper elever att förstå sambanden mellan teori och praktik."
    },
    rating: 4.5,
    students: 25,
    photo: sebastianPhoto,
    phone: "000000000",
    email: "sebastian@mail.com"
  },
  {
    id: "achirsman",
    name: "Achirsman Dev",
    specializations: ["Matematik", "NO", "Fysik"],
    description: "Teknisk och analytisk studiebuddy med stark förmåga att förklara matematiska och naturvetenskapliga samband på ett tydligt och strukturerat sätt. Achirsman hjälper elever att förstå både teori och praktisk tillämpning inom sina ämnen och bygger upp deras självförtroende genom metodisk handledning.",
    detailedSpecializations: {
      "Matematik": "Achirsman är expert på matematik och har en unik förmåga att förklara avancerade matematiska koncept på ett begripligt sätt. Han specialiserar sig på högre matematik, inklusive kalkyl, linjär algebra och diskret matematik. Hans metodiska approach hjälper elever att bygga en solid grund och utveckla problemlösningsförmåga.",
      "NO": "Med sin tekniska bakgrund förstår Achirsman naturvetenskapens fundamentala principer. Han hjälper elever med biologi, kemi och fysik genom att bryta ned komplexa teorier i hanterbara delar. Han använder visuella hjälpmedel och praktiska exempel för att förstärka lärandet.",
      "Fysik": "Achirsman har en passion för fysik och kan förklara allt från mekanik till kvantfysik. Han hjälper elever att förstå fysikaliska lagar och deras tillämpningar i verkligheten. Genom strukturerade lektioner och problemlösning bygger han upp elevernas förståelse steg för steg."
    },
    rating: 5.0,
    students: 30,
    photo: achirchmanPhoto,
    phone: "000000000",
    email: "achirsman@mail.com"
  },
  {
    id: "gustav",
    name: "Gustav Eder",
    specializations: ["Svenska", "SO", "Matematik"],
    description: "Engagerad och pedagogisk studiebuddy med bred erfarenhet av undervisning. Gustav skapar en trygg och motiverande lärandemiljö där eleverna får stöd att utveckla sina kunskaper i flera olika ämnen genom tydliga förklaringar och strukturerade arbetssätt.",
    detailedSpecializations: {
      "Svenska": "Gustav är expert på svenska språket och hjälper elever med grammatik, stavning, läsning och skrivning. Han använder kreativa metoder för att göra språkinlärningen engagerande och hjälper elever att utveckla sin förmåga att uttrycka sig både muntligt och skriftligt. Med sin pedagogiska approach gör han svenska till ett roligt och tillgängligt ämne.",
      "SO": "Gustav har omfattande kunskap inom samhällsorienterande ämnen inklusive historia, geografi och samhällskunskap. Han hjälper elever att förstå samhällets struktur, historiska händelser och geografiska samband. Genom diskussioner och visuella material gör han SO-ämnena levande och relevanta.",
      "Matematik": "Gustav kan hjälpa med matematik från grundskolenivå till gymnasienivå. Han fokuserar på att bygga en solid grund och hjälper elever att förstå matematiska koncept genom praktiska exempel och strukturerad problemlösning. Hans tålmodiga och stödjande approach gör matematik tillgängligt för alla."
    },
    rating: 4.7,
    students: 32,
    photo: gustavPhoto,
    phone: "000000000",
    email: "gustav@mail.com"
  }
];

const getSpecializationIcon = (specialization: string) => {
  switch (specialization) {
    case "Math":
    case "Matematik":
      return <Calculator className="w-5 h-5" />;
    case "English":
    case "Engelska":
    case "Swedish":
    case "Svenska":
      return <BookOpen className="w-5 h-5" />;
    case "Fysik":
      return <Zap className="w-5 h-5" />;
    case "NO":
    case "SO":
      return <BookOpen className="w-5 h-5" />;
    default:
      return <BookOpen className="w-5 h-5" />;
  }
};

const TeacherDetail = () => {
  const { id } = useParams<{ id: string }>();
  const teacher = teachersData.find(t => t.id === id);

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Lärare hittades inte</h1>
          <Link to="/">
            <Button variant="hero">Tillbaka till startsidan</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Tillbaka-knapp */}
        <Link to="/#larare">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till lärare
          </Button>
        </Link>

        {/* Lärare-kort */}
        <Card className="mb-8 border-0 shadow-medium">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar och grundinfo */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="mx-auto md:mx-0 mb-4 w-32 h-32">
                  <Avatar className="w-32 h-32 ring-4 ring-primary/20">
                    <AvatarImage src={teacher.photo} alt={teacher.name} />
                    <AvatarFallback className="bg-brand-gradient text-white text-3xl font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{teacher.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-lg">{teacher.rating}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{teacher.students}+ studenter</span>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {teacher.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Specialiseringar */}
        <Card className="mb-8 border-0 shadow-medium">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Specialiseringar</h2>
            <div className="space-y-8">
              {teacher.specializations.map((spec, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">
                      {getSpecializationIcon(spec)}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{spec}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {teacher.detailedSpecializations[spec as keyof typeof teacher.detailedSpecializations]}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Kontaktuppgifter */}
        <Card className="border-0 shadow-medium">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktuppgifter</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-post</p>
                  <a 
                    href={`mailto:${teacher.email}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {teacher.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a 
                    href={`tel:${teacher.phone}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {teacher.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/#kontakt">
                <Button variant="hero" className="w-full md:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Skicka meddelande
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDetail;


