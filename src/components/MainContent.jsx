import React, { useState } from "react";
import { Buttons } from "./Buttons";
import { Numbers } from "./Number";

export const Main=()=>{

    const [counter,setCounter]=useState(0)
    
    const plus=()=>{
        if (counter >= 0 ){
            setCounter(counter + 3)
        }
    }

    const minus=()=>{
        if (counter >0 ){
            setCounter(counter - 2)
        }
    }

    const reset=()=>{
        setCounter(0)
        
    }



    return(
    <main>
        <Numbers count={counter}/>
        <Buttons plus={plus} minus={minus} reset={reset}/>
    </main>)
}