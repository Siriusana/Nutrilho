import { Button } from "./ui/button";
import { Leaf} from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A1CC79' }}>
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#A1CC79' }}>
              NUTRILHO
            </span>
          </div>

          {}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#atividades" className="hover:opacity-80 transition-opacity" style={{ color: '#79CACC' }}>
              Atividades
            </a>
            <a href="#videos" className="hover:opacity-80 transition-opacity" style={{ color: '#A479CC' }}>
              Vídeos
            </a>
            <a href="#receitas" className="hover:opacity-80 transition-opacity" style={{ color: '#CC7B79' }}>
              Receitas
            </a>
            <a href="#sobre" className="hover:opacity-80 transition-opacity" style={{ color: '#A1CC79' }}>
              Sobre
            </a>
          </nav>

          {}
          <div className="flex items-center gap-4">
            <Button 
              className="hidden md:block text-white border-0 hover:opacity-90" 
              style={{ backgroundColor: '#A479CC' }}
            >
              Começar Agora
            </Button>
            
            {}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}