import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Contact = () => {
    return (
        <section id='contact' className="contact">

            <PageHeaderContent
                headerText='Contact Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contactContent">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(-200px)'
                    }}
                    end={{
                        transform: 'translateX(0)'
                    }}
                >
                    <h3 className="contactContentHeaderText"> Contact Me! </h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(200px)'
                    }}
                    end={{
                        transform: 'translateX(0)'
                    }}
                >
                    <div className="contactContentForm">
                        <div className="contactContentFormControlsWrapper">
                            <div>
                                <input required name="name" className="inputName" type={'text'} /> 
                                <label htmlFor="name" className="nameLabel"> Name </label>
                            </div>
                            <div>
                            <input required name="email" className="inputEmail" type={'text'} /> 
                                <label htmlFor="email" className="emailLabel"> Email </label>
                            </div>
                            <div>
                            <textarea required name="description" className="inputDescription" type={'text'} rows={5} /> 
                                <label htmlFor="description" className="descriptionLabel"> Description </label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}

export default Contact;