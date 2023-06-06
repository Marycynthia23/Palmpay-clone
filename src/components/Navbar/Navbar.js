import React,{useState} from 'react'
import styles from './Navbar.module.css'
import logo from "../../Images/logo.png"
import NGN from "../../Images/NG.png"
import { MdArrowDropDown } from 'react-icons/md';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className={styles.NavCont}>
        <div className={styles.LogoDiv}>
            <img src={logo} width="100%" alt=""/>
        </div>
        <div className={styles.hamburgerMenu}>
    {isOpen ? (
      <FaTimes className="hamburger-icon" onClick={toggleMenu} />
    ) : (
      <FaBars className="hamburger-icon" onClick={toggleMenu} />
    )}
  </div>
        <ul className={styles.NavLinks}>
            <li className={styles.NavList}><a href="***" className={styles.NavItem}>Personal <MdArrowDropDown style={{color: "#C4C4C4", position: "absolute", top: "0.3rem"}}/></a>
            <div className={styles.dropdownContent}>
                <a href="***">PalmPay App <CgArrowLongRight className={styles.arrowRyt}
                 /></a>
                 
               
            </div>
            </li>
            <li className={styles.NavList}><a href="***" className={styles.NavItem}>Agents </a></li>
            <li className={styles.NavList}><a href="***" className={styles.NavItem}>Company  <MdArrowDropDown style={{color: "#C4C4C4", position: "absolute", top: "0.3rem"}}/></a>
            <div className={styles.dropdownContent}>
                <a href="***">PalmPay App <CgArrowLongRight className={styles.arrowRyt}
                
                 /></a>
                 <a href="***">PalmPay App <CgArrowLongRight className={styles.arrowRyt}
                
                /></a>
                <a href="***">PalmPay App <CgArrowLongRight className={styles.arrowRyt}
                
                /></a>
               
            </div>
            </li>
            <li className={styles.NavList}><a href="***" className={styles.NavItem}>Press</a></li>
            <li className={styles.NavList}><img src={NGN} width="30px" height="20px" alt="" /> <MdArrowDropDown style={{color: "#C4C4C4", position: "absolute", top: "0.3rem"}}/></li>
        </ul>
    </div>
  )
}

export default Navbar