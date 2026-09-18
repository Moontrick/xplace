import { usePathname } from 'expo-router';

export function useTabsLayout() {
  const activePathName = usePathname();

  function handleChangePage(pathname: string) {
    console.log(pathname);
  }

  return { activePathName, handleChangePage };
}
