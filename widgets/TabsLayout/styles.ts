import { palette } from '@/shared/styles/palette';
import { StyleSheet } from 'react-native';

export const tabsLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  box: {
    position: 'absolute',
    top: `${9}%`,
    left: `${3}%`,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  tabs: {
    width: '100%',
    height: 110,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 12,
    paddingVertical: 10,
    alignContent: 'flex-start',
    justifyContent: 'space-around',
    borderTopColor: palette.accentBorder,
    borderTopWidth: 1,
  },
  tabsItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
  },
});
