import { Buttons } from "./Buttons";
import { Numbers } from "./Number";
import {Add, Minus, Reset} from "./actions";

export const Main=({counter,dispatch})=>{


    const plus=()=>{
        dispatch(Add())
    }

    const minus=()=>{
        dispatch(Minus())
    }

    const reset=()=>{
        dispatch(Reset())
    }



    return(
    <main>
        <Numbers counter={counter}/>
        <Buttons plus={plus} minus={minus} reset={reset}/>
    </main>)
}