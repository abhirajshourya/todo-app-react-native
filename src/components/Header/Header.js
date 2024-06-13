import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { colourPalette } from '../../styles/main';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="list-ul" color={colourPalette.highlight} style={styles.icon} />
      <Text style={styles.text}>Todo App</Text>
      <Text style={styles.author}>By Abhiraj Shourya</Text>
    </View>
  );
};

export default Header;
