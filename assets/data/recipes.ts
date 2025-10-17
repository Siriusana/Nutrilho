// ============================================
// RECEITAS SAUDÁVEIS - NUTRILHO
// ============================================

import type { Recipe } from '../types';
import { BRAND_COLORS } from '../constants/colors';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Bowl de Açaí Energético',
    description: 'Açaí cremoso com granola, frutas frescas e mel. Perfeito para começar o dia com energia!',
    image: 'acai bowl healthy',
    prepTime: '10 min',
    difficulty: 'Fácil',
    category: 'Café da Manhã',
    color: BRAND_COLORS.purple,
    servings: 2,
    calories: 320,
    ingredients: [
      '200g de polpa de açaí congelada',
      '1 banana congelada',
      '100ml de leite vegetal',
      '2 colheres de sopa de granola',
      'Frutas frescas a gosto (morango, kiwi, manga)',
      '1 colher de sopa de mel',
      'Sementes de chia'
    ],
    instructions: [
      'Bata a polpa de açaí com a banana e o leite no liquidificador até obter uma mistura cremosa',
      'Despeje em uma tigela',
      'Decore com granola, frutas frescas, mel e sementes de chia',
      'Sirva imediatamente'
    ],
    tags: ['energético', 'vegano', 'sem glúten', 'rico em antioxidantes'],
  },
  {
    id: 2,
    title: 'Salada Colorida Mediterrânea',
    description: 'Uma explosão de cores e sabores com vegetais frescos, queijo feta e azeite extra virgem.',
    image: 'mediterranean salad colorful',
    prepTime: '15 min',
    difficulty: 'Fácil',
    category: 'Almoço',
    color: BRAND_COLORS.green,
    servings: 4,
    calories: 180,
    ingredients: [
      '4 xícaras de mix de folhas verdes',
      '1 pepino cortado em cubos',
      '200g de tomate cereja',
      '1 pimentão amarelo',
      '100g de azeitonas pretas',
      '150g de queijo feta em cubos',
      '1/4 de cebola roxa fatiada',
      'Azeite extra virgem',
      'Suco de 1 limão',
      'Orégano e sal a gosto'
    ],
    instructions: [
      'Lave bem todas as folhas e vegetais',
      'Corte os vegetais em pedaços médios',
      'Misture tudo em uma saladeira grande',
      'Adicione o queijo feta e as azeitonas',
      'Tempere com azeite, limão, orégano e sal',
      'Misture delicadamente e sirva'
    ],
    tags: ['leve', 'vegetariano', 'rico em fibras', 'mediterrâneo'],
  },
  {
    id: 3,
    title: 'Smoothie Verde Detox',
    description: 'Batida verde revitalizante com espinafre, abacaxi, gengibre e hortelã. Ideal para desintoxicar!',
    image: 'green smoothie detox',
    prepTime: '5 min',
    difficulty: 'Fácil',
    category: 'Lanche',
    color: BRAND_COLORS.teal,
    servings: 2,
    calories: 120,
    ingredients: [
      '2 xícaras de espinafre fresco',
      '1 xícara de abacaxi picado',
      '1/2 banana',
      '1 pedaço pequeno de gengibre',
      '5 folhas de hortelã',
      '300ml de água de coco',
      'Suco de 1/2 limão',
      'Gelo a gosto'
    ],
    instructions: [
      'Lave bem o espinafre e a hortelã',
      'Descasque o gengibre',
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Adicione gelo se desejar mais gelado',
      'Sirva imediatamente'
    ],
    tags: ['detox', 'vegano', 'energético', 'rico em vitaminas'],
  },
  {
    id: 4,
    title: 'Wrap de Frango Integral',
    description: 'Tortilha integral recheada com frango grelhado, vegetais crocantes e molho de iogurte.',
    image: 'chicken wrap healthy',
    prepTime: '20 min',
    difficulty: 'Médio',
    category: 'Jantar',
    color: BRAND_COLORS.coral,
    servings: 2,
    calories: 380,
    ingredients: [
      '2 tortilhas integrais',
      '200g de peito de frango',
      '1 cenoura ralada',
      'Folhas de alface',
      '1/2 pimentão vermelho em tiras',
      '1/4 de repolho roxo',
      '2 colheres de iogurte natural',
      '1 colher de mostarda dijon',
      'Temperos: alho, páprica, sal',
      'Azeite'
    ],
    instructions: [
      'Tempere o frango com alho, páprica e sal',
      'Grelhe o frango até dourar dos dois lados',
      'Deixe esfriar e corte em tiras',
      'Misture o iogurte com a mostarda para fazer o molho',
      'Aqueça levemente as tortilhas',
      'Monte o wrap: tortilha, alface, vegetais, frango e molho',
      'Enrole bem apertado e corte ao meio',
      'Sirva imediatamente'
    ],
    tags: ['proteico', 'integral', 'balanceado', 'prático'],
  },
  {
    id: 5,
    title: 'Overnight Oats com Frutas',
    description: 'Aveia deixada de molho overnight com leite, frutas e sementes. Café da manhã prático e nutritivo!',
    image: 'overnight oats berries',
    prepTime: '5 min + 8h geladeira',
    difficulty: 'Fácil',
    category: 'Café da Manhã',
    color: BRAND_COLORS.purple,
    servings: 1,
    calories: 280,
    ingredients: [
      '1/2 xícara de aveia em flocos',
      '3/4 xícara de leite (vegetal ou animal)',
      '1 colher de chá de mel',
      '1 colher de sopa de sementes de chia',
      'Frutas vermelhas frescas',
      '1 colher de sopa de pasta de amendoim',
      'Canela em pó'
    ],
    instructions: [
      'Em um pote ou tigela, misture a aveia, leite, chia e mel',
      'Mexa bem para incorporar todos os ingredientes',
      'Tampe e leve à geladeira por pelo menos 8 horas (ou overnight)',
      'Na manhã seguinte, adicione as frutas frescas',
      'Finalize com pasta de amendoim e canela',
      'Está pronto para comer!'
    ],
    tags: ['prático', 'rico em fibras', 'versátil', 'meal prep'],
  },
  {
    id: 6,
    title: 'Sopa de Legumes Cremosa',
    description: 'Sopa nutritiva e reconfortante com cenoura, abóbora e batata-doce. Perfeita para dias frios!',
    image: 'creamy vegetable soup',
    prepTime: '35 min',
    difficulty: 'Médio',
    category: 'Jantar',
    color: BRAND_COLORS.coral,
    servings: 6,
    calories: 150,
    ingredients: [
      '2 cenouras grandes',
      '300g de abóbora',
      '1 batata-doce média',
      '1 cebola',
      '2 dentes de alho',
      '1 litro de caldo de legumes',
      'Azeite extra virgem',
      'Sal, pimenta e noz-moscada',
      'Salsinha fresca para decorar'
    ],
    instructions: [
      'Descasque e corte todos os legumes em cubos',
      'Refogue a cebola e o alho no azeite',
      'Adicione os legumes e refogue por 5 minutos',
      'Acrescente o caldo de legumes',
      'Cozinhe por 25 minutos até os legumes ficarem macios',
      'Bata tudo no liquidificador até ficar cremoso',
      'Tempere com sal, pimenta e noz-moscada',
      'Sirva quente decorado com salsinha'
    ],
    tags: ['reconfortante', 'vegano', 'rico em vitamina A', 'baixa caloria'],
  },
];

export const getRecipesByCategory = (category: string): Recipe[] => {
  return RECIPES.filter(recipe => recipe.category === category);
};

export const getRecipeById = (id: number): Recipe | undefined => {
  return RECIPES.find(recipe => recipe.id === id);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowerQuery = query.toLowerCase();
  return RECIPES.filter(recipe =>
    recipe.title.toLowerCase().includes(lowerQuery) ||
    recipe.description.toLowerCase().includes(lowerQuery) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export default RECIPES;