
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "../hooks/use-toast";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato o mais breve possível.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-brand-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender às suas necessidades e esclarecer todas as suas dúvidas.
          </p>
          <div className="h-1 w-20 bg-brand-blue mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold font-poppins text-brand-gray mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">contato@embalagensvirtuais.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Localização</h4>
                  <p className="text-gray-600">São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold font-poppins text-brand-gray mb-6">
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Sua empresa"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-darkBlue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
