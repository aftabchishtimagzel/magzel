
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";



// ================rout data===================  //

export const privateRoutes = [
  
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/blog",
        element: <Blog/>,
    },
    
]

