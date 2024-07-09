import React, { useState } from "react";

export default function ShowItem(props) {
  const {TodoItem,handleComp} = props;
 
  const [toggle, settoggle] = useState(true);
  return (
    <div>
      {toggle ? (
        <>
          <p>{TodoItem}</p>
          <button onClick={()=>handleComp(settoggle)}>Completed</button>
        </>
      ) : (
        <p>{TodoItem}</p>
      )}
    </div>
  );
}
