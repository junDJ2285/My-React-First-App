import React from "react";
import "./portofolios.css"

const Portofolios = () => {

    return (
        <div>
            <div className="portofolio-Container">
                <div className="potofolio-headings">
                    <h1 className="mn-headings">Portfolios</h1>
                    <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!</p>
                </div>
                <div className="portfolio-content">
                    <div className="potofolio-headings">
                        <p className="mn-headings">What Service You Will Get From Me</p>
                        <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!</p>

                    </div>
                    <div>
                        <div className="portofilo-img">
                            <div className="potofolio-items-lg">
                                <img src={require("../../assets/images/portfolio-2.png")} alt="" />
                            </div>
                            <div>
                                <div className="potofolio-items-sm">
                                    <img src={require("../../assets/images/portfolio-3 (1).png")} alt="" />
                                </div>
                                <div className="potofolio-items-sm">
                                    <img src={require("../../assets/images/portfolio-4.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="potofolio-images">
                        <div className="potofolio-items-sm">
                            <img src={require("../../assets/images/portfolio-2.png")} alt="" />
                        </div>
                        <div className="potofolio-items-sm">
                            <img src={require("../../assets/images/portfolio-3 (1).png")} alt="" />
                        </div>
                        <div className="potofolio-items-sm">
                            <img src={require("../../assets/images/portfolio-4.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Portofolios;