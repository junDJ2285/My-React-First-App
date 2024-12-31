import React from "react";
import "./home.css"
import { Button, Input, Space } from "antd";
import { createFromIconfontCN, LinkedinOutlined, GoogleOutlined, TwitterOutlined, RightCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import image from "../../assets/images/portfolio-2.png"
const Home = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div >
            <div className="home-container">
                <div className="home-left ">
                    <div className="left-icons">
                        <LinkedinOutlined />
                        <IconFont type="icon-facebook" />
                        <TwitterOutlined />
                        <GoogleOutlined />

                    </div>
                    <div className="left-content">
                        <h1 className=" mn-headings">I`m Web Developer JUNAID ABBAS</h1>
                        <p className="mn-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nihil, asperiores quam cupiditate eligendi excepturi tempora consequatur aspernatur molestias. Itaque.</p>
                        <div>

                            <NavLink to={"/Portofolio"}
                                className="mn-btn" style={{ margin: "20px 1px" }}>
                                Learn more
                            </NavLink>
                        </div>

                    </div>
                </div>
                <div className="home-right">
                    <img src={require("../../assets/images/profile-img.png")} alt="" />
                </div>
            </div>
            <div className="sec2-container">
                <div className="home-about">
                    <div className="about-heading">
                        <h1 className="mn-headings">About Me</h1>
                        <p className="mn-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit!</p>
                        <p className="mn-line-center"></p>


                    </div>
                    <div className="about-container">
                        <div className="about-items">
                            <h2 className="about-items-heading">Developing With A Passion <br /> While Exploring The World</h2>
                            <p className="mn-line-left"></p>
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error, modi libero obcaecati, eaque dolores, exercitationem ullam neque laboriosam tempore quam necessitatibus  corrupti impedit odio blanditiis sint consequatur ratione, architecto vitae.</p>
                            <br />
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.  error.</p>

                            <NavLink to={"/Portofolio"}
                                className="mn-btn" style={{ margin: "20px 1px" }}>
                                Contact Me
                            </NavLink>


                        </div>
                        <div className="about-items ">
                            <p className="mn-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aliquid architecto enim omnis autem dolore rerum rem asperiores impedit est, tempore quasi voluptatibus? Cupiditate, quos unde tempore assumenda hic sint.</p>
                        </div>
                        <div className="about-items ">
                            <img id="about-img" decoding="async" width="350" height="400" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg" class="attachment-full size-full wp-image-778" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg 640w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1-236x300.jpg 236w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1-400x509.jpg 400w" sizes="(max-width: 640px) 100vw, 640px"></img>
                        </div>

                    </div>
                </div>
            </div>


            <div className="work-exp-container">
                <div className="home-work">
                    <div className="work-heading">
                        <h1 className="mn-headings">What  Services I'm Providing </h1>
                        <p className="mn-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit!</p>
                        <p className="mn-line-center"></p>


                    </div>
                    <div className="work-exp-container">
                        <div className="experience-items">
                            <img id="exp-head-icons" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" class="attachment-large size-large wp-image-492" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png 256w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer-150x150.png 150w" sizes="(max-width: 256px) 100vw, 256px"></img>
                            <h2>UI/UX Design</h2>
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Digital Marketting</h2>
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Web Development</h2>
                            <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="process-bg-img">
                <div className="process-container">
                    <div className="process-icon"><PlayCircleOutlined style={{ color: '#ffffff' }} /></div>
                    <h1 className="mn-headings">Working Process</h1>
                    <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit before after. <br />  Accusantium molestias fugit molestiae corporis .</p>
                </div>
            </div>

            <div id="exp-section">
                <div className="exp-container">
                    <div className="exp-heading">
                        <h1 className="mn-headings">Work Experience</h1>
                        <p className="mn-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p className="mn-line-center"></p>
                    </div>
                    <div className="exp-items-container">
                        <div className="exp-2-items">
                            <div className="exp-content">
                                <h2 className="medium-headings">UI/UX Design</h2>
                                <p className="mn-date">2018-2020</p>
                                <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                                <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>UI/UX Designer</span></div>
                                </div>
                            </div>
                            <div className="exp-content">
                                <h2 className="medium-headings">Frontend Developer</h2>
                                <p className="mn-date">2018-2020</p>
                                <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                                <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>Frontend Developer</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="exp-3-items">
                            <div className="exp-3-items-content">
                                <h2 className="medium-headings">UI/UX Design</h2>
                                <p className="mn-date">2018-2020</p>
                                <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                                <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>UI/UX Design</span></div>
                                </div>
                            </div>
                            <div className="exp-3-items-content">
                                <h2 className="medium-headings">Web Developer</h2>
                                <p className="mn-date">2018-2020</p>
                                <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                                <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>Web Developerr</span></div>
                                </div>
                            </div>
                            <div className="exp-3-items-content">
                                <h2 className="medium-headings">Frontend Developer</h2>
                                <p className="mn-date">2018-2020</p>
                                <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque doloremque odit quaerat error Lorem ipsum dolor sit amet.</p>
                                <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>Frontend Developer</span></div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="portofolio-container">
                <div className="potofolio-headings">
                    <h1 className="mn-headings">My potofolios</h1>
                    <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!</p>
                    <p className="mn-line-center"></p>
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
export default Home;