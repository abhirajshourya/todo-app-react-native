import { StyleSheet } from 'react-native';

export const colourPalette = {
  accentColor: '#05668d',
  backgroundColor: '#f5f3f4',
  highlight: '#f0f3bd',
  primary: '#14213d',
  secondary: '#02c39a',
  tertiary: '#00a896',
  quaternary: '#028090',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colourPalette.accentColor, // change background color of status bar in iOS
  },
  icon: {
    fontSize: 30,
  },
});

export default styles;
