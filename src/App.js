import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Sign from "./components/Sign";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Form from "./components/Form";

const root=ReactDOM.createRoot(document.getElementById("root"));

const App=()=>{
    return(
        <div id="app" >
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:[<Header/>,<Home/>,<About/>,<Footer/>],
    },
    {
      path:"/sign",
      element:[<Sign/>]
    },
    {
      path:"/form",
      element:[<Header/>,<Form/>,<Footer/>]
    },
    {
      path:"/about",
      element:[<Header/>,<Home/>,<About/>,<Footer/>]
    }
])
root.render(<RouterProvider router={appRouter}/>);