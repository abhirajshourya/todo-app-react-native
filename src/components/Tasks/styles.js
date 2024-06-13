import { StyleSheet } from 'react-native';
import { colourPalette } from '../../styles/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colourPalette.backgroundColor,
  },
  noTasks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTasksText: {
    fontSize: 18,
    color: colourPalette.primary,
  },
  noTasksSubText: {
    fontSize: 14,
    color: colourPalette.primary,
  },
});
export default styles;
