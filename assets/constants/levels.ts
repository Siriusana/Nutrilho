// ============================================
// SISTEMA DE NÍVEIS E PROGRESSÃO - NUTRILHO
// ============================================

import type { Level } from '../types';
import { BRAND_COLORS } from './colors';

export const LEVELS: Level[] = [
  {
    level: 1,
    title: 'Iniciante Saudável',
    minPoints: 0,
    maxPoints: 99,
    benefits: ['Acesso a atividades básicas', '5 vídeos por semana', '10 receitas'],
    icon: '🌱',
    color: BRAND_COLORS.green,
  },
  {
    level: 2,
    title: 'Explorador Nutricional',
    minPoints: 100,
    maxPoints: 299,
    benefits: ['Acesso a atividades intermediárias', '10 vídeos por semana', '25 receitas', 'Badge especial'],
    icon: '🌿',
    color: BRAND_COLORS.teal,
  },
  {
    level: 3,
    title: 'Nutricionista Aprendiz',
    minPoints: 300,
    maxPoints: 599,
    benefits: ['Acesso a todas atividades', '20 vídeos por semana', '50 receitas', 'Certificado digital', 'Suporte prioritário'],
    icon: '🥗',
    color: BRAND_COLORS.purple,
  },
  {
    level: 4,
    title: 'Mestre em Alimentação',
    minPoints: 600,
    maxPoints: 999,
    benefits: ['Conteúdo exclusivo', 'Vídeos ilimitados', '100 receitas premium', 'Consultoria mensal', 'Badge Mestre'],
    icon: '👨‍🍳',
    color: BRAND_COLORS.coral,
  },
  {
    level: 5,
    title: 'Especialista NUTRILHO',
    minPoints: 1000,
    maxPoints: Infinity,
    benefits: ['Acesso VIP completo', 'Todo conteúdo liberado', 'Consultoria ilimitada', 'Badge Lendário', 'Aparecer no Hall da Fama'],
    icon: '🏆',
    color: '#FFD700', // Dourado
  },
];

// Configurações de pontos
export const POINTS_CONFIG = {
  // Atividades
  completeActivity: 10,
  completeQuiz: 15,
  completeChallenge: 20,
  perfectScore: 25,

  // Vídeos
  watchVideo: 5,
  completeVideoSeries: 30,
  shareVideo: 10,

  // Receitas
  viewRecipe: 2,
  favoriteRecipe: 5,
  cookRecipe: 15,
  shareRecipe: 10,

  // Social
  inviteFriend: 50,
  helpCommunity: 20,
  createContent: 40,

  // Streak
  dailyLogin: 5,
  weekStreak: 50,
  monthStreak: 200,

  // Milestones
  firstActivity: 25,
  tenthActivity: 50,
  fiftiethActivity: 100,
  hundredthActivity: 250,
};

// Funções auxiliares
export const getLevelByPoints = (points: number): Level => {
  return LEVELS.find(level => points >= level.minPoints && points <= level.maxPoints) || LEVELS[0];
};

export const getNextLevel = (currentLevel: number): Level | null => {
  return LEVELS.find(level => level.level === currentLevel + 1) || null;
};

export const getPointsToNextLevel = (currentPoints: number, currentLevel: number): number => {
  const nextLevel = getNextLevel(currentLevel);
  return nextLevel ? nextLevel.minPoints - currentPoints : 0;
};

export const getProgressPercentage = (currentPoints: number, currentLevel: number): number => {
  const level = LEVELS.find(l => l.level === currentLevel);
  if (!level) return 0;
  
  const pointsInLevel = currentPoints - level.minPoints;
  const levelRange = level.maxPoints - level.minPoints;
  
  return Math.min((pointsInLevel / levelRange) * 100, 100);
};

export default LEVELS;