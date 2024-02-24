import { useState } from "react";
import styles from "./App.module.scss"
import { Link, Outlet } from "react-router-dom";
import TestSvg from "../assets/test.svg";
import TreeJpg from "../assets/bOvf94dPRxWu0u3QsPjF_tree.jpg";


const App = () => {
    const [counter, setCounter] = useState<number>(0);
    if (__PLATFORM__ === 'desktop') {
        return <div>ISDESKTOPPLATFORM</div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>ISMOBILEPLATFORM</div>
    }
    return (
        <div>
            <div className="">
                <img src={TreeJpg} width={100} height={100} />
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