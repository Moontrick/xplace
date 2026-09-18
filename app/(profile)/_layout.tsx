import { TabsLayout } from '@/widgets/TabsLayout';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <TabsLayout>
      <Stack screenOptions={{ headerShown: false }} />
    </TabsLayout>
  );
}
