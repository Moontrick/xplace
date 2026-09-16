import type { ColorTokens } from 'tamagui';
import type { PaletteColor } from 'shared/styles/palette';
import type { ButtonColor, ButtonSize, ButtonVariant } from './types';

export interface ButtonSizeConfig {
  height: number;
  fontSize: number;
  paddingHorizontal: number;
  iconSize: number;
  borderRadius: number;
  gap: number;
}

export const buttonSizes: Record<ButtonSize, ButtonSizeConfig> = {
  sm: { height: 32, fontSize: 14, paddingHorizontal: 12, iconSize: 16, borderRadius: 8, gap: 6 },
  md: { height: 44, fontSize: 16, paddingHorizontal: 16, iconSize: 20, borderRadius: 12, gap: 8 },
  lg: { height: 56, fontSize: 18, paddingHorizontal: 20, iconSize: 24, borderRadius: 14, gap: 8 },
};

interface ColorTokenSet {
  /** Насыщенный цвет роли, например '$accent'. */
  base: ColorTokens;
  /** Мягкая заливка, например '$accentSoft'. */
  soft: ColorTokens;
  /** Обводка того же тона, например '$accentBorder'. */
  border: ColorTokens;
}

const colorTokens: Record<ButtonColor, ColorTokenSet> = {
  accent: { base: '$accent', soft: '$accentSoft', border: '$accentBorder' },
  yellow: { base: '$yellow', soft: '$yellowSoft', border: '$yellowBorder' },
  green: { base: '$green', soft: '$greenSoft', border: '$greenBorder' },
  pink: { base: '$pink', soft: '$pinkSoft', border: '$pinkBorder' },
  negative: { base: '$negative', soft: '$negativeSoft', border: '$negativeBorder' },
};

export interface ButtonStyle {
  bg: ColorTokens | 'transparent';
  color: ColorTokens;
  borderColor: ColorTokens | 'transparent';
  borderWidth: number;
  pressStyle: { bg?: ColorTokens; opacity?: number };
  /** Имя цвета палитры для контента (иконки, спиннер); резолвится через useThemeColor. */
  contentColor: PaletteColor;
}

/**
 * Пастельная матрица из макета: текст и иконки почти всегда тёмные ($content),
 * роль цвета задаёт заливку и рамку. Только ghost красит сам текст.
 */
export function getButtonStyle(variant: ButtonVariant, color: ButtonColor): ButtonStyle {
  const tokens = colorTokens[color];

  switch (variant) {
    case 'primary':
      return {
        bg: tokens.soft,
        color: '$content',
        borderColor: tokens.border,
        borderWidth: 1,
        pressStyle: { bg: tokens.border },
        contentColor: 'content',
      };
    case 'secondary':
      return {
        bg: '$surface',
        color: '$content',
        borderColor: tokens.border,
        borderWidth: 1,
        pressStyle: { bg: tokens.soft },
        contentColor: 'content',
      };
    case 'outline':
      return {
        bg: 'transparent',
        color: '$content',
        borderColor: tokens.border,
        borderWidth: 1,
        pressStyle: { bg: tokens.soft },
        contentColor: 'content',
      };
    case 'ghost':
      return {
        bg: 'transparent',
        color: tokens.base,
        borderColor: 'transparent',
        borderWidth: 0,
        pressStyle: { bg: tokens.soft },
        contentColor: color,
      };
  }
}
