import { useState } from "react";
import styles from "./App.module.scss"
import { Link, Outlet } from "react-router-dom";
import Image from "@/assets/bOvf94dPRxWu0u3QsPjF_tree.jpg";
import TestSvg from "../assets/test.svg";


const App = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <div className="">
                {/* {Image} */}
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