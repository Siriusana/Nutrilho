import React, { useState, createContext, useContext, useLayoutEffect } from 'react';
import {
  Leaf, Activity, Play, ChefHat, Menu, X, Heart, Star, Clock, Users, Trophy,
  ArrowRight, Sparkles, Bookmark, Eye, Brain, Target
} from 'lucide-react';

// --- BÔNUS: Hook para Responsividade Correta ---
// Este hook ouve as mudanças de tamanho da janela e atualiza o componente
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize(); // Chama uma vez no início
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return { width: size[0], height: size[1] };
}
// ----------------------------------------------

// Cores do Brand
const COLORS = {
  teal: '#79CACC',
  purple: '#A479CC',
  coral: '#CC7B79',
  green: '#A1CC79',
};

// Context para gerenciar pontos
interface AppContextType {
  userPoints: number;
  addPoints: (points: number) => void;
  favorites: {
    videos: number[];
    recipes: number[];
    activities: number[];
  };
  toggleFavorite: (type: 'videos' | 'recipes' | 'activities', id: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userPoints, setUserPoints] = useState<number>(0);
  const [favorites, setFavorites] = useState<{ videos: number[]; recipes: number[]; activities: number[] }>({ videos: [], recipes: [], activities: [] });

  const addPoints = (points: number) => setUserPoints(prev => prev + points);

  const toggleFavorite = (type: 'videos' | 'recipes' | 'activities', id: number) => {
    setFavorites(prev => {
      const list = prev[type];
      const exists = list.includes(id);
      return {
        ...prev,
        [type]: exists ? list.filter(i => i !== id) : [...list, id],
      };
    });
  };

