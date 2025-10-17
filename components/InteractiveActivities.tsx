import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Brain, Trophy, Star, Clock, Users, Play } from "lucide-react";
import { useState } from "react";
import { useApp } from "../App";
import { toast } from "sonner";

const activities = [
  {
    id: 1,
    title: "Quiz dos Nutrientes",
    description: "Teste seus conhecimentos sobre vitaminas e minerais",
    progress: 75,
    level: "Intermediário",
    participants: 1234,
    duration: "5 min",
    color: "#79CACC",
    icon: Brain
  },
  {
    id: 2,
    title: "Jogo da Pirâmide Alimentar",
    description: "Monte uma pirâmide alimentar equilibrada",
    progress: 45,
    level: "Iniciante",
    participants: 856,
    duration: "8 min",
    color: "#A479CC",
    icon: Trophy
  },
  {
    id: 3,
    title: "Caça aos Antioxidantes",
    description: "Encontre alimentos ricos em antioxidantes",
    progress: 90,
    level: "Avançado",
    participants: 2341,
    duration: "12 min",
    color: "#CC7B79",
    icon: Star
  }
];

export function InteractiveActivities() {
  const [activeActivity, setActiveActivity] = useState<number | null>(null);
  const { addPoints, addAchievement } = useApp();

  const handleStartActivity = (activity: typeof activities[0]) => {
    setActiveActivity(activity.id);
    addPoints(10);
    toast.success(`Atividade iniciada! +10 pontos`, {
      description: activity.title
    });
    
    // Simular conclusão da atividade após alguns segundos
    setTimeout(() => {
      addPoints(25);
      addAchievement(`Completou: ${activity.title}`);
      toast.success(`Atividade concluída! +25 pontos`, {
        description: `Parabéns! Você ganhou experiência em ${activity.level}.`
      });
    }, 3000);
  };

  return (
    <section id="atividades" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-8 h-8" style={{ color: '#A1CC79' }} />
            <span className="text-lg" style={{ color: '#A1CC79' }}>Atividades Interativas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Aprenda Brincando
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolva hábitos alimentares saudáveis através de jogos educativos, 
            quizzes interativos e desafios divertidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            const isActive = activeActivity === activity.id;
            
            return (
              <Card 
                key={activity.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  isActive ? 'scale-105 shadow-2xl' : 'hover:scale-105'
                }`}
                style={{ 
                  borderColor: isActive ? activity.color : 'transparent',
                  boxShadow: isActive ? `0 25px 50px -12px ${activity.color}40` : undefined
                }}
                onClick={() => setActiveActivity(isActive ? null : activity.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${activity.color}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: activity.color }} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.level}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-gray-900 transition-colors">
                    {activity.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{activity.progress}%</span>
                    </div>
                    <Progress 
                      value={activity.progress} 
                      className="h-2"
                      style={{
                        '--progress-color': activity.color
                      } as React.CSSProperties}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{activity.participants.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-white border-0 hover:opacity-90 transition-all duration-300"
                    style={{ backgroundColor: activity.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartActivity(activity);
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isActive ? 'Continuar' : 'Iniciar'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 text-lg px-8 py-4 hover:bg-gray-50"
            style={{ borderColor: '#A1CC79', color: '#A1CC79' }}
          >
            Ver Todas as Atividades
          </Button>
        </div>
      </div>
    </section>
  );
}