import Login from "../Pages/Login"
import App from "../App"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            path: "/login",
            element: <Login/>
        }
    ]
}])

export default router;