import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Leaf, Activity, Play, ChefHat, Trophy} from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#atividades", label: "Atividades", icon: Activity, color: "#79CACC" },
    { href: "#videos", label: "Vídeos", icon: Play, color: "#A479CC" },
    { href: "#receitas", label: "Receitas", icon: ChefHat, color: "#CC7B79" },
    { href: "#sobre", label: "Sobre", icon: Leaf, color: "#A1CC79" },
  ];

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" style={{ color: '#A1CC79' }} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A1CC79' }}>
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span style={{ color: '#A1CC79' }}>NUTRILHO</span>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ borderLeft: `4px solid ${item.color}` }}
              >
                <Icon className="w-5 h-5" style={{ color: item.color }} />
                <span className="text-lg">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Button 
            className="w-full text-white border-0 hover:opacity-90" 
            style={{ backgroundColor: '#A479CC' }}
            size="lg"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Meu Progresso
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}