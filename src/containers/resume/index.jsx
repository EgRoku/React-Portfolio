import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from './utils';
import './styles.scss';
import {MdWork} from 'react-icons/md'; 

const Resume = () => {
    return (
        <section id='resume' className="resume">

            <PageHeaderContent
            headerText = 'Resume'
            icon = { <BsInfoCircleFill size={40} />}
            />
            <div className="timeline">
                <div className="timelineExperience">
                    <h3 className="timelineExperienceHeaderText">
                        Experience
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor='var(--cyan-theme-main-color)'
                    >
                        {
                            data.experience.map((item, i) =>(
                                <VerticalTimelineElement
                                key={i}
                                className="timelineExperienceVerticalTimelineElement"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--cyan-theme-sub-text-color)',
                                    border: '1.5px solid var(--cyan-theme-main-color)'
                                }}
                                icon={<MdWork/>}
                                iconStyle={{
                                    background: 'black',
                                    color: 'var(--cyan-theme-main-color)',
                                }}
                                >
                                    <div className="verticalTimelineElementTitleWrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="verticalTimelineElementTitleWrapperDescription">
                                        {item.description}
                                    </p>
                                    <p className="verticalTimelineElementTitleWrapperDescription">
                                        {item.date}
                                    </p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timelineEducation">
                    <h3 className="timelineEducationHeaderText">
                        Education
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor='var(--cyan-theme-main-color)'
                    >
                    {
                            data.education.map((item, i) =>(
                                <VerticalTimelineElement
                                key={i}
                                className="timelineExperienceVerticalTimelineElement"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--cyan-theme-sub-text-color)',
                                    border: '1.5px solid var(--cyan-theme-main-color)',
                                }}
                                icon={<MdWork/>}
                                iconStyle={{
                                    background: 'black',
                                    color: 'var(--cyan-theme-main-color)',
                                }}
                                >
                                    <div className="verticalTimelineElementTitleWrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="verticalTimelineElementTitleWrapperDescription">
                                        {item.description}
                                    </p>
                                </VerticalTimelineElement>
                            ))
                        }
                        </VerticalTimeline>
                </div>
            </div>
            <span className="footerText">
                 Download My Resume <a href="https://drive.google.com/file/d/1hworo0I4Q5VgSD5SikJVkKHL4znJLrW7/view?usp=sharing" rel="noreferrer"> Here </a>
            </span>

        </section>
    )
}

export default Resume;