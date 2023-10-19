import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss';


const Skills = () => {
    return (
        <section id='skills' className="skills">

            <PageHeaderContent
                headerText='My Skills'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skillsContentWrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skillsContentWrapperInnerContent">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform: 'translateX(0px)'
                                }}
                            >
                                <h3 className="skillsContentWrapperInnerContentCategoryText">{item.label}</h3>
                                <div>
                                    {
                                        item.data.map((skillItem, j) => (
                                            <Animate
                                                play
                                                duration={1}
                                                keyFrames={['opacity : 1', 'opacity : 0']}
                                                iterationCount='1'
                                            >
                                                <div className="progressbarWrapper" key={j}>
                                                    <p>
                                                        {skillItem.skillName}
                                                    </p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth='2'
                                                        strokeColor='var(--cyan-theme-main-color)'
                                                        trailWidth='2'
                                                        strokeLinecap="square"
                                                    >
                                                    </Line>
                                                </div>
                                            </Animate>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;