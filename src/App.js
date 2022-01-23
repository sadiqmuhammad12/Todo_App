import {React,useState,useEffect} from 'react';
import './App.css';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import { Todo } from './Todo';
import { doc, onSnapshot, collection, query } from "firebase/firestore";

import  db from './firebase';

function App() {
  const [todos, setTodos] = useState(['What is your name ?','How are you','where are you live']);
  const [input, setInput] = useState('');
  // useEffect(() => {
  //  db.collection('todos').onSnapshot(snapshot => {
  //    setTodos(snapshot.docs.map(doc => doc.data().todo))
  //  })
  // }, []);

  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log("Data", querySnapshot.docs.map(d => doc.data()));
    });
  }, [])

  const AddTodo = (event) => {
    event.preventDefault();
    setTodos([...todos,input]);
    setInput(''); // clear up the input field after clicking add todo button
  }
  return (
    <div className="App">
     <h1>Hello Sadiq Programming</h1>
     <form>
      
        <FormControl>
          <InputLabel>Type Here</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        {/* <button type='submit' onClick={AddTodo}>Add Todo</button> */}
        <Button disabled={!input} type='submit' onClick={AddTodo} variant="contained" color="primary"> Add Todo</Button>
       
     </form>
     <ul>
       
        {todos.map(todo =>(
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
     </ul>
    </div>
  );
}

export default App;
