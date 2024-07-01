import React, { useState } from 'react';
import { ActivityIndicator, Alert, Switch, Text, View } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { deleteTodo, updateTodo } from '../../../data/controller';
import { colourPalette } from '../../../styles/main';

const Task = ({ taskId, task, setTaskList }) => {
  const [taskStatus, setTaskStatus] = useState(task.done);
  const [isLoading, setIsLoading] = useState(false);

  function handleStatusChange(value) {
    setTaskStatus(value);
    updateTodo(taskId, { done: value })
      .then(() => {
        setTaskList((prevTaskList) => {
          return {
            ...prevTaskList,
            [taskId]: {
              ...prevTaskList[taskId],
              done: value,
            },
          };
        });
      })
      .catch(() => {
        Alert.alert('Error', 'An error occurred while updating the task');
      });
  }

  function handleDeleteTask() {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => {
          setIsLoading(true);
          deleteTodo(taskId)
            .then(() => {
              setTaskList((prevTaskList) => {
                delete prevTaskList[taskId];
                return { ...prevTaskList };
              });
              setIsLoading(false);
            })
            .catch(() => {
              Alert.alert('Error', 'An error occurred while deleting the task');
              setIsLoading(false);
            });
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.9,
        }}
      >
        <Text style={styles.desc}>{task.description}</Text>
        <Text style={task.done ? styles.completed : styles.open}>
          Status: {task.done ? 'Done' : 'Due'}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <Switch
          value={taskStatus}
          onValueChange={(value) => {
            handleStatusChange(value);
          }}
        />
        {isLoading ? (
          <ActivityIndicator color={colourPalette.primary} />
        ) : (
          <Entypo name="trash" size={24} color="black" onPress={handleDeleteTask} />
        )}
      </View>
    </View>
  );
};

export default Task;
