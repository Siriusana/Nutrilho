// ============================================
// PALETA DE CORES - NUTRILHO
// ============================================

import type { BrandColors } from '../types';

export const BRAND_COLORS: BrandColors = {
  teal: '#79CACC',    
  purple: '#A479CC',  
  coral: '#CC7B79',   
  green: '#A1CC79',   
};

export const COLORS = {
  primary: BRAND_COLORS.green,
  secondary: BRAND_COLORS.teal,
  accent: BRAND_COLORS.purple,
  highlight: BRAND_COLORS.coral,

  activities: BRAND_COLORS.teal,
  videos: BRAND_COLORS.purple,
  recipes: BRAND_COLORS.coral,
  about: BRAND_COLORS.green,

  success: BRAND_COLORS.green,
  info: BRAND_COLORS.teal,
  warning: '#FFC107',
  error: '#DC3545',

  gradients: {
    hero: `linear-gradient(135deg, ${BRAND_COLORS.green} 0%, ${BRAND_COLORS.teal} 100%)`,
    card: `linear-gradient(135deg, ${BRAND_COLORS.purple} 0%, ${BRAND_COLORS.coral} 100%)`,
    button: `linear-gradient(135deg, ${BRAND_COLORS.teal} 0%, ${BRAND_COLORS.purple} 100%)`,
  },
};

export const CSS_VARS = {
  '--nutrilho-teal': BRAND_COLORS.teal,
  '--nutrilho-purple': BRAND_COLORS.purple,
  '--nutrilho-coral': BRAND_COLORS.coral,
  '--nutrilho-green': BRAND_COLORS.green,
};

export default COLORS;