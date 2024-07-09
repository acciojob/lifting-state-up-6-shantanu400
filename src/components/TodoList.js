import React from "react";
import ShowItem from "./showItem";

export default function TodoList(props){
    const {TodoItems,handleComp,toggle}=props;
    return(
        <>
         {
            TodoItems.map((item,index)=>{
                return <ShowItem key={index} TodoItem={item} handleComp={handleComp} />
            })
        }
        </>
    )

    
    
}