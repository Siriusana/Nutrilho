// ============================================
// LOGO SVG CUSTOMIZADO - NUTRILHO
// ============================================

import { BRAND_COLORS } from '../constants/colors';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function NutrilhoLogo({ size = 48, className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ícone - Folha estilizada com círculo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo de fundo */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={BRAND_COLORS.green}
          opacity="0.1"
        />
        
        {/* Folha principal */}
        <path
          d="M50 20 C30 25, 25 35, 25 50 C25 70, 35 80, 50 85 C65 80, 75 70, 75 50 C75 35, 70 25, 50 20 Z"
          fill={BRAND_COLORS.green}
        />
        
        {/* Nervura central da folha */}
        <path
          d="M50 25 L50 80"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Nervuras laterais */}
        <path
          d="M50 35 L38 45"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M50 45 L35 55"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M50 55 L38 65"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        <path
          d="M50 35 L62 45"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M50 45 L65 55"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M50 55 L62 65"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Detalhe decorativo - pequenos pontos */}
        <circle cx="50" cy="40" r="1.5" fill="white" opacity="0.6" />
        <circle cx="50" cy="50" r="1.5" fill="white" opacity="0.6" />
        <circle cx="50" cy="60" r="1.5" fill="white" opacity="0.6" />
      </svg>

      {/* Texto do logo */}
      {showText && (
        <span
          className="font-bold tracking-tight"
          style={{
            fontSize: size * 0.4,
            color: BRAND_COLORS.green,
          }}
        >
          NUTRILHO
        </span>
      )}
    </div>
  );
}

// Logo simplificado (só ícone)
export function NutrilhoIcon({ size = 32, className = '' }: { size?: number; className?: string }) {
  return <NutrilhoLogo size={size} className={className} showText={false} />;
}

// Logo para modo escuro
export function NutrilhoLogoDark({ size = 48, className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" fill="white" opacity="0.1" />
        <path
          d="M50 20 C30 25, 25 35, 25 50 C25 70, 35 80, 50 85 C65 80, 75 70, 75 50 C75 35, 70 25, 50 20 Z"
          fill="white"
        />
        <path
          d="M50 25 L50 80"
          stroke={BRAND_COLORS.green}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 35 L38 45 M50 45 L35 55 M50 55 L38 65"
          stroke={BRAND_COLORS.green}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M50 35 L62 45 M50 45 L65 55 M50 55 L62 65"
          stroke={BRAND_COLORS.green}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>

      {showText && (
        <span
          className="font-bold tracking-tight text-white"
          style={{ fontSize: size * 0.4 }}
        >
          NUTRILHO
        </span>
      )}
    </div>
  );
}

export default NutrilhoLogo;