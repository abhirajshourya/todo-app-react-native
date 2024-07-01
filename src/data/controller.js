import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNqypaKEZPWnJdFx3cQFXdeUMFqGchkDU',
  authDomain: 'info6132-d6021.firebaseapp.com',
  projectId: 'info6132-d6021',
  storageBucket: 'info6132-d6021.appspot.com',
  messagingSenderId: '514232397334',
  appId: '1:514232397334:web:ee736fa9bb61fce2df0f37',
};

const firebaseApp = initializeApp(firebaseConfig);

// Get the Firestore instance
const db = getFirestore(firebaseApp);

// Create a new todo item
const createTodo = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, 'todos'), todo);
    console.log('Todo item created with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Error creating todo item: ', error);
  }
};

// Get all todo items
const getTodos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todos'));
    console.log('Todo list retrieved successfully!');
    return querySnapshot;
  } catch (error) {
    console.error('Error getting todo items: ', error);
  }
};

// Update a todo item
const updateTodo = async (todoId, updatedTodo) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await updateDoc(todoRef, updatedTodo);
    console.log('Todo item updated successfully');
    return todoRef;
  } catch (error) {
    console.error('Error updating todo item: ', error);
  }
};

// Delete a todo item
const deleteTodo = async (todoId) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await deleteDoc(todoRef);
    console.log('Todo item deleted successfully');
  } catch (error) {
    console.error('Error deleting todo item: ', error);
  }
};

export { createTodo, getTodos, updateTodo, deleteTodo };
