import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import bookSearch from '../../images/bookSearch.png';
import dagobahDepot from '../../images/Dagobah Depot.png';
import ecommerce from '../../images/ecommerce.jpg';
import employeeTracker from '../../images/emploeeTracker.png';
import filmify from '../../images/Filmify.png';
import notes from '../../images/notes.png';
import passwordGenerator from '../../images/passwordGenerator.png';
import quiz from '../../images/quiz.png';
import readMe from '../../images/Readme1.png';
import scorsteezy from '../../images/scorsteezy.png';
import socialApi from '../../images/socialAPI.jpg';
import svgLogo from '../../images/SVG_Logo.svg.png';
import techSpot from '../../images/techSpot.png';
import textEditor from '../../images/textEditor.png';
import weatherApp from '../../images/weatherApp.png';
import workDay from '../../images/workDay.png';
import './styles.scss';
import { useState } from "react";

// Full Stack = 2, Front-End = 3


const portfolioData = [
    {
        id: 3,
        name: 'Scorsteezy',
        image: scorsteezy,
        link: 'https://scorsteezy-a5a23fdb1369.herokuapp.com/',
    },
    {
        id: 3,
        name: 'Dagobah Depot',
        image: dagobahDepot,
        link: 'https://dagobah-depot-34081fe1df5e.herokuapp.com/',
    },
    {
        id: 3,
        name: 'Filmify',
        image: filmify,
        link: 'https://eliasjrivera.github.io/Filmify/',
    },
    {
        id: 2,
        name: 'Book Search',
        image: bookSearch,
        link: 'https://github.com/EgRoku/bookSearchEngine',
    },
    {
        id: 2,
        name: 'Ecommerce',
        image: ecommerce,
        link: 'https://github.com/EgRoku/E-Commerce-Back-End',
    },
    {
        id: 2,
        name: 'Employee Tracker',
        image: employeeTracker,
        link: 'https://github.com/EgRoku/Employee-Tracker',
    },
    {
        id: 2,
        name: 'Note Taker',
        image: notes,
        link: 'https://github.com/EgRoku/Note-Taker',
    },
    {
        id: 2,
        name: 'Password Generator',
        image: passwordGenerator,
        link: 'https://egroku.github.io/Password-Generator/',
    },
    {
        id: 2,
        name: 'Code Quiz',
        image: quiz,
        link: 'https://egroku.github.io/Web-API-Quiz-Redux/',
    },
    {
        id: 2,
        name: 'Read me Generator',
        image: readMe,
        link: 'https://github.com/EgRoku/GenerateThyReadMe',
    },
    {
        id: 2,
        name: 'Social network API',
        image: socialApi,
        link: 'https://github.com/EgRoku/social-network-api',
    },
    {
        id: 2,
        name: 'SVG Logo Maker',
        image: svgLogo,
        link: 'https://github.com/EgRoku/SVG-Logo-Maker',
    },
    {
        id: 3,
        name: 'Tech Spot',
        image: techSpot,
        link: 'https://tech-spot-app-b7a85ed7734a.herokuapp.com/',
    },
    {
        id: 2,
        name: 'JATE',
        image: textEditor,
        link: 'https://github.com/EgRoku/JATE',
    },
    {
        id: 3,
        name: 'Whether Weather',
        image: weatherApp,
        link: 'https://egroku.github.io/Weather-App/',
    },
    {
        id: 2,
        name: 'Work Day Scheduler',
        image: workDay,
        link: 'https://egroku.github.io/Work-Day-Scheduler/',
    },
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Developed'
    },
    {
        filterId: 3,
        label: 'Designed'
    },
]

const Portfolio = () => {

    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    };

    function handleHover(index) {
        setHoveredValue(index);
    }

    // console.log(filteredValue);
    console.log(hoveredValue);

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue)

    // console.log(filteredItems);

    return (
        <section id='portfolio' className="portfolio">

            <PageHeaderContent
                headerText='Portfolio'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolioContent">
                <ul className="portfolioContentFilter">
                    {
                        filterData.map((item =>
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolioContentCards">
                    {
                        filteredItems.map((item, index) => (
                            <div className='portfolioContentCardsItem'
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolioContentCardsItemImgWrapper">
                                    <a href={item.link}>
                                        <img alt='bottom text' src={item.image} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <a href={item.link}>
                                                    <button>Visit</button>
                                                </a>
        
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;