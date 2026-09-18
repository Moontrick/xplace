import { View } from 'react-native';
import { router } from 'expo-router';
import { Text, YStack } from 'tamagui';
import { IconButton } from 'shared/ui/IconButton';
import { IconArrowLeft } from 'public/assets/icons/IconArrowLeft';
import { friendsStyles } from './styles';

export default function FriendsPage() {
  return (
    <YStack flex={1} bg="$screen" items="center" justify="center">
      <View style={friendsStyles.back}>
        <IconButton
          icon={<IconArrowLeft />}
          onPress={() => router.back()}
          accessibilityLabel="Назад"
        />
      </View>
      <Text fontSize={20} fontWeight="700" color="$content">
        Друзья
      </Text>
    </YStack>
  );
}
