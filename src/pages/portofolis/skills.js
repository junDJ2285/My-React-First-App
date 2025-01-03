import React from "react";
import "./skills.css"
import { createFromIconfontCN, LinkedinOutlined, GoogleOutlined, TwitterOutlined, RightCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Input } from "antd";
import { NavLink } from "react-router-dom";

const Skills = () => {
    return (
        <div>
            <div className="work-exp-container">
                <div className="home-work">
                    <div className="work-heading">
                        <h1 className="mn-headings">SKILLS </h1>
                        <p className="mn-para"> Proficiency in data analysis, machine learning, statistical modeling, and data visualization<br></br> to extract insights and drive informed decisions</p>
                        <p className="mn-line-center"></p>


                    </div>
                    <div className="work-exp-container">
                        <div className="experience-items">
                            <img id="exp-head-icons" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" class="attachment-large size-large wp-image-492" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png 256w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer-150x150.png 150w" sizes="(max-width: 256px) 100vw, 256px"></img>
                            <h2>Client Side Languages</h2>
                            <p className="mn-para">HTML5, CSS(SASS,LESS), JavaScript(jQuery and Frameworks)</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Programming Languages</h2>
                            <p className="mn-para">C#, PHP, Java.</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>ML / AI</h2>
                            <p className="mn-para">
                                ML and AI with Python</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>


                    </div>
                    <div className="work-exp-container">
                        <div className="experience-items">
                            <img id="exp-head-icons" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" class="attachment-large size-large wp-image-492" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png 256w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer-150x150.png 150w" sizes="(max-width: 256px) 100vw, 256px"></img>
                            <h2>Mobile first</h2>
                            <p className="mn-para">Android, Windows, PWA, ServiceWorkers</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Frameworks & CMS</h2>
                            <p className="mn-para">.Net and WordPress</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Testing</h2>
                            <p className="mn-para">Unit, BlackBox, WhiteBox ,Compatibiity, Reliabilty etc.</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>


                    </div>
                    <div className="work-exp-container">
                        <div className="experience-items">
                            <img id="exp-head-icons" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" class="attachment-large size-large wp-image-492" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png 256w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer-150x150.png 150w" sizes="(max-width: 256px) 100vw, 256px"></img>
                            <h2>Building & deploying</h2>
                            <p className="mn-para">TFS, Github, GitLab</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Integration</h2>
                            <p className="mn-para">3rd party APIs, Google APIs, Twitter, Facebook, Youtube etc</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>
                        <div className="experience-items ">
                            <img id="exp-head-icons" loading="lazy" decoding="async" width="70" height="70" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-519" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png 150w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads.png 256w" sizes="(max-width: 150px) 100vw, 150px"></img>
                            <h2>Databases</h2>
                            <p className="mn-para">Sql Server, MySql.</p>
                            <div className="exp-btm-icon">
                                <RightCircleOutlined />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="touch-counter">
                <h1 className="mn-headings">Stay In Touch</h1>
                <p className="mn-para"> Feel free to reach out with any questions, project ideas, or collaboration <br /> opportunities. I'm just a message away and would love to hear from you.</p>
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
export default Skills;