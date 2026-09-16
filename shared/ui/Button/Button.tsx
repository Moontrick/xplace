import { Text } from 'tamagui';
import { useThemeColor } from 'shared/styles/useThemeColor';
import { ButtonShell } from './ButtonShell';
import { renderIcon } from './renderIcon';
import type { ButtonProps } from './types';
import { buttonSizes, getButtonStyle } from './variants';

export function Button({
  variant = 'primary',
  color = 'accent',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  onPress,
  onLongPress,
  testID,
}: ButtonProps) {
  const sizeConfig = buttonSizes[size];
  const colors = getButtonStyle(variant, color);
  const iconColor = useThemeColor(colors.contentColor);

  return (
    <ButtonShell
      colors={colors}
      height={sizeConfig.height}
      px={sizeConfig.paddingHorizontal}
      rounded={sizeConfig.borderRadius}
      gap={sizeConfig.gap}
      self={fullWidth ? 'stretch' : 'flex-start'}
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      onLongPress={onLongPress}
      testID={testID}
    >
      {renderIcon(iconLeft, sizeConfig.iconSize, iconColor)}
      <Text color={colors.color} fontSize={sizeConfig.fontSize} fontWeight="600">
        {children}
      </Text>
      {renderIcon(iconRight, sizeConfig.iconSize, iconColor)}
    </ButtonShell>
  );
}
