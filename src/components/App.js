
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
        <TodoList TodoItems={TodoItems} handleComp={handleComp} />
    </div>
  )
}

export default App
