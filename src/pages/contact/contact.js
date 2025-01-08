import "./contact.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { createFromIconfontCN, PhoneOutlined, LinkedinOutlined, IconFont, TwitterOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
const Contact = () => {
    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                // setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div className="contact">
            <div className="potofolio-headings">
                <h1 className="mn-headings">Contact</h1>
                <p className="mn-para">Feel free to reach out with any questions, project ideas, or collaboration <br /> opportunities. I'm just a message away and would love to hear from you.</p>
            </div>
            <div className="contact-container">
                <div className="contact-three-items">
                    <div className="contact-items">
                        <PhoneOutlined className="conatct-icons" />
                        <p className='mn-para'>+923100989809 <br />Monday-friday From 7am -5pm</p>
                    </div>
                    <div className="contact-items">
                        <PhoneOutlined className="conatct-icons" />
                        <h3>Karachi Pakistan</h3>
                        <p className='mn-para'>Soilder Bazar no-3</p>

                    </div>
                    <div className="contact-items">
                        <PhoneOutlined className="conatct-icons" />
                        <h3>Contact@Domain.com</h3>
                        <p className='mn-para'>Contact Me Every Time.</p>
                    </div>
                </div>
                <div className="contact-2-items">
                    <div className="contact-items-left">
                        <div className="contact-left-content">
                            <h1 className="mn-headings">Get In Touch</h1>
                            <p className="mn-line-left"></p>
                            <div className="contact-form">
                                <Form
                                    //   form={form}
                                    layout="vertical"
                                    // name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter Your Name" className="contact-inputs" />
                                    </Form.Item>

                                    <Form.Item

                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Email',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter Your Email" className="contact-inputs" />
                                    </Form.Item>
                                    <Form.Item

                                        name="message"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Email',
                                            },
                                        ]}
                                    >
                                        <TextArea placeholder="Enter Your Message" className="contact-inputs" />
                                    </Form.Item>

                                    <Form.Item

                                    >
                                        <Button htmlType="submit" className="mn-btn">
                                            Send Message
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-items-right">
                        <div className="about-Items ">
                            <h2 className="about-items-heading">Messeage Me</h2>
                            <p className="mn-line-left"></p>
                            <p className="mn-para">Whether you have a project idea, need assistance, or just want to discuss potential collaborations, I'm here to help. Feel free to reach out with your questions or ideas, and I'll respond promptly. Let's work together to turn your vision into reality!</p>
                            <br />

                            <div className="">
                                <div className="contact-icons">
                                    <a href="https://www.linkedin.com/in/asif-ali-b7783811b/" target="_blank" rel="noopener noreferrer">
                                        <LinkedinOutlined />
                                    </a>
                                    <a href="https://twitter.com/asif_shammiri" target="_blank" rel="noopener noreferrer">
                                        <TwitterOutlined />
                                    </a>
                                    <a href='https://github.com/Asif-Shammiri' target="_blank">
                                        <GithubOutlined />

                                    </a>
                                    <a href='https://stackoverflow.com/users/7603284/touchstardev?tab=profile' target="_blank">
                                        {/* <GithubOutlined /> */}
                                        <img className="stack-logo" src={require("../../assets/images/stack.png")} alt="" />

                                    </a>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact;