import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import Form from '../Form/Form';

function AddTask({ setTaskList }) {
  return (
    <SafeAreaView style={styles.container}>
      <Form setTaskList={setTaskList} />
    </SafeAreaView>
  );
}

export default AddTask;
