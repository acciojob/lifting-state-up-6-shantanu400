import React from "react";
import ShowItem from "./ShowItem";

export default function TodoList(props){
    const {TodoItems,handleComp}=props;
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