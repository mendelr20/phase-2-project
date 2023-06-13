import React, {useState} from "react";

export default function Counter(){
    const [formText, setFormText] = useState("")
    const [counter, setCounter] = useState(0)
    console.log(formText)

    function handleSubmit(e){
        e.preventDefault();
        setCounter(counter + formText.length)
        setFormText('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setFormText(e.target.value)} value={formText}></input>
                <button type="Submit" >submit</button>
            </form>
            <h1>{counter}</h1>
        </div>
    )
}


