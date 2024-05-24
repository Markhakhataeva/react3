import { Buttons } from "./Buttons";
import { Numbers } from "./Number";

export const Main=({counter,dispatch})=>{


    const plus=()=>{
            dispatch({
                type:'add',
            })
    }

    const minus=()=>{
        dispatch({
            type:'min',
        })
    }

    const reset=()=>{
        dispatch({
            type:'reset',
        })
    }



    return(
    <main>
        <Numbers counter={counter}/>
        <Buttons plus={plus} minus={minus} reset={reset}/>
    </main>)
}