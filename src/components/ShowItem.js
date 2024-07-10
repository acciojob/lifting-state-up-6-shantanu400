import React from "react";

export default function ShowItem(props) {
  const {TodoItem,handleComplete,index} = props;
  const {task,state}=TodoItem;
  
  return (
    <div>
      {state===false ? (
        <>
        <ul>
          <li>
          <p>{task}</p>
          <button onClick={()=>handleComplete(index)}>Complete</button>
          </li>
        </ul>
         
        </>
      ) : (
        <>
          <ul>
            <li>
              <p>{task}</p>
              <p>Completed</p>
            </li>
          </ul>
        </>
      )
      }
      </div>
      )
          }
      