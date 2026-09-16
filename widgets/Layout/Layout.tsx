import { View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { IconButton } from 'shared/ui/IconButton';
import { IconUser } from 'public/assets/icons/IconUser';
import { layoutStyles } from './styles';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.box}>
        <IconButton
          icon={<IconUser />}
          onLongPress={handleLongPress}
          accessibilityLabel="Профиль"
        />
      </View>
      {children}
    </View>
  );
}
