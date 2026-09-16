import { useTheme } from 'tamagui';
import { palette, type PaletteColor } from './palette';

/**
 * Резолвит цвет палитры через активную тему Tamagui в сырой hex.
 * Нужен там, где токены `$name` не работают: SVG-иконки, нативные пропы.
 */
export function useThemeColor(name: PaletteColor): string {
  const theme = useTheme();
  const variable = theme[name];
  return variable ? variable.val : palette[name];
}
