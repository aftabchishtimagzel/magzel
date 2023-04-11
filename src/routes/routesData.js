
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Indestry from "../pages/indestries/Indestry";
import Service from "../pages/services/Service";



// ================rout data===================  //

export const privateRoutes = [
  
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/industries",
        element: <Indestry />,
    },
    {
        path: "/services",
        element: <Service />,
    },
    {
        path: "/blog",
        element: <Blog/>,
    },
    
]

