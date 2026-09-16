import { TamaguiProvider } from 'tamagui'
import { config } from './tamagui.config'
import HomePage from 'pages/home/page'


export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <HomePage />
    </TamaguiProvider>
  )
}