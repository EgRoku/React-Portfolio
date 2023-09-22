import React, { useState } from "react";
import { FaBars, FaDragon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './styles.scss';


const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]



const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbarContainer">
                    <Link to={'/'} className="navbarContainerLogo">
                        <FaDragon size={30} />
                    </Link>
                </div>
                <ul className= {`navbarContainerMenu ${toggleIcon ? 'active' : '' } `}>
                    {
                        data.map((item) => (
                            <li className="navbarContainerMenuItem">
                                <Link className="navbarContainerMenuItemLinks" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar;