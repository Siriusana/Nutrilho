import { useState, useEffect, createContext, useContext } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { InteractiveActivities } from "./components/InteractiveActivities";
import { VideoLibrary } from "./components/VideoLibrary";
import { RecipesSection } from "./components/RecipesSection";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Trophy, Star, Flame, Award } from "lucide-react";
import { motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";

interface AppContextType {
  userPoints: number;
  userLevel: number;
  addPoints: (points: number) => void;
  achievements: string[];
  addAchievement: (achievement: string) => void;
  favorites: {
    videos: number[];
    recipes: number[];
    activities: number[];
  };
  toggleFavorite: (
    type: "videos" | "recipes" | "activities",
    id: number
  ) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp deve ser usado dentro de AppProvider");
  }
  return context;
};

function GamificationPanel() {
  const { userPoints, userLevel, achievements } = useApp();
  const [isVisible, setIsVisible] = useState(true);

  const pointsToNextLevel = (userLevel + 1) * 100;
  const progress = ((userPoints % 100) / pointsToNextLevel) * 100;

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: isVisible ? 0 : 300, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 top-24 z-40 w-72 hidden lg:block"
    >
      <Card
        className="bg-white/95 backdrop-blur-sm shadow-xl border-2"
        style={{ borderColor: "#A1CC79" }}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#A1CC79" }}
              >
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Nível {userLevel}</h3>
                <p className="text-xs text-gray-500">Nutricionista</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >
              ✕
            </Button>
          </div>

          {/* Pontos */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{userPoints} Pontos</span>
              </div>
              <span className="text-xs text-gray-500">
                {pointsToNextLevel - (userPoints % 100)} para próximo nível
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: "#A1CC79" }}
              />
            </div>
          </div>

          {}
          <div>
            <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: "#A479CC" }} />
              Conquistas ({achievements.length})
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {achievements.length === 0 ? (
                <p className="text-xs text-gray-500">
                  Complete atividades para ganhar conquistas!
                </p>
              ) : (
                achievements.slice(-3).map((achievement, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="w-full justify-start text-xs"
                  >
                    <Flame
                      className="w-3 h-3 mr-2"
                      style={{ color: "#CC7B79" }}
                    />
                    {achievement}
                  </Badge>
                ))
              )}
            </div>
          </div>

          {/* Streak */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Sequência</span>
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-semibold" style={{ color: "#CC7B79" }}>
                  3 dias
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botão para reabrir se fechado */}
      {!isVisible && (
        <Button
          onClick={() => setIsVisible(true)}
          className="absolute top-0 right-0 rounded-full w-12 h-12 shadow-lg"
          style={{ backgroundColor: "#A1CC79" }}
        >
          <Trophy className="w-5 h-5 text-white" />
        </Button>
      )}
    </motion.div>
  );
}

// Componente Principal
export default function App() {
  // Estados globais
  const [userPoints, setUserPoints] = useState(150);
  const [userLevel, setUserLevel] = useState(1);
  const [achievements, setAchievements] = useState<string[]>([
    "Primeira Atividade Concluída",
    "5 Vídeos Assistidos",
  ]);
  const [favorites, setFavorites] = useState<{
    videos: number[];
    recipes: number[];
    activities: number[];
  }>({
    videos: [],
    recipes: [],
    activities: [],
  });

  const addPoints = (points: number) => {
    const newPoints = userPoints + points;
    setUserPoints(newPoints);

    const newLevel = Math.floor(newPoints / 100) + 1;
    if (newLevel > userLevel) {
      setUserLevel(newLevel);
      addAchievement(`Alcançou Nível ${newLevel}`);
    }
  };

  const addAchievement = (achievement: string) => {
    if (!achievements.includes(achievement)) {
      setAchievements([...achievements, achievement]);
    }
  };

  const toggleFavorite = (
    type: "videos" | "recipes" | "activities",
    id: number
  ) => {
    setFavorites((prev) => ({
      ...prev,
      [type]: prev[type].includes(id)
        ? prev[type].filter((itemId) => itemId !== id)
        : [...prev[type], id],
    }));
  };

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  // Persistir dados no localStorage (pode ser migrado para Supabase)
  useEffect(() => {
    const savedData = localStorage.getItem("nutrilho-user-data");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setUserPoints(parsed.userPoints || 0);
      setUserLevel(parsed.userLevel || 1);
      setAchievements(parsed.achievements || []);
      setFavorites(
        parsed.favorites || { videos: [], recipes: [], activities: [] }
      );
    }
  }, []);

  useEffect(() => {
    const dataToSave = {
      userPoints,
      userLevel,
      achievements,
      favorites,
    };
    localStorage.setItem("nutrilho-user-data", JSON.stringify(dataToSave));
  }, [userPoints, userLevel, achievements, favorites]);

  const contextValue: AppContextType = {
    userPoints,
    userLevel,
    addPoints,
    achievements,
    addAchievement,
    favorites,
    toggleFavorite,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen w-full bg-white overflow-x-hidden">
        <Toaster position="top-right" richColors />
        <Header />

        {/* Painel de Gamificação */}
        <GamificationPanel />

        <main>
          <HeroSection />
          <InteractiveActivities />
          <VideoLibrary />
          <RecipesSection />

          {/* Seção de Estatísticas */}
          <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6">Nossa Comunidade</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Milhares de pessoas já transformaram seus hábitos alimentares
                  com o NUTRILHO
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: "#79CACC" }}
                  >
                    50K+
                  </div>
                  <p className="text-gray-400">Usuários Ativos</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: "#A479CC" }}
                  >
                    200+
                  </div>
                  <p className="text-gray-400">Vídeos Educativos</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: "#CC7B79" }}
                  >
                    500+
                  </div>
                  <p className="text-gray-400">Receitas Saudáveis</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: "#A1CC79" }}
                  >
                    1M+
                  </div>
                  <p className="text-gray-400">Atividades Completadas</p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export { AppContext };
