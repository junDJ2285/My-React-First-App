import React from 'react';
import { Card, Col, Image, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
const SessionCards = () => (
    <><div>

        <div className="about">
            <h1 className="About-headings">Sessions</h1>
            <p className="mn-para">A passionate data scientist dedicated to turning complex data into actionable insights,<br></br> with a focus on innovation and problem-solving</p>
            <p className="mn-line-center"></p>
        </div>
        <div className="Session-container">
            <div className="">
                <Card
                    hoverable
                    style={{
                        width: 345,

                    }}
                    cover={<Image
                        height={250}
                        src="https://media.licdn.com/dms/image/v2/D4D22AQEui0rI1OfgqQ/feedshare-shrink_2048_1536/B4DZP0nqUUGUAw-/0/1734975862367?e=1738800000&v=beta&t=-NhDzn_IMpf3drMdR01jGFPWAAR9_kBhk1AixCURaXU"
                    />}

                >
                    <Meta title=" Building Connections, Shaping Futures!" description="Our team of dedicated educators had the privilege of attending the Education Leadership Summit at Mehran Hotel, Karachi.
It was an incredible opportunity to connect with school leaders from diverse institutions, exchange ideas, and collaborate on strategies to enhance education and leadership. Together, we aim to inspire positive change and build a brighter future for our students." />
                </Card>
            </div>
            <div className=" ">
                <Card
                    hoverable
                    style={{
                        width: 345,
                    }}
                    cover={<Image
                        height={250}
                        src="https://media.licdn.com/dms/image/v2/D4D22AQFDvld9CgpITw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731741302616?e=1738800000&v=beta&t=e3XVrHVny5eKVXDQ4MzR9BV3bxdqLDFnkPDtrgCHYS8" />}

                >
                    <Meta title="Teach What You Learn: A Path to Mastery and Impact" description="One of the most valuable lessons I’ve embraced in my journey as a data scientist and educator is the power of teaching. Teaching what you learn not only deepens your understanding but also creates a ripple effect of knowledge sharing." />
                </Card>
            </div>
            <div className=" ">
                <Card
                    hoverable
                    style={{
                        width: 345,
                        height: 500,
                        overflow: 'auto',
                        overflowX: "hidden",
                        scrollbarWidth: 5,
                        msOverflowStyle: 'none'

                    }}
                    cover={<Image
                        height={250}
                        src="https://media.licdn.com/dms/image/v2/D4D22AQH-XTuWUS4NIg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723801466598?e=1738800000&v=beta&t=1LGXPylN-up9dR6ploIujRjaP09OkRtw_Km0IdzPI3g" />}

                >
                    <Meta title="Empowering our educators!" description="We are proud to collaborate with the UPSIGN team, who brought exceptional trainers from the UK to share their expertise. Special thanks to Madiha Sajid, Senior Fellow of the Higher Education Academy, Dr. Lion Shahab, Professor of Health Psychology at University College London (UCL) & Director of the MSc in Health Psychology, and Dr. Sajid Saleem, Trainer/Associate Professor at NUST, for their dedication to enriching our faculty’s teaching methodologies. " />
                </Card>
            </div>


        </div>
    </div>
    </>
);
export default SessionCards;