import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-gradient p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">StudyPro</span>
                <span className="text-brand-blue-light font-bold">-UF</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Professionell studiehjälp som hjälper dig att nå dina akademiska mål. 
              Vi finns här för att stödja din utbildningsresa.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 StudyPro-UF. Alla rättigheter förbehållna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Snabblänkar</h3>
            <div className="space-y-2">
              <a href="#hem" className="block text-muted-foreground hover:text-brand-blue-light transition-colors">
                Hem
              </a>
              <a href="#larare" className="block text-muted-foreground hover:text-brand-blue-light transition-colors">
                Våra Lärare
              </a>
              <a href="#amnen" className="block text-muted-foreground hover:text-brand-blue-light transition-colors">
                Ämnen vi undervisar
              </a>
              <a href="#kontakt" className="block text-muted-foreground hover:text-brand-blue-light transition-colors">
                Kontakta oss
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontaktinformation</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue-light" />
                <span className="text-muted-foreground">studypro.uf@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue-light" />
                <span className="text-muted-foreground">+46 70 123 45 67</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue-light mt-0.5" />
                <span className="text-muted-foreground">
                  Online & på plats efter<br />överenskommelse
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Skapad av ByggDinSida-UF
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;