import type { ReactNode } from 'react';
import type { ButtonColor, ButtonSize, ButtonVariant } from 'shared/ui/Button';

export interface IconButtonProps {
  icon: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  round?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  accessibilityLabel: string;
  testID?: string;
}
