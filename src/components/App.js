
import React,{useState,useEffect} from "react";
import "../styles/App.css"
import TodoList from "./TodoList";
//import ShowItem from "./ShowItem";


const App = () => {

  const [TodoItems,setTodoItems]=useState([
    {task:'Learn React',state:false},
    {task:'Built a React app',state:false},
    {task:'Deploy the React App',state:false}
  ]);
  
  useEffect(() => {
  console.log(TodoItems);
}, [TodoItems]);
  function handleComplete(index) {
    console.log(index);
    const newTodos = TodoItems.map((todo, i) => {
      if (i === index) {
        console.log(TodoItems[index].state);
        return { ...todo, state: true };

      }
      return todo;
    });
    setTodoItems(newTodos);
    console.log("in handle" , TodoItems);
  }


  return (
    <div>
      <h1>Parent Component</h1>
      <h3>Child Component</h3>
      
        <TodoList TodoItems={TodoItems} handleComplete={handleComplete} />
        
      
       
    </div>
  )
}

export default App
