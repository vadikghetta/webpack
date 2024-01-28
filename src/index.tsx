import { createRoot } from "react-dom/client";
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutLazy } from "./pages/about/About.lazy";
import { ShopLazy } from "./pages/shop/Shop.lazy";
import { Suspense } from "react";


const rootNode = document.getElementById("root");


if (!rootNode) {
    throw new Error("Not found root")
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={"Loading..."}>
                    <AboutLazy />
                </Suspense>
            },
            {
                path: "/shop",
                element: <Suspense fallback={"Loading..."}>
                    <ShopLazy />
                </Suspense>
            }
        ],
    }
]);
const application = createRoot(rootNode);

application.render(<RouterProvider router={router} />);