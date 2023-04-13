import { Routes, Route } from "react-router-dom";
import Header from "../component/navbar/Navbar";
import { privateRoutes } from "./routesData";
import Footer from "../component/footer/Footer";
import Contact from "../component/footer/Contact";

const Routing = () => {
    return (
        <div >
            {/* style={{backgroundColor:"lightgray"}} */}
       {/* ================routing===================  */}

            <Header/>
            <Routes>
                {
                 privateRoutes.map((route, index) => (
                     <Route
                         key={index}
                         path={route.path}
                         element={route.element}>
                        </Route>
                    ))
                   }
            </Routes>
            {/* footer */}
            <Contact/>
            <Footer/>
           
        </div>
    );
};

export default Routing;