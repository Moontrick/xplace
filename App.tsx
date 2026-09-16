import { TamaguiProvider } from 'tamagui';
import { config } from './tamagui.config';
import UiKitPage from 'pages/uikit/page';

// Временно: showcase UIKit. Вернуть HomePage из 'pages/home/page' после проверки.
export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <UiKitPage />
    </TamaguiProvider>
  );
}
