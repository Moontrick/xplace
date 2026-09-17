import { View } from 'react-native';
import { router } from 'expo-router';
import { Text, YStack } from 'tamagui';
import { IconButton } from 'shared/ui/IconButton';
import { IconArrowLeft } from 'public/assets/icons/IconArrowLeft';
import { profileStyles } from './styles';

export default function ProfilePage() {
  return (
    <YStack flex={1} bg="$screen" items="center" justify="center">
      <View style={profileStyles.back}>
        <IconButton
          icon={<IconArrowLeft />}
          onPress={() => router.back()}
          accessibilityLabel="Назад"
        />
      </View>
      <Text fontSize={20} fontWeight="700" color="$content">
        Профиль
      </Text>
    </YStack>
  );
}
