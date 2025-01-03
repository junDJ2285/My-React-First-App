import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css"
import { createFromIconfontCN, LinkedinOutlined, GoogleOutlined, TwitterOutlined, RightCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Divider, Input } from "antd";
import SessionCards from "./session";


const About = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div>
            <div className="about">
                <h1 className="About-headings">About Me</h1>
                <p className="mn-para">A passionate data scientist dedicated to turning complex data into actionable insights,<br></br> with a focus on innovation and problem-solving</p>
                <p className="mn-line-center"></p>
            </div>

            <div className="sec2-container">
                <div className="home-about">
                    <div className="about-container">
                        <div className="about-items ">
                            <img id="about-img" decoding="async" width="350" height="400" src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg" class="attachment-full size-full wp-image-778" alt="" srcset="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg 640w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1-236x300.jpg 236w, https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1-400x509.jpg 400w" sizes="(max-width: 640px) 100vw, 640px"></img>
                        </div>
                        <div className="about-items ">
                            <p className="mn-para">I'm open to collaboration on a range of web development projects, available for hire on a short to medium-term basis. Whether you're looking for someone to create a simple yet impactful micro-site for a social campaign, develop an MVP to test your startup idea, or build a fully functional website or app, I'm here to help bring your vision to life.</p>
                        </div>

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

                    </div>
                </div>
            </div>


            <div className="developer-data">
                <div className="data-items">

                </div>
                <div className="data-items">
                    <div className="data-items-content">
                        <h2 className="about-items-heading">Professional Contract Software Development</h2>
                        <p className="mn-line-left"></p>

                        <p className="mn-para">
                            Offering expert software development services tailored to your unique business needs on a contract basis.</p>
                        <NavLink
                            className="mn-btn" style={{ margin: "20px 1px" }}>
                            Dwnload CV
                        </NavLink>

                    </div>
                    <div className="data-items-content data-right-items">

                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>ML / AI</span></div>
                        </div>
                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>SQL Server / MY SQL</span></div>
                        </div>
                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>HTML, CSS, JavaScript</span></div>
                        </div>
                        <div className="progress-bar-white">
                            <div className="progress-bar-pink"><span>C#, PHP, Java.</span></div>
                        </div>
                    </div>
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

                        <div className="exp-3-items">
                            <div className="exp-3-items-content">
                                <h2 className="medium-headings"> Alliance Manager</h2>
                                <p className="mn-date">Mar 2023 - Apr 2024 .Remote</p>
                                <p className="mn-para"> Develop and execute an alliance strategy that aligns with the organization's goals and objectives.
                                    Build relationships with key decision makers at partner companies to create  Manage ongoing partner relationships, including regular communication, tracking of deliverables, and issue resolution</p>
                                {/* <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>UI/UX Design</span></div>
                                </div> */}
                            </div>
                            <div className="exp-3-items-content">
                                <h2 className="medium-headings">Software Engineer</h2>
                                <p className="mn-date">2018-2020</p>
                                <p className="mn-para">Analyzing user requirements and designing software solutions that meet those requirements.
                                    Writing, testing, and debugging code using programming languages such as Java, Python, C#, or JavaScript.
                                    Collaborating with other developers, designers, and stakeholders to ensure that software meets project requirements and is delivered on time and within budget.</p>
                                {/* <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>Web Developerr</span></div>
                                </div> */}
                            </div>
                            <div className="exp-3-items-content">
                                <h2 className="medium-headings"> Instructor & Coordinator</h2>
                                <p className="mn-date">Aug 2014 - May 2017</p>
                                <p className="mn-para"> Teaching Asp.Net, HTML, CSS, JavaScript, PHP, Wordpress
                                    <br /> Looking the problem of Student.
                                    <br /> Making Batches- Teaching Asp.Net, HTML, CSS, JavaScript, PHP, Wordpress - Looking the problem of Student. - Making Batches
                                    Software engineer</p>
                                {/* <div className="progress-bar-white">
                                    <div className="progress-bar-pink"><span>Frontend Developer</span></div>
                                </div> */}
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="">
                <SessionCards />
            </div>

            <div className="touch-counter">
                <h1 className="mn-headings">Stay In Touch</h1>
                <p className="mn-para">Contact Me: Feel free to reach out with any questions, project ideas, or collaboration <br /> opportunities. I'm just a message away and would love to hear from you.</p>
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