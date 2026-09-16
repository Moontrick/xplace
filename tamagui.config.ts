import { createTamagui } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5'

export const config = createTamagui(defaultConfig)

export type AppTamaguiConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppTamaguiConfig {}
}