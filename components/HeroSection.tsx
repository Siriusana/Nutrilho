import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback"; 
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757332334667-d2e75d5816ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTg1ODU2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vegetais frescos e coloridos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6" style={{ color: '#A1CC79' }} />
            <span className="text-white/90 text-lg">Alimentação Saudável</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
            Descubra o Poder da
            <span className="block" style={{ color: '#A1CC79' }}>
              Nutrição
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed;">
            Transforme sua relação com a comida através de atividades interativas, 
            vídeos educativos e receitas deliciosas que nutrem corpo e mente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="text-white border-0 hover:opacity-90 text-lg py-10"
              style={{ backgroundColor: '#A479CC' }}
            >
              Explorar Atividades
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 text-white hover:bg-white/10 text-lg py-10"
              style={{ borderColor: '#79CACC', color: '#79CACC' }}
            >
              Assistir Vídeos
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full animate-bounce hidden lg:block" style={{ backgroundColor: '#79CACC', opacity: 0.7 }}></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 rounded-full animate-pulse hidden lg:block" style={{ backgroundColor: '#CC7B79', opacity: 0.7 }}></div>
    </section>
  );
}