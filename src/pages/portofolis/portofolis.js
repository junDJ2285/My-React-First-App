import React from "react";

const Portofolios = () =>{

    return(
        <div>
             <div className="portofolio-container">
                <div className="potofolio-headings">
                    <h1 className="mn-headings">My potofolios</h1>
                    <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!</p>
                </div>
                <div className="potofolio-images">
                    <div className="potofolio-items">
                        <img src={require("../../assets/images/portfolio-2.png")} alt="" />
                    </div>
                    <div className="potofolio-items">
                        <img src={require("../../assets/images/portfolio-3 (1).png")} alt="" />
                    </div>
                    <div className="potofolio-items">
                        <img src={require("../../assets/images/portfolio-4.png")} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Portofolios;