export * from './types';

// Constants
export { BRAND_COLORS, COLORS, CSS_VARS } from './constants/colors';
export { LEVELS, POINTS_CONFIG, getLevelByPoints, getNextLevel, getPointsToNextLevel, getProgressPercentage } from './constants/levels';
export { MAIN_MENU, FOOTER_LINKS, EXTERNAL_LINKS } from './constants/routes';

// Data
export { RECIPES, getRecipesByCategory, getRecipeById, searchRecipes } from './data/recipes';
export { VIDEOS, getVideosByCategory, getVideoById, getVideosByLevel, searchVideos, getMostViewedVideos } from './data/videos';
export { ACTIVITIES, ACTIVITY_CATEGORIES, getActivitiesByType, getActivityById, getActivitiesByDifficulty, getCompletedActivities, getInProgressActivities, calculateTotalPoints } from './data/activities';
export { ACHIEVEMENTS, getAchievementsByType, getAchievementById, checkAchievement, getProgressToNextAchievement, getTotalAchievementPoints } from './data/achievements';

// Icons
export { NutrilhoLogo, NutrilhoIcon, NutrilhoLogoDark } from './icons/NutrilhoLogo';