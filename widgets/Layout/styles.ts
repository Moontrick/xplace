import { StyleSheet } from 'react-native';

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  box: {
    position: 'absolute',
    top: `${7.9}%`,
    left: `${3.3}%`,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
});
