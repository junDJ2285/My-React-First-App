import React from "react";
import { createFromIconfontCN, LinkedinOutlined, GoogleOutlined, TwitterOutlined, RightCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import "./footer.css"
const Footer = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div>

            <footer className="footer">
            <div className="home-footer">
                <div className="footer-items">
                    <div className="footer-icons">
                        <LinkedinOutlined />
                        <IconFont type="icon-facebook" />
                        <TwitterOutlined />
                        <GoogleOutlined />

                    </div>
                </div>
                <div className="footer-items">
                    <img width="100" height="100" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png" class="custom-logo" alt="" decoding="async" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png 70w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1.png 200w" sizes="(max-width: 100px) 100vw, 100px"></img>

                </div>

                <div className="footer-items about-items-heading">
                    mail@Example.com
                </div>
                </div>
                <br/>
                    <p className="mn-para">Copyright 2023  Personel Poryofolio</p>

            </footer>
        </div>
    )
}

export default Footer;