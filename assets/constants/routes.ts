// ============================================
// ROTAS E NAVEGAÇÃO - NUTRILHO
// ============================================

import type { MenuItem } from '../types';
import { BRAND_COLORS } from './colors';

export const MAIN_MENU: MenuItem[] = [
  {
    href: '#atividades',
    label: 'Atividades',
    icon: 'Activity',
    color: BRAND_COLORS.teal,
  },
  {
    href: '#videos',
    label: 'Vídeos',
    icon: 'Play',
    color: BRAND_COLORS.purple,
  },
  {
    href: '#receitas',
    label: 'Receitas',
    icon: 'ChefHat',
    color: BRAND_COLORS.coral,
  },
  {
    href: '#sobre',
    label: 'Sobre',
    icon: 'Leaf',
    color: BRAND_COLORS.green,
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Nossa Missão', href: '#missao' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Carreiras', href: '#carreiras' },
  ],
  resources: [
    { label: 'Atividades', href: '#atividades' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'Receitas', href: '#receitas' },
    { label: 'Blog', href: '#blog' },
  ],
  support: [
    { label: 'Central de Ajuda', href: '#ajuda' },
    { label: 'Contato', href: '#contato' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Termos de Uso', href: '#termos' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/nutrilho', icon: 'Instagram' },
    { label: 'Facebook', href: 'https://facebook.com/nutrilho', icon: 'Facebook' },
    { label: 'YouTube', href: 'https://youtube.com/nutrilho', icon: 'Youtube' },
    { label: 'Twitter', href: 'https://twitter.com/nutrilho', icon: 'Twitter' },
  ],
};

export const EXTERNAL_LINKS = {
  privacy: '/privacy',
  terms: '/terms',
  contact: '/contact',
  help: '/help',
};

export default MAIN_MENU;