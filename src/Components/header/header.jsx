import React from "react"
import "./header.css"
import { NavLink } from "react-router-dom";
import image from "../../assets/images/logo-header.png"
import DropdownBtn from "./dropdoown";

const Header = () => {

    return (
        <div>
            <header className="header-container">
                <div className="header-logo">
                    <img width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png" class="custom-logo" alt="" decoding="async" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png 70w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1.png 200w" sizes="(max-width: 70px) 100vw, 70px"></img>
                    <h1>TouchStar<b>DEV</b></h1>
                </div>
                <div className="nav-link-wraper mn-para">
                    <NavLink to={"/"}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        Home
                    </NavLink>
                    <NavLink to={"/About"}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        About
                    </NavLink>
                    <NavLink to={"/Skills"}
                        className={({ isActive }) =>

                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        Skills
                    </NavLink>
                    <NavLink to={"/Contact"}
                        className={({ isActive }) =>

                            `nav-link ${isActive ? "active-link" : ""}`
                        }>
                        Contact
                    </NavLink>
                </div>
                <div>
                    <NavLink to={"/Contact"}
                        className="mn-btn hide-btn">
                        Contact Me
                    </NavLink>

                </div>
                <div className="dropdown-btn"><DropdownBtn />
                </div>
            </header>

        </div>
    )
}
export default Header;