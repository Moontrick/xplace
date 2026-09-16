import { useThemeColor } from 'shared/styles/useThemeColor';
import { ButtonShell } from 'shared/ui/Button/ButtonShell';
import { renderIcon } from 'shared/ui/Button/renderIcon';
import { buttonSizes, getButtonStyle } from 'shared/ui/Button/variants';
import type { IconButtonProps } from './types';

export function IconButton({
  icon,
  variant = 'primary',
  color = 'accent',
  size = 'md',
  round = false,
  disabled = false,
  loading = false,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
}: IconButtonProps) {
  const sizeConfig = buttonSizes[size];
  const colors = getButtonStyle(variant, color);
  const iconColor = useThemeColor(colors.contentColor);
  const side = sizeConfig.height;

  return (
    <ButtonShell
      colors={colors}
      height={side}
      width={side}
      rounded={round ? side / 2 : sizeConfig.borderRadius}
      self="flex-start"
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      {renderIcon(icon, sizeConfig.iconSize, iconColor)}
    </ButtonShell>
  );
}
