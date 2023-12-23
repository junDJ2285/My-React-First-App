import "./contact.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { createFromIconfontCN, PhoneOutlined, LinkedinOutlined, IconFont, TwitterOutlined, GoogleOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
const Contact = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
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
                <p className="mn-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias!</p>
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
                            <p className="mn-para">Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Aspernatur aliquid architecto enim omnis autem dolore rerum rem asperiores impedit est, tempore quasi voluptatibus? Cupiditate, quos unde tempore assumenda hic sint.</p>
                            <br />

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
        </div>
    )
}

export default Contact;