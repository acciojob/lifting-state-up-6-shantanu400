import React from "react";

export default function showItem(props) {
  const {TodoItem,handleComplete,index} = props;
  const {task,state}=TodoItem;
  console.log(index);
  
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
              
            </li>
          </ul>
        </>
      )
      }
      </div>
      )
          }
      