import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import styles from './src/styles/main';
import Tasks from './src/components/Tasks/Tasks';
import AddTask from './src/components/AddTask/AddTask';

export default function App() {
  const [taskList, setTaskList] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AddTask setTaskList={setTaskList} />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </SafeAreaView>
  );
}
