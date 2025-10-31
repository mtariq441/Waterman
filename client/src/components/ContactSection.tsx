import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import mapImage from "@assets/image_1761917346217.png";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="section-contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-contact-title">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Get in touch with us for a free water analysis and consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div className="space-y-5 sm:space-y-6">
            <Card className="bg-card border-l-4 border-accent">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-foreground">
                  <MapPin className="h-5 w-5 text-accent" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-address">
                  1155 Malabar Rd. NE, Suite 20<br />
                  Palm Bay, FL 32907
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-accent">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-foreground">
                  <Clock className="h-5 w-5 text-accent" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm sm:text-base text-muted-foreground" data-testid="text-hours">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-accent">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-foreground">
                  <Phone className="h-5 w-5 text-accent" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="tel:3219511303"
                  className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate p-2 rounded-md hover:text-foreground transition-colors"
                  data-testid="link-contact-phone"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  (321) 951-1303
                </a>
                <a
                  href="mailto:thewaterman321@gmail.com"
                  className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate p-2 rounded-md break-all hover:text-foreground transition-colors"
                  data-testid="link-contact-email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  thewaterman321@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-muted border-l-4 border-accent overflow-hidden">
              <CardContent className="pt-4 sm:pt-6">
                <a 
                  href="https://www.google.com/maps/place/1155+Malabar+Rd+NE+%2320,+Palm+Bay,+FL+32907" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block aspect-video bg-background rounded-md overflow-hidden border border-border hover:opacity-90 transition-opacity"
                  data-testid="map-link"
                >
                  <img 
                    src={mapImage} 
                    alt="Map showing The Waterman location in Palm Bay, FL" 
                    className="w-full h-full object-cover"
                    data-testid="map-image"
                  />
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-l-4 border-accent">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl text-foreground">Send Us a Message</CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">
                Fill out the form below and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(321) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground"
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground"
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground"
                    data-testid="input-subject"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your water treatment needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border text-foreground resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12"
                  data-testid="button-submit"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
