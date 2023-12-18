import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import "../layout/layout.css"
import Footer from "../footer/footer";
const Layout = () =>{

    return(
        <div className="layout">
            <Header/>
            <div className="main-conta">
            <Outlet/>

            </div>
           < Footer/>
        </div>
    )
}
export default Layout;