import { useEffect, useState } from "react";
import { fetchSettings, type SiteSettings } from "@/lib/settings";
const Hero = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchSettings().then((s) => {
      if (mounted) setSettings(s);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const title = settings?.hero_title ?? "Nå dina studiemål med StudyPro-UF";
  const subtitle =
    settings?.hero_subtitle ??
    "Få personlig studiehjälp från erfarna studiebuddies inom matematik, fysik och mer. Vi hjälper dig att lyckas med dina studier.";
  const primaryCta = settings?.primary_cta_label ?? "Kontakta oss idag";
  const secondaryCta = settings?.secondary_cta_label ?? "Läs mer om oss";

  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-gradient opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-blue rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-brand-gradient text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                Professionell Studiehjälp
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight mx-0">
              {title}
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-4 md:mx-[200px]">
              {subtitle}
            </p>
            
            
            
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Nöjda Studenter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Genomsnittligt Betyg</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Erfarna Lärare</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default Hero;