import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl mb-4">
              Mantenha-se Atualizado
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Receba dicas de nutrição, receitas e novidades diretamente no seu email
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button 
                className="text-white border-0 hover:opacity-90 whitespace-nowrap"
                style={{ backgroundColor: '#A1CC79' }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A1CC79' }}>
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold" style={{ color: '#A1CC79' }}>
                NUTRILHO
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando vidas através da nutrição consciente e alimentação saudável. 
              Junte-se à nossa missão de promover bem-estar para todos.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#79CACC' }}>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li><a href="#atividades" className="text-gray-400 hover:text-white transition-colors">Atividades</a></li>
              <li><a href="#videos" className="text-gray-400 hover:text-white transition-colors">Vídeos</a></li>
              <li><a href="#receitas" className="text-gray-400 hover:text-white transition-colors">Receitas</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#A479CC' }}>
              Recursos
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guias Nutricionais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calculadora de IMC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Planos Alimentares</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dicas Diárias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#CC7B79' }}>
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Rua da Nutrição, 123<br />
                  São Paulo, SP - 01234-567
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-400">(11) 9999-8888</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-400">contato@nutrilho.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 NUTRILHO. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}