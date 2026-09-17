import type { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Text, XStack, YStack } from 'tamagui';
import { Button, type ButtonColor, type ButtonSize, type ButtonVariant } from 'shared/ui/Button';
import { IconButton } from 'shared/ui/IconButton';
import { IconUser } from 'public/assets/icons/IconUser';
import { IconArrowLeft } from 'public/assets/icons/IconArrowLeft';

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost'];
const colors: ButtonColor[] = ['accent', 'yellow', 'green', 'pink', 'negative'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <YStack gap={12}>
      <Text fontSize={14} fontWeight="700" color="$contentSecondary">
        {title}
      </Text>
      {children}
    </YStack>
  );
}

export default function UiKitPage() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 16, paddingTop: 64, gap: 32, backgroundColor: '#FAF8F2' }}
    >
      <XStack>
        <IconButton
          icon={<IconArrowLeft />}
          variant="ghost"
          onPress={() => router.back()}
          accessibilityLabel="Назад"
        />
      </XStack>

      {variants.map((variant) => (
        <Section key={variant} title={`variant: ${variant}`}>
          <XStack gap={8} flexWrap="wrap">
            {colors.map((color) => (
              <Button key={color} variant={variant} color={color}>
                {color}
              </Button>
            ))}
          </XStack>
        </Section>
      ))}

      <Section title="size">
        <XStack gap={8} items="center" flexWrap="wrap">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </XStack>
      </Section>

      <Section title="disabled / loading">
        <XStack gap={8} flexWrap="wrap">
          <Button disabled>disabled</Button>
          <Button variant="outline" disabled>
            disabled
          </Button>
          <Button loading>loading</Button>
          <Button variant="secondary" loading>
            loading
          </Button>
        </XStack>
      </Section>

      <Section title="fullWidth">
        <Button fullWidth>fullWidth</Button>
        <Button variant="outline" fullWidth>
          fullWidth outline
        </Button>
      </Section>

      <Section title="icons">
        <XStack gap={8} flexWrap="wrap">
          <Button iconLeft={<IconUser />}>iconLeft</Button>
          <Button variant="outline" iconRight={<IconUser />}>
            iconRight
          </Button>
          <Button variant="ghost" iconLeft={<IconUser />} iconRight={<IconUser />}>
            both
          </Button>
        </XStack>
      </Section>

      <Section title="IconButton: variant × color">
        {variants.map((variant) => (
          <XStack key={variant} gap={8}>
            {colors.map((color) => (
              <IconButton
                key={color}
                variant={variant}
                color={color}
                icon={<IconUser />}
                accessibilityLabel={`${variant} ${color}`}
              />
            ))}
          </XStack>
        ))}
      </Section>

      <Section title="IconButton: size, round, states">
        <XStack gap={8} items="center" flexWrap="wrap">
          {sizes.map((size) => (
            <IconButton key={size} size={size} icon={<IconUser />} accessibilityLabel={size} />
          ))}
          {sizes.map((size) => (
            <IconButton
              key={`${size}-round`}
              size={size}
              round
              variant="secondary"
              icon={<IconUser />}
              accessibilityLabel={`${size} round`}
            />
          ))}
          <IconButton disabled icon={<IconUser />} accessibilityLabel="disabled" />
          <IconButton loading icon={<IconUser />} accessibilityLabel="loading" />
        </XStack>
      </Section>
    </ScrollView>
  );
}
