
import React from "react";
import "../styles/App.css"
import TodoList from "./TodoList";
//import ShowItem from "./ShowItem";

let TodoItems=["read","write","mugup","apply"];

const App = () => {

  
  function handleComp(settoggle){
    console.log("in handlecomp")
    //event.preventDefault();
    settoggle(false);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <h3>Child Component</h3>
      
        <TodoList TodoItems={TodoItems} handleComp={handleComp} />
        
      \
       
    </div>
  )
}

export default App
