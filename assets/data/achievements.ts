// ============================================
// SISTEMA DE CONQUISTAS - NUTRILHO
// ============================================

import type { Achievement } from '../types';
import { BRAND_COLORS } from '../constants/colors';

export const ACHIEVEMENTS: Achievement[] = [
  // Vídeos
  {
    id: 'first-video',
    title: 'Primeiro Vídeo',
    description: 'Assista seu primeiro vídeo educativo',
    icon: '🎬',
    color: BRAND_COLORS.purple,
    points: 5,
    requirement: 1,
    type: 'videos',
  },
  {
    id: 'five-videos',
    title: 'Cinéfilo Saudável',
    description: 'Assista 5 vídeos educativos',
    icon: '🎥',
    color: BRAND_COLORS.purple,
    points: 15,
    requirement: 5,
    type: 'videos',
  },
  {
    id: 'twenty-videos',
    title: 'Estudioso da Nutrição',
    description: 'Assista 20 vídeos educativos',
    icon: '📚',
    color: BRAND_COLORS.purple,
    points: 50,
    requirement: 20,
    type: 'videos',
  },
  {
    id: 'fifty-videos',
    title: 'Expert em Vídeos',
    description: 'Assista 50 vídeos educativos',
    icon: '🎓',
    color: BRAND_COLORS.purple,
    points: 100,
    requirement: 50,
    type: 'videos',
  },

  // Receitas
  {
    id: 'first-recipe',
    title: 'Primeira Receita',
    description: 'Visualize sua primeira receita',
    icon: '👨‍🍳',
    color: BRAND_COLORS.coral,
    points: 5,
    requirement: 1,
    type: 'recipes',
  },
  {
    id: 'ten-recipes',
    title: 'Chef Aprendiz',
    description: 'Visualize 10 receitas diferentes',
    icon: '🥘',
    color: BRAND_COLORS.coral,
    points: 20,
    requirement: 10,
    type: 'recipes',
  },
  {
    id: 'thirty-recipes',
    title: 'Cozinheiro Profissional',
    description: 'Visualize 30 receitas diferentes',
    icon: '👩‍🍳',
    color: BRAND_COLORS.coral,
    points: 60,
    requirement: 30,
    type: 'recipes',
  },
  {
    id: 'fifty-recipes',
    title: 'Mestre Cuca',
    description: 'Visualize 50 receitas diferentes',
    icon: '🍽️',
    color: BRAND_COLORS.coral,
    points: 120,
    requirement: 50,
    type: 'recipes',
  },

  // Atividades
  {
    id: 'first-activity',
    title: 'Primeira Atividade',
    description: 'Complete sua primeira atividade',
    icon: '🎯',
    color: BRAND_COLORS.teal,
    points: 10,
    requirement: 1,
    type: 'activities',
  },
  {
    id: 'five-activities',
    title: 'Participante Ativo',
    description: 'Complete 5 atividades',
    icon: '⭐',
    color: BRAND_COLORS.teal,
    points: 25,
    requirement: 5,
    type: 'activities',
  },
  {
    id: 'ten-activities',
    title: 'Dedicado',
    description: 'Complete 10 atividades',
    icon: '🌟',
    color: BRAND_COLORS.teal,
    points: 50,
    requirement: 10,
    type: 'activities',
  },
  {
    id: 'twenty-activities',
    title: 'Super Dedicado',
    description: 'Complete 20 atividades',
    icon: '💫',
    color: BRAND_COLORS.teal,
    points: 100,
    requirement: 20,
    type: 'activities',
  },

  // Pontos
  {
    id: 'hundred-points',
    title: 'Centenário',
    description: 'Alcance 100 pontos',
    icon: '💯',
    color: BRAND_COLORS.green,
    points: 10,
    requirement: 100,
    type: 'points',
  },
  {
    id: 'five-hundred-points',
    title: 'Quinhentos',
    description: 'Alcance 500 pontos',
    icon: '🎖️',
    color: BRAND_COLORS.green,
    points: 50,
    requirement: 500,
    type: 'points',
  },
  {
    id: 'thousand-points',
    title: 'Milhar',
    description: 'Alcance 1000 pontos',
    icon: '🏅',
    color: BRAND_COLORS.green,
    points: 100,
    requirement: 1000,
    type: 'points',
  },
  {
    id: 'five-thousand-points',
    title: 'Elite dos Pontos',
    description: 'Alcance 5000 pontos',
    icon: '👑',
    color: BRAND_COLORS.green,
    points: 500,
    requirement: 5000,
    type: 'points',
  },

  // Streak (Sequência)
  {
    id: 'three-day-streak',
    title: 'Três Dias Seguidos',
    description: 'Acesse o NUTRILHO por 3 dias consecutivos',
    icon: '🔥',
    color: BRAND_COLORS.coral,
    points: 15,
    requirement: 3,
    type: 'streak',
  },
  {
    id: 'week-streak',
    title: 'Semana Completa',
    description: 'Acesse o NUTRILHO por 7 dias consecutivos',
    icon: '🔥',
    color: BRAND_COLORS.coral,
    points: 50,
    requirement: 7,
    type: 'streak',
  },
  {
    id: 'month-streak',
    title: 'Mês Inteiro',
    description: 'Acesse o NUTRILHO por 30 dias consecutivos',
    icon: '🔥',
    color: BRAND_COLORS.coral,
    points: 200,
    requirement: 30,
    type: 'streak',
  },
  {
    id: 'hundred-day-streak',
    title: 'Cem Dias de Fogo',
    description: 'Acesse o NUTRILHO por 100 dias consecutivos',
    icon: '🔥',
    color: BRAND_COLORS.coral,
    points: 1000,
    requirement: 100,
    type: 'streak',
  },

  // Níveis
  {
    id: 'level-2',
    title: 'Nível 2 Alcançado',
    description: 'Chegue ao nível 2',
    icon: '🌿',
    color: BRAND_COLORS.teal,
    points: 20,
    requirement: 2,
    type: 'level',
  },
  {
    id: 'level-3',
    title: 'Nível 3 Alcançado',
    description: 'Chegue ao nível 3',
    icon: '🥗',
    color: BRAND_COLORS.purple,
    points: 50,
    requirement: 3,
    type: 'level',
  },
  {
    id: 'level-4',
    title: 'Nível 4 Alcançado',
    description: 'Chegue ao nível 4',
    icon: '👨‍🍳',
    color: BRAND_COLORS.coral,
    points: 100,
    requirement: 4,
    type: 'level',
  },
  {
    id: 'level-5',
    title: 'Nível Máximo!',
    description: 'Chegue ao nível 5 - Especialista NUTRILHO',
    icon: '🏆',
    color: '#FFD700',
    points: 250,
    requirement: 5,
    type: 'level',
  },
];

