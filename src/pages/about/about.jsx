import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css"
import { createFromIconfontCN, LinkedinOutlined, GoogleOutlined, TwitterOutlined, RightCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Input } from "antd";


const About = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div>
            <div className="About-headings">
                <h1>About Me</h1>
            <p className="mn-line-center"></p>
            </div>

            <div className="sec2-container">
                <div className="">

                    <div className="about-Container">
                        <div className="about-Items ">
                            <img id="about-img" decoding="async" width="350" height="400" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg" class="attachment-full size-full wp-image-778" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg 640w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1-236x300.jpg 236w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1-400x509.jpg 400w" sizes="(max-width: 640px) 100vw, 640px"></img>
                        </div>

                        <div className="about-Items">
                            <h2 className="about-items-heading">Developer with a passion <br /> While Exploring the World</h2>
                            <p className="mn-line-left"></p>
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error, modi libero obcaecati, eaque dolores, exercitationem ullam neque laboriosam tempore quam necessitatibus voluptates dolore  vitae. ipsum agree with </p>
                            <br />
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias </p>
                            <br />
                            <p>Let's Talk With Me</p>
                            <br />
                            <br />
                            <h2 className="about-items-heading">Contact@Domain.com</h2>




                        </div>
                        <div className="about-Items ">
                            <h2 className="about-items-heading">I Create A Product Not Just Art</h2>
                            <p className="mn-line-left"></p>
                            <p className="mn-para">Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Aspernatur aliquid architecto enim omnis autem dolore rerum rem asperiores impedit est, tempore quasi voluptatibus? Cupiditate, quos unde tempore assumenda hic sint.</p>
                            <br />
                            <p className="mn-para">Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit.</p>
                            <div className="">
                                <div className="about-icons">
                                    <LinkedinOutlined />
                                    <IconFont type="icon-facebook" />
                                    <TwitterOutlined />
                                    <GoogleOutlined />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="developer-data">
                <div className="data-items">

                </div>
                <div className="data-items">
                    <div className="data-items-content">
                        <h2 className="about-items-heading">Frontend and Backend  Web Developer</h2>
                        <p className="mn-line-left"></p>

                        <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                        <NavLink 
                            className="mn-btn" style={{ margin: "20px 1px" }}>
                            Dwnload CV
                        </NavLink>

                    </div>
                    <div className="data-items-content data-right-items">

                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>HTML</span></div>
                        </div>
                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>CSS</span></div>
                        </div>
                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>JavaScript</span></div>
                        </div>
                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>Photoshop</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-exp-container">
                <div className="home-work">
                    <div className="work-heading">
                        <h1 className="mn-headings">What  My Clients Says</h1>
                        <p className="mn-para">Lorem ipsum dolor sit, amet consectetur adipisicing </p>
                        <p className="mn-line-center"></p>
                    </div>
                    <div className="work-exp-container">
                        <div className="experience-items">
                            <div className="clients-icon">@</div>
                            <img className="clints-img" src={require("../../assets/images/male-1.jpg")} alt="" />
                           
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <p className="mn-line-center"></p>
                            <div className="client-btm-name">
                                <p>Jhon Doe</p>
                            </div>
                        </div>
                        <div className="experience-items ">
                            <div className="clients-icon">@</div>
                            <img className="clints-img" src={require("../../assets/images/male-3.jpg")} alt="" />
                          
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <p className="mn-line-center"></p>
                            <div className="client-btm-name">
                                Anker Doe
                            </div>
                        </div>
                        <div className="experience-items ">
                            <div className="clients-icon">@</div>
                            <img className="clints-img" src={require("../../assets/images/female-3-150x150.jpg")} alt="" />
                            
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <p className="mn-line-center"></p>
                            <div className="client-btm-name">
                                Adam
                            </div>
                        </div>


                    </div>
                    <div className="about-2items-container">
                        <div className="about-Items-btm">
                            <div className="clients-icon">@</div>
                            <img className="clints-img" src={require("../../assets/images/male-1.jpg")} alt="" />
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            
                            <p className="mn-line-center"></p>
                            <div className="client-btm-name">
                                <p>Jhon Doe</p>
                            </div>
                        </div>
                        <div className="about-Items-btm ">
                            <div className="clients-icon">@</div>
                            <img className="clints-img" src={require("../../assets/images/male-3.jpg")} alt="" />
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <p className="mn-line-center"></p>
                            <div className="client-btm-name">
                                Anker Doe
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
            <div className="touch-counter">
                <h1 className="mn-headings">Stay In Touch</h1>
                <p className="mn-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla iste ut hic tempore earum qui! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="mn-line-center"></p>
                <div className="touch-search">
                    <Input className="touch-input" placeholder="Enter email address" />
                    <NavLink
                        className="mn-btn" style={{ margin: "20px 1px" }}>
                        Subscribe
                    </NavLink>
                </div>
            </div>
                    
                



        </div>
    )
}
export default About;