import { IconUser } from '@/public/assets/icons/IconUser';
import { MenuItemType } from './types';
import { IconUsers } from '@/public/assets/icons/IconUsers';
import { IconMapPin } from '@/public/assets/icons/IconMapPin';

export const MenuItems: MenuItemType[] = [
  {
    id: 1,
    pathname: 'profile',
    icon: <IconUser />,
    ariaLabel: 'Profile',
  },
  {
    id: 2,
    pathname: 'friends',
    icon: <IconUsers />,
    ariaLabel: 'Friends',
  },
  {
    id: 3,
    pathname: 'places',
    icon: <IconMapPin />,
    ariaLabel: 'Places',
  },
];
