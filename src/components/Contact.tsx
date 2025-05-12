
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
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

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold font-poppins text-brand-gray mb-6 text-center">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(51) 98089-1199</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(51) 98089-1199</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">contato@paveirepresentacoes.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Localização</h4>
                  <p className="text-gray-600">Rio Grande do Sul - RS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
