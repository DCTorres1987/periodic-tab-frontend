import React, {useState, useEffect} from 'react'
import { Button } from './button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    

    return (
        <>
            <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                        SCIENCE <i className='fab fa-typo3' />
                   </Link>
                   <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                   </div>

                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/periodictable' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Periodic Table
                            </Link>
                        </li>
                   </ul>
                   {button && <Button buttonstyle='btn--outline'>SIGN UP</Button>}
                </div> 
            </nav>
        </>
    )
}

export default Navbar