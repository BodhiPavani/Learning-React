import {useState} from 'react'
//useState
export default function TextFeild(){
    const [text, setText]=useState('Hello');

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <>
        <input type="text" value={text} onChange={handleChange} /> 
        <p>You Typed: {text}</p>
        <button onClick={() => setText('hello')}>Reset</button>
        </>
    )
}
