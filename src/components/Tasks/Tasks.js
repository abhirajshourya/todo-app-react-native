import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Task from './Task/Task';
import styles from './styles';

const Tasks = ({ taskList, setTaskList }) => {
  function showNoTasks() {
    return (
      <View style={styles.noTasks}>
        <Text style={styles.noTasksText}>No tasks available</Text>
        <Text style={styles.noTasksSubText}>Click on the "Add Task" tab to add a new task</Text>
      </View>
    );
  }

  function showTasks() {
    return (
      <ScrollView style={styles.container}>
        {Object.keys(taskList).map((taskId) => {
          return (
            <Task key={taskId} taskId={taskId} task={taskList[taskId]} setTaskList={setTaskList} />
          );
        })}
      </ScrollView>
    );
  }

  return Object.keys(taskList).length === 0 ? showNoTasks() : showTasks();
};

export default Tasks;
