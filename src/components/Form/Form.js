import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Keyboard, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { createTodo } from '../../data/controller';

const Form = ({ setTaskList }) => {
  const [isDone, setIsDone] = useState(false);
  const [taskDesc, setTaskDesc] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddPress = () => {
    if (taskDesc) {
      setIsLoading(true);

      todo = {
        description: taskDesc,
        done: isDone,
      };

      createTodo(todo)
        .then((resTodo) => {
          setTaskList((prevTaskList) => {
            return {
              ...prevTaskList,
              [resTodo.id]: todo,
            };
          });
          setTaskDesc('');
          setIsDone(false);
          setErrorMessage(null);
          setIsLoading(false);
        })
        .catch(() => {
          Alert.alert('Error', 'An error occurred while adding the task');
          setIsLoading(false);
        });

      Keyboard.dismiss();
    } else {
      setIsLoading(false);
      setErrorMessage('Task description cannot be empty!!');
    }
  };

  const handleDescChange = (text) => {
    setTaskDesc(text);
  };

  return (
    <View style={styles.container}>
      {errorMessage && (
        <View style={styles.error}>
          <AntDesign name="exclamationcircle" size={24} color="crimson" />
          <View style={styles.errorMsgBox}>
            <Text style={styles.errorTitle}>Attention: </Text>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter task"
        maxLength={150}
        onChangeText={handleDescChange}
        defaultValue={taskDesc}
      />
      <TouchableHighlight style={styles.addBtn} onPress={handleAddPress}>
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.addBtnText}>Add</Text>
        )}
      </TouchableHighlight>
    </View>
  );
};

export default Form;
