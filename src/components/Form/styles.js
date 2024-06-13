import { StyleSheet } from 'react-native';
import { colourPalette } from '../../styles/main';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: colourPalette.backgroundColor,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: colourPalette.backgroundColor,
    borderColor: colourPalette.primary,
    borderWidth: 2,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  statusText: {
    color: colourPalette.primary,
    marginRight: 10,
  },
  error: {
    borderColor: 'red',
    backgroundColor: colourPalette.backgroundColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMsgBox: {
    marginLeft: 10,
  },
  errorTitle: {
    fontWeight: 'bold',
    color: 'crimson',
  },
  errorText: {
    color: 'crimson',
  },
  switchTrackColor: {
    false: '#3e3e3e',
    true: colourPalette.tertiary,
  },
  addBtn: {
    backgroundColor: colourPalette.accentColor,
    padding: 10,
    marginTop: 10,
    borderRadius: 7,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  addBtnText: {
    color: colourPalette.highlight,
  },
});

export default styles;
