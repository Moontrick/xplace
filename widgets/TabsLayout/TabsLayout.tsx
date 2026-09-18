import { View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { H5, SizableText, Tabs, Text } from 'tamagui';
import { tabsLayoutStyles } from './styles';
import { TabsLayoutProps } from './types';
import { MenuItems } from './constants';
import { Button } from '@/shared/ui/Button';
import { IconButton } from '@/shared/ui/IconButton';
import { useTabsLayout } from './hooks/useTabsLayout';

export function TabsLayout({ children }: TabsLayoutProps) {
  const { activePathName, handleChangePage } = useTabsLayout();
  return (
    <View style={tabsLayoutStyles.container}>
      <View style={tabsLayoutStyles.box}>
        <Text>123</Text>
      </View>
      {children}
      <View style={tabsLayoutStyles.tabs}>
        {MenuItems.map((item) => (
          <View key={item.id} style={tabsLayoutStyles.tabsItem}>
            <IconButton
              onPress={() => handleChangePage(item.pathname)}
              disabled={item.disabled}
              icon={item.icon}
              round
              variant="secondary"
              accessibilityLabel={item.ariaLabel}
            />
            <Text>{item.ariaLabel}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
