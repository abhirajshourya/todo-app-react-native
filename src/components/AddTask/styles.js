import { StyleSheet } from 'react-native';
import { colourPalette } from '../../styles/main';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colourPalette.backgroundColor, // change background color of status bar in iOS
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    backgroundColor: colourPalette.backgroundColor,
    alignSelf: 'stretch',
  },
  title: {
    color: colourPalette.primary,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: '25%',
  },
});

export default styles;
