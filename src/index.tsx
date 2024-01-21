import { createRoot } from "react-dom/client";
import App from "./components/App";


const rootNode = document.getElementById("root");


if (!rootNode) {
    throw new Error("Not found root")
}

const application = createRoot(rootNode);

application.render(<App />);