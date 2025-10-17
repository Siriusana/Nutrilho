// ============================================
// BIBLIOTECA DE VÍDEOS EDUCATIVOS - NUTRILHO
// ============================================

import type { Video } from '../types';
import { BRAND_COLORS } from '../constants/colors';

export const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'Introdução à Nutrição Saudável',
    description: 'Aprenda os fundamentos da nutrição e como fazer escolhas alimentares inteligentes para uma vida mais saudável.',
    thumbnail: 'nutrition education healthy',
    duration: '12:45',
    category: 'Nutrição Básica',
    color: BRAND_COLORS.teal,
    views: 45230,
    instructor: 'Dra. Ana Silva',
    level: 'Iniciante',
    tags: ['fundamentos', 'iniciante', 'educativo', 'essencial'],
    videoUrl: '#',
  },
  {
    id: 2,
    title: 'Como Montar um Prato Balanceado',
    description: 'Descubra o método do prato para criar refeições equilibradas com todos os nutrientes necessários.',
    thumbnail: 'balanced meal plate',
    duration: '8:30',
    category: 'Dicas',
    color: BRAND_COLORS.green,
    views: 38900,
    instructor: 'Nutricionista Carlos Mendes',
    level: 'Iniciante',
    tags: ['prato balanceado', 'prático', 'refeições', 'equilíbrio'],
    videoUrl: '#',
  },
  {
    id: 3,
    title: 'Smoothies Nutritivos para o Dia a Dia',
    description: 'Receitas fáceis e deliciosas de smoothies que vão turbinar sua alimentação com vitaminas e nutrientes.',
    thumbnail: 'colorful smoothies',
    duration: '15:20',
    category: 'Receitas',
    color: BRAND_COLORS.purple,
    views: 52100,
    instructor: 'Chef Marina Costa',
    level: 'Iniciante',
    tags: ['smoothies', 'receitas', 'vitaminas', 'prático'],
    videoUrl: '#',
  },
  {
    id: 4,
    title: 'Exercícios e Alimentação: A Combinação Perfeita',
    description: 'Entenda como sincronizar sua alimentação com a rotina de exercícios para maximizar os resultados.',
    thumbnail: 'exercise nutrition fitness',
    duration: '18:15',
    category: 'Exercícios',
    color: BRAND_COLORS.coral,
    views: 31500,
    instructor: 'Personal Trainer Roberto Lima',
    level: 'Intermediário',
    tags: ['exercícios', 'performance', 'treino', 'energia'],
    videoUrl: '#',
  },
  {
    id: 5,
    title: 'Leitura de Rótulos: Não Caia em Armadilhas',
    description: 'Aprenda a decifrar rótulos alimentares e identificar ingredientes escondidos que podem prejudicar sua saúde.',
    thumbnail: 'food labels nutrition facts',
    duration: '10:40',
    category: 'Educativo',
    color: BRAND_COLORS.teal,
    views: 28700,
    instructor: 'Dra. Ana Silva',
    level: 'Iniciante',
    tags: ['rótulos', 'ingredientes', 'consciente', 'educativo'],
    videoUrl: '#',
  },
  {
    id: 6,
    title: 'Meal Prep: Organize Suas Refeições da Semana',
    description: 'Técnicas profissionais de preparação antecipada de refeições para economizar tempo e manter a dieta em dia.',
    thumbnail: 'meal prep containers',
    duration: '22:30',
    category: 'Dicas',
    color: BRAND_COLORS.green,
    views: 64800,
    instructor: 'Chef Marina Costa',
    level: 'Intermediário',
    tags: ['meal prep', 'organização', 'planejamento', 'produtividade'],
    videoUrl: '#',
  },
  {
    id: 7,
    title: 'Proteínas Vegetais: Guia Completo',
    description: 'Conheça as melhores fontes de proteína vegetal e como incorporá-las na sua alimentação diária.',
    thumbnail: 'plant based protein',
    duration: '14:55',
    category: 'Nutrição Básica',
    color: BRAND_COLORS.teal,
    views: 41200,
    instructor: 'Nutricionista Carlos Mendes',
    level: 'Intermediário',
    tags: ['proteínas', 'vegetal', 'plant-based', 'vegetariano'],
    videoUrl: '#',
  },
  {
    id: 8,
    title: 'Sobremesas Saudáveis e Deliciosas',
    description: 'Receitas incríveis de sobremesas nutritivas que não prejudicam sua dieta e satisfazem o desejo por doces.',
    thumbnail: 'healthy desserts',
    duration: '16:45',
    category: 'Receitas',
    color: BRAND_COLORS.purple,
    views: 58300,
    instructor: 'Chef Marina Costa',
    level: 'Iniciante',
    tags: ['sobremesas', 'doces saudáveis', 'receitas', 'sem culpa'],
    videoUrl: '#',
  },
  {
    id: 9,
    title: 'Hidratação: Além da Água',
    description: 'Descubra diferentes formas de manter-se hidratado e a importância da hidratação para o organismo.',
    thumbnail: 'hydration water infused',
    duration: '9:20',
    category: 'Educativo',
    color: BRAND_COLORS.teal,
    views: 35600,
    instructor: 'Dra. Ana Silva',
    level: 'Iniciante',
    tags: ['hidratação', 'água', 'saúde', 'bem-estar'],
    videoUrl: '#',
  },
  {
    id: 10,
    title: 'Alimentação Pré e Pós-Treino',
    description: 'Estratégias nutricionais para otimizar sua performance antes do treino e acelerar a recuperação depois.',
    thumbnail: 'pre workout meal',
    duration: '13:10',
    category: 'Exercícios',
    color: BRAND_COLORS.coral,
    views: 47900,
    instructor: 'Personal Trainer Roberto Lima',
    level: 'Intermediário',
    tags: ['treino', 'performance', 'recuperação', 'energia'],
    videoUrl: '#',
  },
  {
    id: 11,
    title: 'Superalimentos: Mito ou Realidade?',
    description: 'Análise científica sobre os chamados superalimentos e quais realmente fazem diferença na sua saúde.',
    thumbnail: 'superfoods berries',
    duration: '11:35',
    category: 'Educativo',
    color: BRAND_COLORS.teal,
    views: 33400,
    instructor: 'Dra. Ana Silva',
    level: 'Avançado',
    tags: ['superalimentos', 'ciência', 'nutrientes', 'educativo'],
    videoUrl: '#',
  },
  {
    id: 12,
    title: 'Lanches Saudáveis para Levar',
    description: 'Ideias práticas e nutritivas de lanches que você pode preparar e levar para qualquer lugar.',
    thumbnail: 'healthy snacks portable',
    duration: '12:00',
    category: 'Receitas',
    color: BRAND_COLORS.purple,
    views: 56700,
    instructor: 'Chef Marina Costa',
    level: 'Iniciante',
    tags: ['lanches', 'portátil', 'prático', 'snacks'],
    videoUrl: '#',
  },
];

// Funções auxiliares
export const getVideosByCategory = (category: string): Video[] => {
  return VIDEOS.filter(video => video.category === category);
};

export const getVideoById = (id: number): Video | undefined => {
  return VIDEOS.find(video => video.id === id);
};

export const getVideosByLevel = (level: string): Video[] => {
  return VIDEOS.filter(video => video.level === level);
};

export const searchVideos = (query: string): Video[] => {
  const lowerQuery = query.toLowerCase();
  return VIDEOS.filter(video =>
    video.title.toLowerCase().includes(lowerQuery) ||
    video.description.toLowerCase().includes(lowerQuery) ||
    video.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getMostViewedVideos = (limit: number = 5): Video[] => {
  return [...VIDEOS]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

export default VIDEOS;