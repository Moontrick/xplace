import { ReactNode } from 'react';

export type TabsLayoutProps = {
  children: ReactNode;
};

export type MenuItemType = {
  id: number;
  pathname: string;
  icon: ReactNode;
  disabled?: boolean;
  ariaLabel: string;
};
