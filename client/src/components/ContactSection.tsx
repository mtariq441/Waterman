import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";

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
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#009FC2]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#009FC2] text-sm font-semibold tracking-wide uppercase">
              Contact Us
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B3C88] mb-6 tracking-tight" data-testid="text-contact-title">
            GET IN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FC2] to-[#1E73BE]">
              TOUCH
            </span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#009FC2] to-transparent rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for a free water analysis and consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-0 rounded-3xl premium-shadow hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009FC2] to-[#1E73BE] flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-[#0B3C88]">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-600" data-testid="text-address">
                  1155 Malabar Rd. NE, Suite 20<br />
                  Palm Bay, FL 32907
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 rounded-3xl premium-shadow hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E73BE] to-[#0B3C88] flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-[#0B3C88]">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-base text-gray-600" data-testid="text-hours">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 rounded-3xl premium-shadow hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009FC2] to-[#008AB0] flex items-center justify-center mb-4 shadow-lg">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-[#0B3C88]">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="tel:3219511303"
                  className="flex items-center gap-3 text-base text-gray-600 hover:text-[#009FC2] transition-colors p-2 rounded-xl hover:bg-[#009FC2]/5"
                  data-testid="link-contact-phone"
                >
                  <Phone className="h-5 w-5 text-[#009FC2]" />
                  <span className="font-semibold">(321) 951-1303</span>
                </a>
                <a
                  href="mailto:thewaterman321@gmail.com"
                  className="flex items-center gap-3 text-base text-gray-600 hover:text-[#009FC2] transition-colors p-2 rounded-xl hover:bg-[#009FC2]/5 break-all"
                  data-testid="link-contact-email"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-[#009FC2]" />
                  <span className="font-medium">thewaterman321@gmail.com</span>
                </a>
              </CardContent>
            </Card>

            <div 
              className="aspect-video rounded-3xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              data-testid="map-container"
            >
              <iframe
                src="https://maps.google.com/maps?q=1155+Malabar+Rd+NE+Suite+20,+Palm+Bay,+FL+32907&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Waterman location in Palm Bay, FL 32907"
                data-testid="map-iframe"
              />
            </div>
          </div>

          <Card className="lg:col-span-3 bg-white border-0 rounded-3xl premium-shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B3C88] to-[#005F9E] flex items-center justify-center shadow-lg">
                  <Send className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl lg:text-3xl text-[#0B3C88]">Send Us a Message</CardTitle>
                  <p className="text-base text-gray-600 mt-1">
                    Fill out the form and we'll get back to you shortly
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0B3C88] font-semibold">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#009FC2] bg-white"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0B3C88] font-semibold">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(321) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#009FC2] bg-white"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0B3C88] font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#009FC2] bg-white"
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#0B3C88] font-semibold">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#009FC2] bg-white"
                      data-testid="input-subject"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#0B3C88] font-semibold">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your water treatment needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-xl border-2 border-gray-200 focus:border-[#009FC2] bg-white resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#009FC2] to-[#1E73BE] hover:from-[#008AB0] hover:to-[#0B3C88] text-white font-semibold h-14 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  data-testid="button-submit"
                >
                  <Send className="mr-2 h-5 w-5" />
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
