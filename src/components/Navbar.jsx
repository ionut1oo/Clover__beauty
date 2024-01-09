import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

    return (
      <header>
        <button
             type="button"
             className="hamburger"
             aria-controls="primary-navigation"
             aria-expanded={isVisible}
             onClick={handleClick}>
              <span className={`span1 ${isVisible ? 'cross' : ''}`}></span>
              <span className={`span2 ${isVisible ? 'cross' : ''}`}></span>
              <span className={`span3 ${isVisible ? 'cross' : ''}`}></span>
            </button>

        <nav className='navbar'>
          <img src="imgs/logo.jpg" alt="logo" 
          className='navbar__logo'/>
      <div id="primary-navigation" 
          className={`navbar__navigation ${isVisible ? 'show' : ''}`}
        >
            <LinkScroll to='acasă' activeClass="active" 
            spy={true} smooth={true} offset={50} 
            duration={500} className="navbar__link">
              Acasă
            </LinkScroll>
            <LinkScroll to='prețuri' activeClass="active" 
            spy={true} smooth={true} offset={50} 
            duration={500} className="navbar__link">
              Listă Prețuri
            </LinkScroll>
            <LinkScroll to='programare' activeClass="active" 
            spy={true} smooth={true} offset={50}
            duration={500} className="navbar__link">
              Programează-te
            </LinkScroll>
            <LinkScroll to='contact' activeClass="active"
            spy={true} smooth={true} offset={50}
            duration={500} className="navbar__link">
              Contact
            </LinkScroll>
          </div>
      </nav>
      </header> 
    );
}

export default Navbar;