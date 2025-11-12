import { useState } from "react"

function FirstComp(){ 
    //useState(4)- directly give the value
    //using the function which will execute at first -- const [count,setCount]=useState(()=>{....code....})
    const [count,setCount]=useState(5)
    /*to give a theme 
    const [state,setState]=useState({count:4, theme:"blue"})
    const count=state.count
    const theme=state.theme*/

    function incrementCount(){
        //setCount(count+1)

        setCount(prevCount => prevCount+1)
        /*setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
        function decrementCount(){
            setState(prevState=>{
                return {...prevState, count:prevState.count-1}
            })
        }*/ //properly subtracting by 2
    }
    
    function decrementCount(){
        setCount(prevCount => prevCount-1)
    }

    return(                     
        <>
             <button onClick={incrementCount}>+</button>
             <span>{count}</span>
             <button onClick={decrementCount}>-</button>        
        </>
    )
}

export default FirstComp