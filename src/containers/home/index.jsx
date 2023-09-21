import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Home = () => {

    const navigate = useNavigate();
    // console.log(navigate);

    const handleNavigateToContactPage = () => {
        
        navigate('/contact')
    }


    return (
     <section id ='home' className="home">
        <div className="homeTextWrapper">
            <h1>
                Hello, My name is 
                <br />
                Jorge Jimenez
                <br />
                Full Stack Developer
            </h1>
        </div>
        <Animate play 
        duration={1.5} 
        delay={1} 
        start={{transform : 'translateY(550px)'
        }}
        end={{transform : 'translateX(0px)'
        }}
        >
        <div className="homeContactMe">
            <button onClick={handleNavigateToContactPage}>Contact Me</button>
        </div> 
        </Animate>
     </section>
    )
}

export default Home;