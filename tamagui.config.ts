import { createTamagui } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v5';
import { palette } from 'shared/styles/palette';

export const config = createTamagui({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    color: { ...palette },
  },
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      ...palette,
    },
  },
});

export type AppTamaguiConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppTamaguiConfig {}
}
