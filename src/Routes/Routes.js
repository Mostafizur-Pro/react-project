import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage/>,
      },
])



export default router;