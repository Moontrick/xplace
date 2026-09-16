import { cloneElement, isValidElement, type ReactNode } from 'react';

interface IconSizingProps {
  fill?: string;
  width?: number | string;
  height?: number | string;
}

export function renderIcon(icon: ReactNode, size: number, fill: string): ReactNode {
  if (!isValidElement<IconSizingProps>(icon)) {
    return icon;
  }
  return cloneElement(icon, { fill, width: size, height: size });
}
