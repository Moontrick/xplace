import type { ReactNode } from 'react';
import { Spinner, XStack, YStack } from 'tamagui';
import type { ButtonStyle } from './variants';

export interface ButtonShellProps {
  colors: ButtonStyle;
  height: number;
  width?: number;
  px?: number;
  rounded: number;
  self: 'stretch' | 'flex-start';
  gap?: number;
  disabled: boolean;
  loading: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  accessibilityLabel?: string;
  testID?: string;
  children: ReactNode;
}

export function ButtonShell({
  colors,
  height,
  width,
  px,
  rounded,
  self,
  gap,
  disabled,
  loading,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
  children,
}: ButtonShellProps) {
  const inactive = disabled || loading;

  return (
    <XStack
      role="button"
      position="relative"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: inactive, busy: loading }}
      testID={testID}
      self={self}
      items="center"
      justify="center"
      height={height}
      width={width}
      px={px}
      rounded={rounded}
      bg={colors.bg}
      borderColor={colors.borderColor}
      borderWidth={colors.borderWidth}
      opacity={disabled ? 0.4 : 1}
      pressStyle={inactive ? undefined : colors.pressStyle}
      disabled={inactive}
      onPress={inactive ? undefined : onPress}
      onLongPress={inactive ? undefined : onLongPress}
    >
      <XStack items="center" gap={gap} opacity={loading ? 0 : 1}>
        {children}
      </XStack>
      {loading ? (
        <YStack position="absolute" t={0} b={0} l={0} r={0} items="center" justify="center">
          <Spinner size="small" color={colors.color} />
        </YStack>
      ) : null}
    </XStack>
  );
}
