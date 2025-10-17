// ============================================
// ATIVIDADES INTERATIVAS - NUTRILHO
// ============================================

import type { Activity } from '../types';
import { BRAND_COLORS } from '../constants/colors';

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: 'Quiz Nutricional',
    description: 'Teste seus conhecimentos sobre nutrição com 10 perguntas desafiadoras!',
    icon: 'Brain',
    color: BRAND_COLORS.teal,
    points: 15,
    type: 'quiz',
    difficulty: 'Médio',
    estimatedTime: '10 min',
    completed: false,
    progress: 0,
  },
  {
    id: 2,
    title: 'Desafio do Prato Colorido',
    description: 'Monte um prato balanceado com todos os grupos alimentares em 5 minutos!',
    icon: 'Utensils',
    color: BRAND_COLORS.green,
    points: 20,
    type: 'game',
    difficulty: 'Fácil',
    estimatedTime: '5 min',
    completed: false,
    progress: 0,
  },
  {
    id: 3,
    title: 'Caça-Palavras Saudável',
    description: 'Encontre 15 alimentos nutritivos escondidos neste caça-palavras!',
    icon: 'Search',
    color: BRAND_COLORS.purple,
    points: 10,
    type: 'game',
    difficulty: 'Fácil',
    estimatedTime: '8 min',
    completed: false,
    progress: 0,
  },
  {
    id: 4,
    title: 'Leitura: Pirâmide Alimentar',
    description: 'Aprenda sobre os diferentes grupos da pirâmide alimentar e suas funções.',
    icon: 'BookOpen',
    color: BRAND_COLORS.coral,
    points: 5,
    type: 'reading',
    difficulty: 'Fácil',
    estimatedTime: '12 min',
    completed: false,
    progress: 0,
  },
  {
    id: 5,
    title: 'Desafio Semanal de Hidratação',
    description: 'Beba 2 litros de água por dia durante 7 dias consecutivos!',
    icon: 'Droplets',
    color: BRAND_COLORS.teal,
    points: 50,
    type: 'challenge',
    difficulty: 'Médio',
    estimatedTime: '7 dias',
    completed: false,
    progress: 0,
  },
  {
    id: 6,
    title: 'Memória dos Nutrientes',
    description: 'Jogo da memória com alimentos e seus principais nutrientes!',
    icon: 'Sparkles',
    color: BRAND_COLORS.purple,
    points: 15,
    type: 'game',
    difficulty: 'Médio',
    estimatedTime: '10 min',
    completed: false,
    progress: 0,
  },
  {
    id: 7,
    title: 'Quiz Avançado de Macros',
    description: 'Teste avançado sobre macronutrientes: proteínas, carboidratos e gorduras.',
    icon: 'Calculator',
    color: BRAND_COLORS.coral,
    points: 25,
    type: 'quiz',
    difficulty: 'Difícil',
    estimatedTime: '15 min',
    completed: false,
    progress: 0,
  },
  {
    id: 8,
    title: 'Prática: Calcule Seu IMC',
    description: 'Aprenda a calcular e interpretar o Índice de Massa Corporal.',
    icon: 'Calculator',
    color: BRAND_COLORS.green,
    points: 10,
    type: 'practice',
    difficulty: 'Fácil',
    estimatedTime: '5 min',
    completed: false,
    progress: 0,
  },
  {
    id: 9,
    title: 'Desafio: 5 Porções de Frutas/Vegetais',
    description: 'Consuma pelo menos 5 porções de frutas e vegetais durante 3 dias!',
    icon: 'Apple',
    color: BRAND_COLORS.teal,
    points: 30,
    type: 'challenge',
    difficulty: 'Médio',
    estimatedTime: '3 dias',
    completed: false,
    progress: 0,
  },
  {
    id: 10,
    title: 'Monte Sua Salada Perfeita',
    description: 'Crie combinações deliciosas de saladas com ingredientes nutritivos!',
    icon: 'Salad',
    color: BRAND_COLORS.green,
    points: 15,
    type: 'game',
    difficulty: 'Fácil',
    estimatedTime: '7 min',
    completed: false,
    progress: 0,
  },
  {
    id: 11,
    title: 'Leitura: Açúcar e Seus Efeitos',
    description: 'Entenda como o açúcar afeta seu corpo e aprenda a reduzir o consumo.',
    icon: 'AlertCircle',
    color: BRAND_COLORS.coral,
    points: 8,
    type: 'reading',
    difficulty: 'Fácil',
    estimatedTime: '15 min',
    completed: false,
    progress: 0,
  },
  {
    id: 12,
    title: 'Desafio: Substituições Inteligentes',
    description: 'Faça 10 substituições saudáveis na sua alimentação durante 1 semana!',
    icon: 'RefreshCw',
    color: BRAND_COLORS.purple,
    points: 40,
    type: 'challenge',
    difficulty: 'Médio',
    estimatedTime: '7 dias',
    completed: false,
    progress: 0,
  },
];

// Categorias de atividades
export const ACTIVITY_CATEGORIES = [
  { type: 'quiz', label: 'Quiz', icon: 'Brain', color: BRAND_COLORS.teal },
  { type: 'game', label: 'Jogos', icon: 'Gamepad2', color: BRAND_COLORS.purple },
  { type: 'challenge', label: 'Desafios', icon: 'Target', color: BRAND_COLORS.coral },
  { type: 'reading', label: 'Leitura', icon: 'BookOpen', color: BRAND_COLORS.green },
  { type: 'practice', label: 'Prática', icon: 'Lightbulb', color: BRAND_COLORS.teal },
];

// Funções auxiliares
export const getActivitiesByType = (type: string): Activity[] => {
  return ACTIVITIES.filter(activity => activity.type === type);
};

export const getActivityById = (id: number): Activity | undefined => {
  return ACTIVITIES.find(activity => activity.id === id);
};

export const getActivitiesByDifficulty = (difficulty: string): Activity[] => {
  return ACTIVITIES.filter(activity => activity.difficulty === difficulty);
};

export const getCompletedActivities = (): Activity[] => {
  return ACTIVITIES.filter(activity => activity.completed === true);
};

export const getInProgressActivities = (): Activity[] => {
  return ACTIVITIES.filter(activity => activity.progress && activity.progress > 0 && activity.progress < 100);
};

export const calculateTotalPoints = (): number => {
  return ACTIVITIES.reduce((total, activity) => {
    return activity.completed ? total + activity.points : total;
  }, 0);
};

export default ACTIVITIES;