  return (
    <AppContext.Provider value={{ userPoints, addPoints, favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

// ✅ CORREÇÃO 1: Adicionado 'export' para que o hook possa ser importado
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Estilos globais
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  button: {
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    border: '2px solid #f0f0f0',
  }
};

// Header Component
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userPoints } = useApp();
  const { width } = useWindowSize(); // ✅ CORREÇÃO 3: Usando o hook
  
  const isDesktop = width >= 768;
  const isMobile = !isDesktop;

  return (
    <header style={{
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    }}>
      <div style={{ ...styles.container, padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.green,
              boxShadow: '0 4px 12px rgba(161, 204, 121, 0.3)',
            }}>
              <Leaf size={28} color="white" />
            </div>
            <span style={{ fontSize: '28px', fontWeight: '700', color: COLORS.green, letterSpacing: '-0.5px' }}>
              NUTRILHO
            </span>
          </div>

          {/* Desktop Menu */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ display: isDesktop ? 'flex' : 'none', gap: '32px' }}>
              <a href="#atividades" style={{ fontSize: '18px', fontWeight: '500', color: COLORS.teal, textDecoration: 'none', transition: 'opacity 0.2s' }}>
                Atividades
              </a>
              <a href="#videos" style={{ fontSize: '18px', fontWeight: '500', color: COLORS.purple, textDecoration: 'none', transition: 'opacity 0.2s' }}>
                Vídeos
              </a>
              <a href="#receitas" style={{ fontSize: '18px', fontWeight: '500', color: COLORS.coral, textDecoration: 'none', transition: 'opacity 0.2s' }}>
                Receitas
              </a>
              <a href="#sobre" style={{ fontSize: '18px', fontWeight: '500', color: COLORS.green, textDecoration: 'none', transition: 'opacity 0.2s' }}>
                Sobre
              </a>
            </div>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              display: isDesktop ? 'flex' : 'none',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 20px',
              borderRadius: '25px',
              backgroundColor: '#f3f4f6',
            }}>
              <Trophy size={20} color={COLORS.green} />
              <span style={{ fontWeight: '600', fontSize: '18px' }}>{userPoints} pts</span>
            </div>

            <button
              style={{
                ...styles.button,
                display: isDesktop ? 'inline-flex' : 'none',
                padding: '14px 32px',
                backgroundColor: COLORS.purple,
                color: 'white',
                borderRadius: '12px',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(164, 121, 204, 0.3)',
              }}
            >
              Começar Agora
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ ...styles.button, padding: '8px', backgroundColor: 'transparent', display: isMobile ? 'inline-flex' : 'none' }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#atividades" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px', fontWeight: '500', color: COLORS.teal }}>
                <Activity size={20} />
                Atividades
              </a>
              <a href="#videos" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px', fontWeight: '500', color: COLORS.purple }}>
                <Play size={20} />
                Vídeos
              </a>
              <a href="#receitas" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px', fontWeight: '500', color: COLORS.coral }}>
                <ChefHat size={20} />
                Receitas
              </a>
              <a href="#sobre" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px', fontWeight: '500', color: COLORS.green }}>
                <Leaf size={20} />
                Sobre
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
export const HeroSection = () => {
  const { width } = useWindowSize(); // ✅ CORREÇÃO 3: Usando o hook
  const isDesktop = width >= 768;
  const isSmallMobile = width < 640;

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 50%, #faf5ff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ ...styles.container, padding: '80px 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <Sparkles size={32} color={COLORS.green} />
            <span style={{ fontSize: '20px', fontWeight: '500', color: '#4b5563' }}>Alimentação Saudável</span>
          </div>

          <h1 style={{ fontSize: isDesktop ? '72px' : '48px', fontWeight: '700', lineHeight: '1.1', marginBottom: '40px', color: '#111827' }}>
            Descubra o Poder da
            <span style={{ display: 'block', marginTop: '12px', color: COLORS.green }}>
              Nutrição
            </span>
          </h1>

          <p style={{ fontSize: isDesktop ? '24px' : '20px', color: '#4b5563', maxWidth: '800px', margin: '0 auto 48px', lineHeight: '1.6' }}>
            Transforme sua relação com a comida através de atividades interativas,
            vídeos educativos e receitas deliciosas que nutrem corpo e mente.
          </p>

          <div style={{ display: 'flex', flexDirection: isSmallMobile ? 'column' : 'row', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
            <button
              style={{
                ...styles.button,
                padding: '20px 40px',
                backgroundColor: COLORS.purple,
                color: 'white',
                borderRadius: '16px',
                fontSize: '20px',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(164, 121, 204, 0.4)',
              }}
            >
              Explorar Atividades
              <ArrowRight size={24} />
            </button>

            <button
              style={{
                ...styles.button,
                padding: '20px 40px',
                backgroundColor: 'transparent',
                color: COLORS.teal,
                borderRadius: '16px',
                fontSize: '20px',
                fontWeight: '600',
                border: `3px solid ${COLORS.teal}`,
              }}
            >
              <Play size={24} />
              Assistir Vídeos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Activities Section
export const ActivitiesSection = () => {
  const { addPoints } = useApp();
  const { width } = useWindowSize(); // ✅ CORREÇÃO 3: Usando o hook

  const activities = [
    { id: 1, title: "Quiz Nutricional", description: "Teste seus conhecimentos sobre nutrição", icon: Brain, color: COLORS.teal, difficulty: "Médio", time: "10 min" },
    { id: 2, title: "Desafio Saudável", description: "Complete desafios diários de alimentação", icon: Target, color: COLORS.purple, difficulty: "Fácil", time: "5 min" },
    { id: 3, title: "Jogo da Pirâmide", description: "Monte uma pirâmide alimentar equilibrada", icon: Trophy, color: COLORS.coral, difficulty: "Médio", time: "8 min" }
  ];

  const columns = width >= 1024 ? 'repeat(3, 1fr)' : width >= 768 ? 'repeat(2, 1fr)' : '1fr';

  return (
    <section id="atividades" style={{ padding: '96px 0', background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)' }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <Brain size={40} color={COLORS.green} />
            <span style={{ fontSize: '24px', fontWeight: '600', color: COLORS.green }}>Atividades Interativas</span>
          </div>

          <h2 style={{ fontSize: width >= 768 ? '56px' : '40px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
            Aprenda Brincando
          </h2>

          <p style={{ fontSize: '22px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Desenvolva hábitos alimentares saudáveis através de jogos educativos e desafios divertidos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: columns, gap: '40px' }}>
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.id}
                style={{
                  ...styles.card,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${activity.color}20`,
                  }}>
                    <IconComponent size={32} color={activity.color} />
                  </div>
                  <span style={{ padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '25px', fontSize: '14px', fontWeight: '600' }}>
                    {activity.difficulty}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                    {activity.title}
                  </h3>

                  <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    {activity.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af' }}>
                    <Clock size={20} />
                    <span style={{ fontWeight: '500' }}>{activity.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => addPoints(15)}
                  style={{
                    ...styles.button,
                    width: '100%',
                    padding: '16px',
                    backgroundColor: activity.color,
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '18px',
                    boxShadow: `0 4px 12px ${activity.color}40`,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Iniciar Atividade
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Videos Section
export const VideosSection = () => {
  const { toggleFavorite, favorites } = useApp();
  const { width } = useWindowSize(); // ✅ CORREÇÃO 3: Usando o hook

  const videos = [
    { id: 1, title: "Smoothies Nutritivos", duration: "8:24", views: "15.4k", color: COLORS.teal },
    { id: 2, title: "Nutrição Infantil", duration: "12:15", views: "8.9k", color: COLORS.purple },
    { id: 3, title: "Horta em Casa", duration: "15:32", views: "22.1k", color: COLORS.green }
  ];

  const columns = width >= 1024 ? 'repeat(3, 1fr)' : width >= 768 ? 'repeat(2, 1fr)' : '1fr';

  return (
    <section id="videos" style={{ padding: '96px 0', backgroundColor: '#fff' }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <Play size={40} color={COLORS.purple} />
            <span style={{ fontSize: '24px', fontWeight: '600', color: COLORS.purple }}>Biblioteca de Vídeos</span>
          </div>

          <h2 style={{ fontSize: width >= 768 ? '56px' : '40px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
            Aprenda com Especialistas
          </h2>

          <p style={{ fontSize: '22px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Acesse vídeos educativos sobre nutrição, culinária saudável e bem-estar.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: columns, gap: '40px' }}>
          {videos.map((video) => (
            <div
              key={video.id}
              style={{
                ...styles.card,
                padding: 0,
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{
                height: '224px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${video.color}20`,
                position: 'relative',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: video.color,
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Play size={40} color="white" style={{ marginLeft: '4px' }} />
                </div>
                <span style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <Clock size={16} />
                  {video.duration}
                </span>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                  {video.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af' }}>
                    <Eye size={20} />
                    <span style={{ fontWeight: '500' }}>{video.views}</span>
                  </div>

                  <button
                    onClick={() => toggleFavorite('videos', video.id)}
                    style={{
                      ...styles.button,
                      padding: '12px',
                      backgroundColor: 'transparent',
                      borderRadius: '50%',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Heart
                      size={24}
                      color={favorites.videos.includes(video.id) ? '#ef4444' : '#9ca3af'}
                      fill={favorites.videos.includes(video.id) ? '#ef4444' : 'none'}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Recipes Section
export const RecipesSection = () => {
  const { toggleFavorite, favorites } = useApp();
  const { width } = useWindowSize(); // ✅ CORREÇÃO 3: Usando o hook

  const recipes = [
    { id: 1, title: "Bowl de Quinoa", time: "20 min", servings: 2, difficulty: "Fácil", color: COLORS.teal, rating: 4.8 },
    { id: 2, title: "Sopa Detox", time: "35 min", servings: 4, difficulty: "Médio", color: COLORS.purple, rating: 4.6 },
    { id: 3, title: "Salada Verde", time: "15 min", servings: 3, difficulty: "Fácil", color: COLORS.green, rating: 4.9 }
  ];

  const columns = width >= 1024 ? 'repeat(3, 1fr)' : width >= 768 ? 'repeat(2, 1fr)' : '1fr';

  return (
    <section id="receitas" style={{ padding: '96px 0', background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)' }}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <ChefHat size={40} color={COLORS.coral} />
            <span style={{ fontSize: '24px', fontWeight: '600', color: COLORS.coral }}>Receitas Saudáveis</span>
          </div>

          <h2 style={{ fontSize: width >= 768 ? '56px' : '40px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
            Sabor & Nutrição
          </h2>

          <p style={{ fontSize: '22px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Descubra receitas deliciosas e nutritivas que transformam ingredientes simples.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: columns, gap: '40px' }}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                ...styles.card,
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{
                height: '224px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${recipe.color}20`,
                position: 'relative',
              }}>
                <ChefHat size={80} color={recipe.color} />
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '8px 16px',
                  backgroundColor: recipe.color,
                  color: 'white',
                  borderRadius: '25px',
                  fontWeight: '600',
                }}>
                  {recipe.difficulty}
                </span>
                <button
                  onClick={() => toggleFavorite('recipes', recipe.id)}
                  style={{
                    ...styles.button,
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '12px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Bookmark
                    size={20}
                    color={favorites.recipes.includes(recipe.id) ? '#eab308' : '#9ca3af'}
                    fill={favorites.recipes.includes(recipe.id) ? '#eab308' : 'none'}
                  />
                </button>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  backgroundColor: 'white',
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}>
                  <Star size={16} color="#eab308" fill="#eab308" />
                  <span style={{ fontWeight: '600' }}>{recipe.rating}</span>
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                  {recipe.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #f3f4f6', color: '#6b7280' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={20} />
                    <span style={{ fontWeight: '500' }}>{recipe.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={20} />
                    <span style={{ fontWeight: '500' }}>{recipe.servings} pessoas</span>
                  </div>
                </div>

                <button
                  style={{
                    ...styles.button,
                    width: '100%',
                    padding: '16px',
                    backgroundColor: recipe.color,
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '18px',
                    boxShadow: `0 4px 12px ${recipe.color}40`,
                    marginTop: 'auto',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Ver Receita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ CORREÇÃO 2: Criado o componente 'App' e exportado como padrão
function App() {
  return (
    <AppProvider>
      <Header />
      <main>
        <HeroSection />
        <ActivitiesSection />
        <VideosSection />
        <RecipesSection />
        {/* <Footer />  Você pode adicionar um rodapé aqui */}
      </main>
    </AppProvider>
  );
}

export default App;