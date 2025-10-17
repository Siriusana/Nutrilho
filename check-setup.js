#!/usr/bin/env node

/**
 * npm run check
 * Script de Verificação do Setup - NUTRILHO
 * Verifica se todos os arquivos e configurações estão corretos
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const log = {
  success: (msg) => console.log(`${COLORS.green}✓${COLORS.reset} ${msg}`),
  error: (msg) => console.log(`${COLORS.red}✗${COLORS.reset} ${msg}`),
  warning: (msg) => console.log(`${COLORS.yellow}⚠${COLORS.reset} ${msg}`),
  info: (msg) => console.log(`${COLORS.cyan}ℹ${COLORS.reset} ${msg}`),
  header: (msg) => console.log(`\n${COLORS.blue}${msg}${COLORS.reset}`),
};

let errors = 0;
let warnings = 0;

function checkFile(path, description) {
  if (existsSync(path)) {
    log.success(`${description} encontrado`);
    return true;
  } else {
    log.error(`${description} NÃO encontrado: ${path}`);
    errors++;
    return false;
  }
}

function checkFileContent(path, searchString, description) {
  if (!existsSync(path)) {
    log.error(`Arquivo não existe: ${path}`);
    errors++;
    return false;
  }
  
  const content = readFileSync(path, 'utf-8');
  if (content.includes(searchString)) {
    log.success(description);
    return true;
  } else {
    log.error(`${description} - String não encontrada: "${searchString}"`);
    errors++;
    return false;
  }
}

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🌿 NUTRILHO - Verificação de Setup                     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

// 1. Arquivos Principais
log.header('1. Verificando Arquivos Principais');
checkFile('package.json', 'package.json');
checkFile('index.html', 'index.html');
checkFile('App.tsx', 'App.tsx');
checkFile('src/main.tsx', 'src/main.tsx');
checkFile('vite.config.ts', 'vite.config.ts');
checkFile('tsconfig.json', 'tsconfig.json');
checkFile('postcss.config.js', 'postcss.config.js');

// 2. Estilos
log.header('2. Verificando Estilos');
checkFile('styles/globals.css', 'globals.css');
checkFileContent('styles/globals.css', '@import "tailwindcss"', 'Import do Tailwind no globals.css');
checkFileContent('styles/globals.css', 'overflow-x: hidden', 'Reset CSS com overflow-x hidden');

// 3. Configurações
log.header('3. Verificando Configurações');
checkFileContent('postcss.config.js', '@tailwindcss/postcss', 'Plugin Tailwind no PostCSS');
checkFileContent('vite.config.ts', '@vitejs/plugin-react', 'Plugin React no Vite');
checkFileContent('tsconfig.json', 'react-jsx', 'JSX configurado no tsconfig');
checkFileContent('index.html', 'viewport', 'Meta viewport no index.html');

// 4. Assets
log.header('4. Verificando Pasta Assets');
checkFile('assets/index.ts', 'assets/index.ts (exports centralizados)');
checkFile('assets/constants/colors.ts', 'Cores da marca');
checkFile('assets/constants/levels.ts', 'Sistema de níveis');
checkFile('assets/data/recipes.ts', 'Receitas');
checkFile('assets/data/videos.ts', 'Vídeos');
checkFile('assets/data/activities.ts', 'Atividades');
checkFile('assets/icons/NutrilhoLogo.tsx', 'Logo NUTRILHO');

// 5. Componentes
log.header('5. Verificando Componentes');
checkFile('components/Header.tsx', 'Header');
checkFile('components/HeroSection.tsx', 'HeroSection');
checkFile('components/InteractiveActivities.tsx', 'InteractiveActivities');
checkFile('components/VideoLibrary.tsx', 'VideoLibrary');
checkFile('components/RecipesSection.tsx', 'RecipesSection');
checkFile('components/Footer.tsx', 'Footer');

// 6. Componentes UI
log.header('6. Verificando Componentes UI (Shadcn)');
checkFile('components/ui/button.tsx', 'Button');
checkFile('components/ui/card.tsx', 'Card');
checkFile('components/ui/badge.tsx', 'Badge');

// 7. Verificações de Conteúdo Crítico
log.header('7. Verificações de Conteúdo');

if (checkFile('App.tsx', 'App.tsx')) {
  checkFileContent('App.tsx', 'overflow-x-hidden', 'overflow-x-hidden no App.tsx');
  checkFileContent('App.tsx', 'min-h-screen w-full', 'Largura total no container principal');
}

if (checkFile('package.json', 'package.json')) {
  checkFileContent('package.json', '"react"', 'React nas dependências');
  checkFileContent('package.json', '"tailwindcss"', 'Tailwind CSS nas dependências');
  checkFileContent('package.json', '"lucide-react"', 'Lucide Icons nas dependências');
  checkFileContent('package.json', '"motion"', 'Motion nas dependências');
}

// 8. Node Modules
log.header('8. Verificando Instalação');
if (existsSync('node_modules')) {
  log.success('node_modules instalado');
  
  const criticalPackages = [
    'node_modules/react',
    'node_modules/tailwindcss',
    'node_modules/vite',
    'node_modules/lucide-react',
  ];
  
  criticalPackages.forEach((pkg) => {
    if (existsSync(pkg)) {
      log.success(`${pkg.split('/')[1]} instalado`);
    } else {
      log.warning(`${pkg.split('/')[1]} não encontrado`);
      warnings++;
    }
  });
} else {
  log.error('node_modules NÃO encontrado - Execute: npm install');
  errors++;
}

// 9. Documentação
log.header('9. Verificando Documentação');
checkFile('README_INSTALACAO_LOCAL.md', 'README de Instalação Local');
checkFile('TROUBLESHOOTING_LAYOUT.md', 'Guia de Troubleshooting');
checkFile('INDEX.md', 'Índice Geral');
checkFile('assets/README.md', 'Documentação dos Assets');

// Resultado Final
console.log('\n' + '═'.repeat(60));

if (errors === 0 && warnings === 0) {
  console.log(`
${COLORS.green}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ✓ TUDO CERTO! Setup está completo e configurado!       ║
║                                                           ║
║   Próximo passo: npm run dev                              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${COLORS.reset}
`);
  process.exit(0);
} else if (errors === 0 && warnings > 0) {
  console.log(`
${COLORS.yellow}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ⚠ AVISOS ENCONTRADOS: ${warnings.toString().padEnd(2)} avisos                      ║
║                                                           ║
║   O projeto deve funcionar, mas verifique os avisos.      ║
║   Execute: npm install                                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${COLORS.reset}
`);
  process.exit(0);
} else {
  console.log(`
${COLORS.red}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ✗ ERROS ENCONTRADOS: ${errors.toString().padEnd(2)} erros                         ║
║                                                           ║
║   Corrija os erros acima antes de continuar.              ║
║   Consulte: TROUBLESHOOTING_LAYOUT.md                     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${COLORS.reset}
`);
  process.exit(1);
}
