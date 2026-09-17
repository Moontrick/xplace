import { Stack } from 'expo-router';
import { Layout } from 'widgets/Layout';

export default function MainLayout() {
  return (
    <Layout>
      <Stack screenOptions={{ headerShown: false }} />
    </Layout>
  );
}
