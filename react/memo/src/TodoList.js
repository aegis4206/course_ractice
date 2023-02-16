import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  
});

const db = firebase.firestore();

function TodoList() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        db.collection('todos').where('userId', '==', user.uid)
          .onSnapshot((querySnapshot) => {
            setTodos(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          });
      } else {
        setTodos([]);
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      text: newTodo,
      completed: false,
      userId: user.uid,
    });
    setNewTodo('');
  };

  const handleToggle = (id, completed) => {
    db.collection('todos').doc(id).update({ completed: !completed });
  };

  const handleDelete = (id) => {
    db.collection('todos').doc(id).delete();
  };

  return (
    <div>
      <h1>Todo List</h1>
      {user ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => handleToggle(todo.id, todo.completed)}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Please sign in to see your todos.</p>
      )}
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </div>
  );
}

export default TodoList;