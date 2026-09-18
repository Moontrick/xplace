import { View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { IconButton } from 'shared/ui/IconButton';
import { IconUser } from 'public/assets/icons/IconUser';
import { layoutStyles } from './styles';
import { LayoutProps } from './types';
import { IconSettings } from '@/public/assets/icons/IconSettings';

export function Layout({ children }: LayoutProps) {
  const handlePress = (pathName: string) => {
    router.push(pathName);
  };

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.box}>
        <IconButton
          icon={<IconUser />}
          onPress={() => handlePress('/profile')}
          onLongPress={handleLongPress}
          accessibilityLabel="Профиль"
        />
        <IconButton
          icon={<IconSettings />}
          variant="primary"
          onPress={() => handlePress('/uikit')}
          onLongPress={handleLongPress}
          accessibilityLabel="UI Kit"
        />
      </View>
      {children}
    </View>
  );
}
