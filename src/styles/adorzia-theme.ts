
/**
 * Adorzia Academy Theme
 * A reusable theme configuration for Adorzia-styled projects
 */

export const adorziaColors = {
  // Core brand colors
  primary: '#6F1D1B',     // Deep burgundy
  secondary: '#99582A',   // Rust brown
  tertiary: '#BB9457',    // Caramel/gold
  dark: '#432818',        // Dark brown
  
  // Neutral palette
  gray: '#F6F6F7',
  darkGray: '#221F26',
  midGray: '#8A898C',
  lightGray: '#F1F0FB',
  white: '#FFFFFF',
  
  // Accent colors
  accent: '#BB9457',      // Using the caramel/gold as accent
  accentHover: '#99582A', // Using rust brown as hover state
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Level indicators
  beginnerLevel: '#99582A',   // Rust brown for beginner
  intermediateLevel: '#BB9457', // Caramel/gold for intermediate
  expertLevel: '#6F1D1B',    // Deep burgundy for expert
}

export const adorziaGradients = {
  primary: `linear-gradient(to right, ${adorziaColors.primary}, ${adorziaColors.secondary})`,
  secondary: `linear-gradient(to right, ${adorziaColors.dark}, ${adorziaColors.tertiary})`,
  accent: `linear-gradient(135deg, ${adorziaColors.accent}, ${adorziaColors.accentHover})`,
  card: `linear-gradient(to bottom right, ${adorziaColors.white}, ${adorziaColors.lightGray})`,
}

export const adorziaShadows = {
  subtle: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
  glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
}

export const adorziaBorders = {
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  }
}

export const adorziaFonts = {
  sans: '"Inter", sans-serif',
  serif: '"Playfair Display", serif',
  mono: '"Roboto Mono", monospace',
}

export const adorziaSpacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
}

/**
 * Usage example:
 * 
 * import { adorziaColors, adorziaGradients, adorziaShadows } from '@/styles/adorzia-theme';
 * 
 * const StyledComponent = styled.div`
 *   background-color: ${adorziaColors.lightGray};
 *   color: ${adorziaColors.darkGray};
 *   box-shadow: ${adorziaShadows.subtle};
 *   border-radius: ${adorziaBorders.radius.md};
 *   font-family: ${adorziaFonts.sans};
 * `;
 * 
 * // For Tailwind CSS projects, you can use these variables in your tailwind.config.js:
 * 
 * module.exports = {
 *   theme: {
 *     extend: {
 *       colors: adorziaColors,
 *       boxShadow: adorziaShadows,
 *       fontFamily: adorziaFonts,
 *     }
 *   }
 * }
 */

// Tailwind CSS theme extension
export const tailwindThemeExtension = {
  colors: {
    adorzia: adorziaColors,
  },
  boxShadow: adorziaShadows,
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    serif: ['Playfair Display', 'serif'],
    mono: ['Roboto Mono', 'monospace'],
  },
  borderRadius: adorziaBorders.radius,
}
