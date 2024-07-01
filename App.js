import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import styles, { colourPalette } from './src/styles/main';
import Tasks from './src/components/Tasks/Tasks';
import AddTask from './src/components/AddTask/AddTask';
import { getTodos } from './src/data/controller';

export default function App() {
  const [taskList, setTaskList] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTodos()
      .then((dataSnapshot) => {
        dataSnapshot.forEach((todo) => {
          const todoId = todo.id;
          const todoData = todo.data();

          setTaskList((prevTaskList) => {
            return {
              ...prevTaskList,
              [todoId]: {
                description: todoData.description,
                done: todoData.done,
              },
            };
          });
        });
        setIsLoading(false);
      })
      .catch(() => {
        Alert.alert('Error', 'An error occurred while fetching the tasks');
        setIsLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AddTask setTaskList={setTaskList} />
      {!isLoading ? (
        <Tasks taskList={taskList} setTaskList={setTaskList} />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator animating={true} color={colourPalette.primary} size="large" />
          <Text style={{ marginTop: 10 }}>Loading tasks...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
