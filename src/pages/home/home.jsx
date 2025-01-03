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
                    {/* <div className="left-icons">
                        <LinkedinOutlined />
                        <IconFont type="icon-facebook" />
                        <TwitterOutlined />
                        <GoogleOutlined />

                    </div> */}
                    <div className="left-content">
                        <h1 className=" mn-headings">Professional Data Scientist & Software Development</h1>
                        <p className="mn-para">I'm Asif - a Pakistan based Software developers,with a passion for all screen Specially for Mobile.</p>
                        <div>

                            <NavLink to={"/Portofolios"}
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
                        <p className="mn-para">Professional Contract Software Development</p>
                        <p className="mn-line-center"></p>


                    </div>
                    <div className="about-container">
                        <div className="about-items">
                            <h2 className="about-items-heading">Developing With A Passion <br /> While Exploring The World</h2>
                            <p className="mn-line-left"></p>
                            <p className="mn-para">I'm available for hire on small to medium web development projects for the short to medium term. From micro social campaign sites through MVPs to full site and app builds, please get in touch. .</p>
                            <br />
                            <p className="mn-para">I also consult on exisiting projects, particularly on performance analysis and best web practices</p>

                            <NavLink to={"/Portofolio"}
                                className="mn-btn" style={{ margin: "20px 1px" }}>
                                Contact Me
                            </NavLink>


                        </div>
                        <div className="about-items ">
                            <p className="mn-para">I'm open to collaboration on a range of web development projects, available for hire on a short to medium-term basis. Whether you're looking for someone to create a simple yet impactful micro-site for a social campaign, develop an MVP to test your startup idea, or build a fully functional website or app, I'm here to help bring your vision to life.</p>
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
                        <p className="mn-para">Work and Experience: A showcase of my professional journey, projects completed, and skills honed over the years.</p>
                        <p className="mn-line-center"></p>
                    </div>
                    <div className="exp-items-container">
                        <div className="exp-2-items">
                            <div className="exp-content">
                                <h2 className="medium-headings">IQRA UNIVERSITY (Official)</h2>
                                <p className="mn-date">2020-2024 OnSite</p>
                                <h3 className="medium-headings">Lecturer</h3>
                                <p className="mn-para">Teaching Labs and Courses like Programming (Java, C#, and Python)</p>
                                <h3 className="medium-headings">Instructor</h3>
                                <p className="mn-para">Teaching Labs and Courses like Programming (Java, C#, and Python), etc.<br></br>
                                    Assisting Students in projects</p>
                                {/* <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>BIZKIDZ ACADEMY</span></div>
                                </div> */}
                            </div>
                            <div className="exp-content">
                                <h2 className="medium-headings">TOUCH STAR INSTITUDE</h2>
                                <p className="mn-date">Jun 2019 - Present · 5 yrs 8 month</p>
                                <p className="mn-para">As the Founder, I established and currently lead a dynamic institute dedicated to offering high-quality short computer courses. My role involves a wide range of responsibilities from strategic planning to hands-on teaching, ensuring the institute’s growth and the success of its students</p>
                                {/* <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>Frontend Developer</span></div>
                                </div> */}
                            </div>
                        </div>
                        <NavLink to={"/About"}
                            className="mn-btn" style={{ margin: "20px 1px" }}>
                            SEE MORE
                        </NavLink>


                        <div>

                        </div>

                    </div>
                </div>
            </div>


            {/* <div className="work-exp-container">
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
            </div> */}

            <div className="touch-counter">
                <h1 className="mn-headings">Stay In Touch</h1>
                <p className="mn-para">Contact Me: Feel free to reach out with any questions, project ideas, or collaboration <br /> opportunities. I'm just a message away and would love to hear from you</p>
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