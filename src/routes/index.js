import { Routes, Route } from "react-router-dom";
import Header from "../component/navbar/Navbar";
import { privateRoutes } from "./routesData";
import Footer from "../component/footer/Footer";

const Routing = () => {
    return (
        <>
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
            <Footer/>
           
        </>
    );
};

export default Routing;