import { useState } from "react";
import styles from "./App.module.scss"
import { Link, Outlet } from "react-router-dom";

const App = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <Link to={"/about"} >About</Link>
            <Link to={"/shop"} >Shop</Link>
            <Outlet />
        </div>

    )
}

export default App;