/**
 * Палитра приложения из Figma-макета (docs/styles.ts).
 * Схема имён: `{роль}` — насыщенный цвет, `{роль}Soft` — мягкая заливка,
 * `{роль}Border` — обводка того же тона.
 * Для negative мягкая заливка и рамка в макете отсутствуют и получены
 * из базового цвета через прозрачность (1A = 10%, 66 = 40%).
 */
export const palette = {
  /** Фон экрана. */
  screen: '#FAF8F2',
  /** Поверхность карточек, полей ввода, таб-бара. */
  surface: '#FCFBF4',

  /** Основной текст и иконки. */
  content: '#3C3846',
  /** Вторичный текст: подписи, даты. */
  contentSecondary: '#6D6875',

  accent: '#8E8FFA',
  accentSoft: '#E4DDFE',
  accentBorder: '#CDCEFE',

  yellow: '#FFC93C',
  yellowSoft: '#FFFBD4',
  yellowBorder: '#FFEAA1',

  green: '#38A375',
  greenSoft: '#DDF7E3',
  greenBorder: '#C0EFCB',

  pink: '#FFAFCC',
  pinkSoft: '#FFE5EC',
  pinkBorder: '#FFAFCC',

  negative: '#FF4D4D',
  negativeSoft: '#FF4D4D1A',
  negativeBorder: '#FF4D4D66',
} as const;

export type PaletteColor = keyof typeof palette;
