import React, {  useState } from 'react';
import Title from '../components/Title';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import { BiSun, BiMoon } from 'react-icons/bi';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  React.useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
    
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, 'todos', todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), { completed: !todo.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };
 
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div>
        <div className="headers">
        <Header />
        <button className='dbttn' onClick={toggleDarkMode}>
  {darkMode ? <BiSun /> : <BiMoon />}
</button>


        </div>
        <Title />
        
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
