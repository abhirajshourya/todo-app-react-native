import { StyleSheet } from 'react-native';
import { colourPalette } from '../../../styles/main';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colourPalette.accentColor,
    flex: 1,
  },
  desc: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colourPalette.primary,
  },
  id: {
    fontSize: 14,
    color: '#ccc',
  },
  open: {
    fontSize: 14,
    color: '#e8776b',
  },
  completed: {
    fontSize: 14,
    color: '#5eaa5e',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    width: '80%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
  },
  switchTrackColor: {
    false: '#3e3e3e',
    true: colourPalette.tertiary,
  },
});

export default styles;
