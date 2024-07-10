import React, { useState } from "react";

export default function ShowItem(props) {
  const {TodoItem,handleComp} = props;
 
  const [toggle, settoggle] = useState(true);
  return (
    <div>
      {toggle ? (
        <>
        <ul>
          <li>
          <p>{TodoItem}</p>
          <button onClick={()=>handleComp(settoggle)}>Complete</button>
          </li>
        </ul>
         
        </>
      ) : (
        <>
         <ul>
          <li>
          <p>{TodoItem}</p>
          </li>
        </ul>
        
        </>
       
      )}
    </div>
  );
}
