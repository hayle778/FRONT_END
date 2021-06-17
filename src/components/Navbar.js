import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import meritBankLogo from '../assets/images/meritBankLogo.png';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
        showButton();
      }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                MeritBank <html><br/></html><img src="https://coursereport-production.imgix.net/uploads/school/logo/983/original/merit-20america-20logo.jpg?w=200&amp;h=200   "width ="90" height = "80"></img>
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
  {/* ...................*/}
        
              <li className='nav-item'>
                <Link
                  to='/Services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/AboutUs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
  {/* .............................................. */}
  <li className='nav-item'>
                <Link
                  to='/MyAccount'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                 MyAccount
                </Link>
              </li>
{/* ................. */}




              <li>
                <Link
                  to='/login'
                  className='nav-links-mobile'
             
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Login</Button>}

            
          </div>

        </nav>
      </>
    );
  }
  
  export default Navbar;