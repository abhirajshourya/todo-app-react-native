import { StyleSheet } from 'react-native';
import { colourPalette } from '../../styles/main';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: colourPalette.secondary,
    borderBottomWidth: 3,
    padding: 10,
    backgroundColor: colourPalette.accentColor,
  },
  icon: {
    fontSize: 30,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colourPalette.highlight,
    flex: 1,
  },
  author: {
    fontSize: 15,
    color: colourPalette.secondary,
    textAlign: 'center',
  },
});

export default styles;
