import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Valideringsschema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "Förnamn måste vara minst 2 tecken"),
  lastName: z.string().min(2, "Efternamn måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  subject: z.string().min(3, "Ämne måste vara minst 3 tecken"),
  message: z.string().min(10, "Meddelande måste vara minst 10 tecken"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Skicka meddelande via Vercel API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Kunde inte skicka meddelandet");
      }

      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
      });

      reset();
    } catch (error) {
      console.error("Fel vid skickande av meddelande:", error);
      toast({
        title: "Något gick fel",
        description: error instanceof Error 
          ? error.message 
          : "Kunde inte skicka meddelandet. Försök igen senare eller kontakta oss direkt via e-post.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-post",
      description: "Skicka oss ett meddelande så återkommer vi inom 24 timmar",
      action: "studypro.uf@email.com",
      buttonText: "Skicka e-post"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      description: "Ring oss för direkt kontakt och snabba svar",
      action: "072 889 84 97",
      buttonText: "Ring nu"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Chatta med oss för snabb och enkel kommunikation",
      action: "WhatsApp",
      buttonText: "Starta chatt"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Kom i{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              kontakt
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Redo att börja din studieresa? Kontakta oss idag för en kostnadsfri konsultation och personlig studieplan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="shadow-medium border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Skicka oss ett meddelande</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Förnamn</label>
                    <Input 
                      {...register("firstName")}
                      placeholder="Ditt förnamn" 
                      className="border-primary/20 focus:border-primary" 
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Efternamn</label>
                    <Input 
                      {...register("lastName")}
                      placeholder="Ditt efternamn" 
                      className="border-primary/20 focus:border-primary" 
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">E-postadress</label>
                  <Input 
                    {...register("email")}
                    type="email" 
                    placeholder="din.email@exempel.se" 
                    className="border-primary/20 focus:border-primary" 
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Ämne du behöver hjälp med</label>
                  <Input 
                    {...register("subject")}
                    placeholder="T.ex. Matematik, Fysik, Kemi" 
                    className="border-primary/20 focus:border-primary" 
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Meddelande</label>
                  <Textarea 
                    {...register("message")}
                    placeholder="Berätta om vad du behöver hjälp med och dina studiemål..." 
                    rows={4}
                    className="border-primary/20 focus:border-primary"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Skickar...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Skicka meddelande
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact methods and info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Andra sätt att nå oss</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                          <p className="font-medium text-primary">{method.action}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Öppettider & Information
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Måndag - Fredag:</span>
                    <span className="font-medium">16:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lördag - Söndag:</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="border-t border-primary/20 pt-3 mt-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-muted-foreground">Studiehjälp:</span>
                        <br />
                        <span className="font-medium">Online & på plats efter överenskommelse</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;