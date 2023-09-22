import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { FaReact, FaJs, FaCss3, FaNodeJs } from 'react-icons/fa';

const details = [
    {
        label: 'Name',
        value: 'Jorge Jimenez',
    },
    {
        label: 'Age',
        value: '25',
    },
    {
        label: 'Location',
        value: 'San Diego, CA, USA',
    },
    {
        label: 'Email',
        value: 'jimenezjj5150@gmail.com',
    },
    {
        label: 'Contact Number',
        value: '1(909)894-6746',
    },
];

const summary = 'Im a graduate of UCSDs coding bootcamp from San Diego, California looking to work in the web development space. I enjoy turning complex projects into simple, good looking designs. My goal is to build websites so that they are functional and user-friendly while also same time attractive. Moreover, I add personal touches to your products and make sure that is eye-catching and easy to use. My aim is to bring across your message and cook-it-up in a creative way.';

const About = () => {
    return (
        <section id='about' className="about">
            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="aboutContent">
                <div className="aboutContentPersonalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-2000px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3>
                            Full Stack Developer
                        </h3>
                        <p>{summary}</p>
                    </Animate>

                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateY(600px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >

                        <h3 className="personalInfoHeader"> Contact Info </h3>
                        <ul>
                            {
                                details.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="aboutContentServicesWrapper">
                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className="aboutContentServicesWrapperInnerContent">
                            <div>
                                <FaReact size={60} color='var(--cyan-theme-main-color)' />
                            </div>
                            <div>
                                <FaJs size={60} color='var(--cyan-theme-main-color)' />
                            </div>
                            <div>
                                <FaCss3 size={60} color='var(--cyan-theme-main-color)' />
                            </div>
                            <div>
                                <FaNodeJs size={60} color='var(--cyan-theme-main-color)' />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;