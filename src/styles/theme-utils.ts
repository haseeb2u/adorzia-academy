
import { adorziaColors } from './adorzia-theme';

/**
 * Helper functions for working with the Adorzia theme
 */

// Get a color with optional opacity
export const getColor = (colorName: keyof typeof adorziaColors, opacity?: number): string => {
  const color = adorziaColors[colorName];
  
  if (opacity !== undefined && opacity >= 0 && opacity <= 1) {
    // Convert hex to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  
  return color;
};

// Get a color for different course/skill levels
export const getLevelColor = (level: 'Beginner' | 'Intermediate' | 'Expert'): string => {
  switch (level) {
    case 'Beginner':
      return adorziaColors.beginnerLevel;
    case 'Intermediate':
      return adorziaColors.intermediateLevel;
    case 'Expert':
      return adorziaColors.expertLevel;
    default:
      return adorziaColors.primary;
  }
};

// Get background and text colors for different levels
export const getLevelStyles = (level: 'Beginner' | 'Intermediate' | 'Expert'): { bg: string; text: string } => {
  switch (level) {
    case 'Beginner':
      return { bg: '#F7EDE2', text: adorziaColors.beginnerLevel };
    case 'Intermediate':
      return { bg: '#F9F5EB', text: adorziaColors.intermediateLevel };
    case 'Expert':
      return { bg: '#F5E6E6', text: adorziaColors.expertLevel };
    default:
      return { bg: '#F1F5F9', text: adorziaColors.darkGray };
  }
};