// Funções auxiliares
export const getAchievementsByType = (type: string): Achievement[] => {
  return ACHIEVEMENTS.filter(achievement => achievement.type === type);
};

export const getAchievementById = (id: string): Achievement | undefined => {
  return ACHIEVEMENTS.find(achievement => achievement.id === id);
};

export const checkAchievement = (type: string, currentValue: number): Achievement | null => {
  const relevantAchievements = getAchievementsByType(type)
    .filter(achievement => !achievement.unlockedAt)
    .sort((a, b) => a.requirement - b.requirement);

  for (const achievement of relevantAchievements) {
    if (currentValue >= achievement.requirement) {
      return achievement;
    }
  }

  return null;
};

export const getProgressToNextAchievement = (type: string, currentValue: number): {
  nextAchievement: Achievement | null;
  progress: number;
  remaining: number;
} => {
  const nextAchievement = getAchievementsByType(type)
    .filter(a => !a.unlockedAt && currentValue < a.requirement)
    .sort((a, b) => a.requirement - b.requirement)[0];

  if (!nextAchievement) {
    return { nextAchievement: null, progress: 100, remaining: 0 };
  }

  const progress = (currentValue / nextAchievement.requirement) * 100;
  const remaining = nextAchievement.requirement - currentValue;

  return { nextAchievement, progress, remaining };
};

export const getTotalAchievementPoints = (unlockedAchievements: string[]): number => {
  return ACHIEVEMENTS
    .filter(achievement => unlockedAchievements.includes(achievement.id))
    .reduce((total, achievement) => total + achievement.points, 0);
};

export default ACHIEVEMENTS;