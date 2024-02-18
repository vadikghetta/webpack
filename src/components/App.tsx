import { useState } from "react";
import styles from "./App.module.scss"
import { Link, Outlet } from "react-router-dom";
import TestSvg from "../assets/test.svg";


const App = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <div className="">
                <img src={"../assets/bOvf94dPRxWu0u3QsPjF_tree.jpg"} width={100} height={100} />
            </div>
            <TestSvg fill="#000" />
            <Link to={"/about"} >About</Link>
            <Link to={"/shop"} >Shop</Link>
            <Outlet />
            <button className={styles.button}>+</button>
        </div>

    )
}

export default App;