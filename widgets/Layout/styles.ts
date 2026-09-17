import { StyleSheet } from 'react-native';

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  box: {
    position: 'absolute',
    top: `${10}%`,
    left: `${3}%`,
    zIndex: 10,
  },
});
