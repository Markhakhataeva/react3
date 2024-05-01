import React from "react";


export const Buttons=({plus,minus,reset})=>{
    return(
        <div className="buttons">
            <button className="btn" onClick={plus}>Увеличить</button>
            <button className="btn2" onClick={minus}>Уменьшить</button>
            <button className="btn3" onClick={reset}>Сбросить</button>
        </div>
    )
}