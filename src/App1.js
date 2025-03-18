// rfc 
import React from "react"
export default function App1(){
    const mystyle = {
        backgroundColor:'black'
    }
    const [count,setCount] = React.useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <p style={{backgroundColor:'yellow'}}>Hellooooooooooooo</p>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}