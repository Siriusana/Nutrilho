export interface User {
  id: string;
  name: string;
  points: number;
  level: number;
  achievements: string[];
  streak: number;
  avatar?: string;
}

export interface AppContextType {
  userPoints: number;
  userLevel: number;
  addPoints: (points: number) => void;
  achievements: string[];
  addAchievement: (achievement: string) => void;
  favorites: Favorites;
  toggleFavorite: (type: FavoriteType, id: number) => void;
}

export interface Favorites {
  videos: number[];
  recipes: number[];
  activities: number[];
}

export type FavoriteType = 'videos' | 'recipes' | 'activities';

// Receitas
export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: RecipeCategory;
  color: string;
  servings: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export type RecipeCategory = 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Lanche' | 'Sobremesa';

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: VideoCategory;
  color: string;
  views: number;
  instructor: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  tags: string[];
  videoUrl?: string;
}

export type VideoCategory = 'Nutrição Básica' | 'Receitas' | 'Exercícios' | 'Dicas' | 'Educativo';

export interface Activity {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  points: number;
  type: ActivityType;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  estimatedTime: string;
  completed?: boolean;
  progress?: number;
}

export type ActivityType = 'quiz' | 'challenge' | 'game' | 'reading' | 'practice';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  points: number;
  requirement: number;
  type: AchievementType;
  unlockedAt?: Date;
}

export type AchievementType = 'videos' | 'recipes' | 'activities' | 'points' | 'streak' | 'level';

export interface Level {
  level: number;
  title: string;
  minPoints: number;
  maxPoints: number;
  benefits: string[];
  icon: string;
  color: string;
}

export interface MenuItem {
  href: string;
  label: string;
  icon: string;
  color: string;
}

export interface BrandColors {
  teal: string;
  purple: string;
  coral: string;
  green: string;
}