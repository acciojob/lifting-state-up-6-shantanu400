import React from "react";
import ShowItem from "./ShowItem";

export default function TodoList(props){
    const {TodoItems,handleComplete}=props;
    return(
        <>
         {
            TodoItems.map((item,index)=>{
                return <ShowItem index={index} TodoItem={item} handleComplete={handleComplete} />
            })
        }
        </>
    )

    
    
}