import { useState } from "react";
import "./App.scss"
const App = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>

            <h1>Hello</h1>
            <h2>{counter}</h2>
            <button onClick={() => {
                setCounter(state => state + 1)
            }}>+</button>
        </>

    )
}

export default App;